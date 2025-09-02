"use client"

import * as React from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

export type StackItem = {
  name: string
  icon: React.ReactNode
}

type TechStackCarouselProps = {
  items: StackItem[]
  className?: string
  dotSize?: number
  activeSize?: number
  gap?: number
  initialIndex?: number
}

export function TechStackCarousel({
  items,
  className,
  dotSize = 10,
  activeSize = 112,
  gap = 24,
  initialIndex = 0,
}: TechStackCarouselProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)

  const [activeIndex, setActiveIndex] = React.useState(initialIndex)
  const activeIndexRef = React.useRef(activeIndex)
  React.useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  const [sideSpacerPx, setSideSpacerPx] = React.useState(0)
  const [containerW, setContainerW] = React.useState(0)
  const [isHovered, setIsHovered] = React.useState(false)
  
  React.useEffect(() => {
    const update = () => {
      const el = containerRef.current
      if (!el) return
      const w = el.clientWidth
      setContainerW(w)
      setSideSpacerPx(Math.max(0, w / 2 - activeSize / 2))
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [activeSize])

  const slotW = activeSize
  const step = slotW + gap

  const xForIndex = React.useCallback(
    (i: number) => {
      const itemCenter = sideSpacerPx + i * step + slotW / 2
      return containerW / 2 - itemCenter
    },
    [containerW, sideSpacerPx, slotW, step],
  )

  const spring = { type: "spring", stiffness: 540, damping: 22, mass: 0.7 } as const

  const goToIndex = React.useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(items.length - 1, i))
      setActiveIndex(clamped)
      const targetX = xForIndex(clamped)
      controls.start({ x: targetX, transition: spring })
    },
    [controls, items.length, xForIndex],
  )

  React.useEffect(() => {
    const t = setTimeout(() => {
      goToIndex(initialIndex)
    }, 0)
    return () => clearTimeout(t)
  }, [initialIndex, goToIndex])

  React.useEffect(() => {
    controls.start({ x: xForIndex(activeIndex), transition: spring })
  }, [xForIndex, activeIndex, controls])

  const nearestIndexFromX = React.useCallback(
    (curX: number) => {
      const effectiveOffset = containerW / 2 - curX
      const raw = (effectiveOffset - sideSpacerPx - slotW / 2) / step
      const nearest = Math.round(raw)
      return Math.max(0, Math.min(items.length - 1, nearest))
    },
    [containerW, sideSpacerPx, slotW, step, items.length],
  )

  // Check if we're at boundaries
  const isAtStart = activeIndex === 0
  const isAtEnd = activeIndex === items.length - 1

  // Enhanced scroll lock management - only lock when not at boundaries
  React.useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault()
    }

    // Only prevent scroll when hovered AND not at boundaries
    const shouldPreventScroll = isHovered && !isAtStart && !isAtEnd

    if (shouldPreventScroll) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('wheel', preventScroll, { passive: false })
      document.addEventListener('touchmove', preventScroll, { passive: false })
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('wheel', preventScroll)
      document.removeEventListener('touchmove', preventScroll)
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('wheel', preventScroll)
      document.removeEventListener('touchmove', preventScroll)
    }
  }, [isHovered, isAtStart, isAtEnd])

  // ✅ Keyboard navigation
  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault()
        goToIndex(activeIndexRef.current + 1)
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToIndex(activeIndexRef.current - 1)
      }
    }
    el.addEventListener("keydown", onKey)
    return () => el.removeEventListener("keydown", onKey)
  }, [goToIndex])

  // ✅ Enhanced wheel navigation with boundary detection
  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let wheelLock = false
    
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      if (Math.abs(delta) < 8 || wheelLock) return

      const atStart = activeIndexRef.current === 0
      const atEnd = activeIndexRef.current === items.length - 1

      // If at boundaries and trying to go further, allow page scroll by not preventing default
      if ((atStart && delta < 0) || (atEnd && delta > 0)) {
        // Don't prevent default - allow natural page scroll
        return
      }

      // Only prevent default and handle carousel navigation when not at boundaries
      e.preventDefault()
      e.stopPropagation()
      wheelLock = true

      if (delta > 0) goToIndex(activeIndexRef.current + 1)
      else goToIndex(activeIndexRef.current - 1)

      setTimeout(() => (wheelLock = false), 180)
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [goToIndex, items.length])

  const dotStyle = { width: `${dotSize}px`, height: `${dotSize}px` }

  return (
    <div className={cn("w-full shadow-[2px_2px_10px_rgb(0,0,0,0.3)] max-w-[600px] font-mono", className)}>
      <div
        ref={containerRef}
        className={cn(
          "relative overflow-hidden py-6 outline-none transition-all duration-200",
          "rounded-xl border-2",
          "bg-neutral-50 dark:bg-neutral-900",
          "border-neutral-400 dark:border-neutral-500",
          " shadow-[0px_2px_5px_rgb(0,0,0,0.1)] dark:shadow-[0px_2px_5px_rgb(255,255,255,0.1)]",
          
        )}
        tabIndex={0}
        role="listbox"
        aria-label="Tech stacks slider"
        aria-activedescendant={`stack-item-${activeIndex}`}
        onPointerDown={() => containerRef.current?.focus()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <motion.div
          className="flex items-center"
          style={{ x, gap: `${gap}px`, touchAction: "pan-y" }}
          animate={controls}
          drag="x"
          dragElastic={0.22}
          dragMomentum={false}
          onDrag={(e, info) => {
            const cur = (x.get() ?? 0) + info.delta.x
            x.set(cur)
            const nearest = nearestIndexFromX(cur)
            if (nearest !== activeIndexRef.current) setActiveIndex(nearest)
          }}
          onDragEnd={(e, info) => {
            const cur = x.get()
            const velocity = info.velocity.x ?? 0
            let target = nearestIndexFromX(cur)
            const threshold = 300
            if (velocity < -threshold) target = Math.min(items.length - 1, target + 1)
            else if (velocity > threshold) target = Math.max(0, target - 1)
            goToIndex(target)
          }}
        >
          {/* left spacer */}
          <div className="flex-shrink-0" style={{ width: `${sideSpacerPx}px` }} aria-hidden="true" />

          {items.map((item, i) => {
            const isActive = i === activeIndex
            return (
              <div
                key={item.name}
                id={`stack-item-${i}`}
                role="option"
                aria-selected={isActive}
                className="relative flex-shrink-0 select-none cursor-pointer"
                style={{
                  width: `${slotW}px`,
                  height: `${slotW}px`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => goToIndex(i)}
              >
                {/* Inactive dot */}
                <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    className="rounded-full bg-neutral-300 dark:bg-neutral-700"
                    style={dotStyle}
                    animate={{ scale: isActive ? 0.5 : 1, opacity: isActive ? 0 : 1 }}
                    transition={spring}
                  />
                </motion.div>

                {/* Active card - with proper center transform origin */}
                <motion.div
                  className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center rounded-xl",
                    "bg-neutral-100 dark:bg-neutral-800",
                    "border border-neutral-300 dark:border-neutral-600",
                    "text-neutral-900 dark:text-neutral-100",
                    "keystroke-inset-shadow dark:dark-keystroke-inset-shadow",
                  )}
                  aria-label={item.name}
                  initial={false}
                  animate={{ 
                    scale: isActive ? 1 : 0.82, 
                    opacity: isActive ? 1 : 0 
                  }}
                  transition={spring}
                  transformTemplate={({ scale, opacity }) => 
                    `scale(${scale}) opacity(${opacity})`
                  }
                  style={{
                    transformOrigin: 'center center'
                  }}
                >
                  <div className="flex items-center justify-center">{item.icon}</div>
                  <span className="mt-2 text-xs sm:text-sm font-mono font-medium text-center px-2">
                    {item.name}
                  </span>
                </motion.div>
              </div>
            )
          })}

          {/* right spacer */}
          <div className="flex-shrink-0" style={{ width: `${sideSpacerPx}px` }} aria-hidden="true" />
        </motion.div>
      </div>

      <p className="my-1 text-xs text-neutral-600 dark:text-neutral-400 text-center font-mono">
        Drag/swipe, click items, wheel or arrows
      </p>
    </div>
  )
}