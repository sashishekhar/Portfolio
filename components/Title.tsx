"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

type HoverTitleProps = {
  defaultText: string
  hoverText: string
  className?: string
  as?: keyof JSX.IntrinsicElements
  bordered?: boolean
  borderClassName?: string

  shimmerDurationMs?: number
  jumpHeight?: number
  charStaggerMs?: number

  mistBlurPx?: number
  mistDriftY?: number
  mistDriftX?: number
  driftDurationMs?: number
  mistPuffs?: number
  materializeBlurPx?: number
  materializeOffsetY?: number
  revealDurationMs?: number
}

export function HoverTitle({
  defaultText,
  hoverText,
  className,
  as: Tag = "h1",
  bordered = true,
  borderClassName,
  shimmerDurationMs = 3200,
  jumpHeight = 1,
  charStaggerMs = 25,
  mistBlurPx = 10,
  mistDriftY = -12,
  mistDriftX = 10,
  driftDurationMs = 1100,
  mistPuffs = 4,
  materializeBlurPx = 8,
  materializeOffsetY = 6,
  revealDurationMs = 900,
}: HoverTitleProps) {
  const prefersReducedMotion = useReducedMotion()

  const splitChars = (str: string) => Array.from(str).map((ch) => (ch === " " ? "\u00A0" : ch))
  const baseChars = React.useMemo(() => splitChars(defaultText), [defaultText])
  const hoverChars = React.useMemo(() => splitChars(hoverText), [hoverText])

  const driftSeeds = React.useMemo(
    () =>
      baseChars.map((_ch, i) => {
        const r = Math.sin(i * 999) * 43758.5453
        const n = r - Math.floor(r)
        return n * 2 - 1 || 0.001
      }),
    [baseChars],
  )

  const charStaggerSec = charStaggerMs / 1000

  const baseCharVariants = {
    initial: { x: 0, y: 0, opacity: 1, filter: "blur(0px)" },
    hover: (i: number) =>
      prefersReducedMotion
        ? { opacity: 0 }
        : {
            x: driftSeeds[i] * mistDriftX,
            y: mistDriftY,
            opacity: 0,
            filter: `blur(${mistBlurPx}px)`,
            transition: {
              duration: shimmerDurationMs / 1000, // ✅ shimmer duration used here
              ease: "easeOut" as const,
              delay: i * charStaggerSec,
            },
          },
  }

  const revealCharVariants = {
    initial: { opacity: 0, y: materializeOffsetY, filter: `blur(${materializeBlurPx}px)` },
    hover: (i: number) =>
      prefersReducedMotion
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : {
            opacity: 1,
            y: [materializeOffsetY, -jumpHeight, 0],
            filter: ["blur(var(--start-blur, 8px))", "blur(2px)", "blur(0px)"],
            transition: {
              duration: revealDurationMs / 1000,
              ease: "easeOut" as const,
              delay: i * charStaggerSec,
            },
          },
  }

  const puffs = React.useMemo(() => {
    return Array.from({ length: mistPuffs }).map((_, i) => {
      const r = Math.sin((i + 1) * 123.456) * 43758.5453
      const n = r - Math.floor(r)
      const xSign = i % 2 === 0 ? 1 : -1
      return {
        topPct: 35 + ((n * 30) | 0),
        leftPct: 45 + xSign * (10 + ((n * 20) | 0)),
        scale: 0.8 + (n % 0.2),
        delay: (n % 0.1) * 0.15,
        xDrift: xSign * (mistDriftX * 1.2),
        yDrift: mistDriftY * (0.8 + (n % 0.2)),
      }
    })
  }, [mistPuffs, mistDriftX, mistDriftY])

  return (
    <motion.div layout>
      <Tag
        className={cn(
          "relative inline-block leading-none tracking-tight",
          "text-[24px]",
          bordered && "border px-3 py-1.5 md:px-4 md:py-2",
          bordered && borderClassName,
          "select-none text-foreground",
          className,
        )}
        aria-label={hoverText}
      >
        <span className="sr-only">{hoverText}</span>

        <motion.span layout className="relative block group" initial="initial" whileHover="hover">
          {/* Default text */}
          <span
            aria-hidden
            className={cn("pointer-events-none absolute inset-0", "transition-all")}
            style={{ willChange: "opacity, filter" }}
          >
            {baseChars.map((ch, i) => (
              <motion.span
                key={`base-${i}-${ch}`}
                className="inline-block"
                custom={i}
                variants={baseCharVariants}
                transition={{ ease: "easeOut" }}
                aria-hidden
              >
                {ch}
              </motion.span>
            ))}
          </span>

          {/* Hover text */}
          <span
            aria-hidden
            className={cn("relative block", "transition-opacity")}
            style={{ willChange: "opacity" }}
          >
            {hoverChars.map((ch, i) => (
              <motion.span
                key={`hover-${i}-${ch}`}
                className="inline-block"
                style={{ ["--start-blur" as string]: `${materializeBlurPx}px` }}
                custom={i}
                variants={revealCharVariants}
                transition={{ ease: "easeOut" }}
                aria-hidden
              >
                {ch}
              </motion.span>
            ))}
          </span>

          {/* Mist puffs */}
          <span aria-hidden className="pointer-events-none absolute inset-0">
            {puffs.map((puff, i) => (
              <motion.span
                key={`puff-${i}`}
                className="absolute block rounded-full"
                style={{
                  top: `${puff.topPct}%`,
                  left: `${puff.leftPct}%`,
                  width: "2.75rem",
                  height: "2.75rem",
                  background:
                    "radial-gradient(closest-side, rgba(255,255,255,0.18), rgba(255,255,255,0.1), rgba(255,255,255,0))",
                  filter: `blur(${Math.max(1, Math.floor(mistBlurPx / 2))}px)`,
                  transform: `translate(-50%, -50%) scale(${puff.scale})`,
                  mixBlendMode: "screen",
                  opacity: 0,
                }}
                initial={{ opacity: 0 }}
                variants={{
                  hover: prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0.08,
                        x: puff.xDrift,
                        y: puff.yDrift * 1.2,
                        transition: {
                          duration: (driftDurationMs / 1000) * 1.1,
                          ease: "easeOut",
                          delay: puff.delay,
                        },
                      },
                }}
              />
            ))}
          </span>
        </motion.span>
      </Tag>
    </motion.div>
  )
}

export default HoverTitle
