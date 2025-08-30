"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

type TechItem = {
  label: string
  sublabel?: string
}

type TechStackShowcaseProps = {
  items: TechItem[]
  intervalMs?: number
  staggerMs?: number
  transitionMs?: number
  className?: string
  ariaLabel?: string
}

const MIN_COLUMNS = 4
const ITEM_HEIGHT_PX = 64 // h-16

function normalizeItems(items: TechItem[]): TechItem[] {
  if (items.length >= MIN_COLUMNS) return items
  const out: TechItem[] = []
  while (out.length < MIN_COLUMNS) out.push(...items)
  return out.slice(0, MIN_COLUMNS)
}

function splitIntoColumns(items: TechItem[], cols = MIN_COLUMNS): TechItem[][] {
  const byCol: TechItem[][] = Array.from({ length: cols }, () => [])
  items.forEach((it, i) => byCol[i % cols].push(it))
  // Ensure each column can rotate (at least 2 items)
  for (let c = 0; c < cols; c++) {
    if (byCol[c].length < 2) {
      byCol[c] = [...byCol[c], ...byCol[c]]
    }
  }
  return byCol
}

type ColumnRotatorProps = {
  items: TechItem[]
  colIndex: number
  delayMs: number
  transitionMs: number
  reduced: boolean
  tickCount: number
}

function ColumnRotator({
  items,
  colIndex,
  delayMs,
  transitionMs,
  reduced,
  tickCount,
}: ColumnRotatorProps) {
  const hasMultiple = items.length > 1
  const initialIndex = items.length ? colIndex % items.length : 0
  const [index, setIndex] = React.useState(initialIndex)

  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  React.useEffect(() => {
    if (reduced || !hasMultiple) return
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % items.length)
    }, delayMs)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [tickCount, delayMs, reduced, hasMultiple, items.length])

  const current = items[index]

  return (
    <div
      className={cn(
        "relative h-16 overflow-hidden rounded-md border",
        "bg-gray-100/60 dark:bg-muted/40",
        "border-gray-300 dark:border-neutral-700",
      )}
      style={{ height: ITEM_HEIGHT_PX }}
    >
      {reduced ? (
        <div className="flex h-16 items-center justify-center px-3 text-sm text-gray-800 dark:text-foreground">
          <div className="flex w-full max-w-xs items-center justify-center gap-2">
            <div
              aria-hidden
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded text-[11px] font-medium",
                "bg-gray-200 text-gray-700 dark:bg-white dark:text-foreground/70",
              )}
            >
              {getInitials(current?.label ?? "")}
            </div>
            <div className="min-w-0 text-center">
              <span className="block truncate font-medium">
                {current?.label}
              </span>
              {current?.sublabel ? (
                <span className="block truncate text-gray-500 dark:text-foreground/60">
                  {current.sublabel}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${colIndex}-${index}`}
            className="absolute inset-0 flex items-center justify-center px-3"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: transitionMs / 1000, ease: "easeInOut" }}
          >
            <div className="flex w-full max-w-xs items-center justify-center gap-2 text-sm text-gray-800 dark:text-foreground">
              <div className="min-w-0 text-center">
                <span className="block truncate font-medium">
                  {current?.label}
                </span>
                {current?.sublabel ? (
                  <span className="block truncate text-gray-500 dark:text-foreground/60">
                    {current?.sublabel}
                  </span>
                ) : null}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export function TechStackShowcase({
  items,
  intervalMs = 2200,
  staggerMs = 120,
  transitionMs = 320,
  className,
  ariaLabel = "Tech stack showcase",
}: TechStackShowcaseProps) {
  const base = React.useMemo(() => normalizeItems(items), [items])
  const columns = React.useMemo(() => splitIntoColumns(base, MIN_COLUMNS), [base])

  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const mq =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null
    const update = () => setReduced(Boolean(mq?.matches))
    update()
    mq?.addEventListener?.("change", update)
    return () => mq?.removeEventListener?.("change", update)
  }, [])

  const [tick, setTick] = React.useState(0)
  React.useEffect(() => {
    if (reduced) return
    setTick((t) => t + 1)
    const id = setInterval(() => setTick((t) => t + 1), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs, reduced])

  return (
    <section
      aria-label={ariaLabel}
      className={cn(
        "w-full rounded-md border p-4 shadow-sm",
        "bg-white dark:bg-card",
        "border-gray-300 dark:border-neutral-700",
        "shadow-[0_2px_6px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_10px_rgba(255,255,255,0.1)]",
        className,
      )}
    >
      <div className="grid grid-cols-4 gap-4">
        {columns.map((colItems, col) => (
          <ColumnRotator
            key={`col-${col}`}
            items={colItems}
            colIndex={col}
            delayMs={col * staggerMs}
            transitionMs={transitionMs}
            reduced={reduced}
            tickCount={tick}
          />
        ))}
      </div>
    </section>
  )
}

function getInitials(text: string) {
  const parts = text.trim().split(/\s+/)
  if (!parts.length) return "•"
  const first = parts[0][0] ?? ""
  const second = parts.length > 1 ? parts[1][0] ?? "" : ""
  return (first + second).toUpperCase()
}
