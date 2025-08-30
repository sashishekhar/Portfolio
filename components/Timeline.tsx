"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Code } from "lucide-react"

interface TimelineItem {
  year: string
  title: string
  company?: string
  description: string
  skills?: string[]
  type: "education" | "work" | "project" | "achievement"
}

interface TimelineProps {
  items: TimelineItem[]
}

const TimelineItemComponent = ({
  item,
  index,
  totalItems,
  lineProgress,
}: { item: TimelineItem; index: number; totalItems: number; lineProgress: number }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  // Trigger when the card itself is on screen (safety net for last item)
  const isInView = useInView(ref, { once: true, margin: "-50px 0px -50px 0px" })
  const [dotReached, setDotReached] = useState(false)

  // Place the dot evenly across 0..1 and clamp a little below 1 so last item can trigger
  const dotPosition = Math.min((index + 0.5) / totalItems, 0.98)
  const isLineAtDot = lineProgress >= dotPosition

  // Show when the line reaches the dot OR the card is in view (either condition)
  const showCard = dotReached || isLineAtDot || isInView

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-3 h-3" />
      case "education":
        return <GraduationCap className="w-3 h-3" />
      case "project":
        return <Code className="w-3 h-3" />
      case "achievement":
        return <Award className="w-3 h-3" />
      default:
        return <Calendar className="w-3 h-3" />
    }
  }

  useEffect(() => {
    if (isLineAtDot && !dotReached) setDotReached(true)
  }, [isLineAtDot, dotReached])

  return (
    <div ref={ref} className="relative flex items-center">
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={showCard ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        className="w-3 h-3 rounded-full relative z-10 flex-shrink-0 mr-8 ml-[2.5px] border-2 border-background shadow-md flex items-center justify-center bg-neutral-400 dark:bg-neutral-500 hover:bg-neutral-300 dark:hover:bg-neutral-400 transition-colors cursor-pointer group"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 rounded-full bg-neutral-400 dark:bg-neutral-500 opacity-0 group-hover:opacity-100"
        />
      </motion.div>

      {/* Timeline Card */}
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={showCard ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], type: "spring", stiffness: 100 }}
        className="flex-1 max-w-2xl"
      >
        <motion.div className="relative group cursor-pointer" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
          {/* Glass Background (light & dark) */}
          <div className="absolute inset-0 rounded-2xl border shadow-lg backdrop-blur-xl 
                          bg-white/80 border-neutral-200 
                          dark:bg-neutral-900/60 dark:border-neutral-700" />

          {/* Hover shimmer */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-neutral-700/30 -translate-x-full"
              animate={{ x: ["0%", "200%"] }}
              transition={{ duration: 0.8, ease: "easeInOut", repeat: 0 }}
              style={{ display: "none" }}
              whileHover={{ display: "block" }}
            />
          </div>

          {/* Content */}
          <div className="relative p-6 space-y-2">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center font-mono gap-1 px-2 py-1 rounded-full ${
                  item.type === "work"
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                    : item.type === "education"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                      : item.type === "project"
                        ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                        : "bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20"
                }`}
              >
                {getTypeIcon(item.type)}
                <span className="text-[12px] font-semibold uppercase tracking-wider">{item.type}</span>
              </div>
              <div className="flex text-[12px] items-center gap-1 text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-3 h-3" />
                <span className="font-mono">{item.year}</span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-[16px] font-mono font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                {item.title}
              </h3>
              {item.company && (
                <div className="flex font-mono text-neutral-600 dark:text-neutral-400 text-[14px] items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{item.company}</span>
                </div>
              )}
            </div>

            <p className="leading-normal font-mono text-[13px] text-neutral-700 dark:text-neutral-300">
              {item.description}
            </p>

            {item.skills && item.skills.length > 0 && (
              <div className="flex font-mono flex-wrap gap-2 pt-1">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[12px] font-medium 
                               bg-neutral-100 text-neutral-700 border border-neutral-200 
                               dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700 
                               rounded-full transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Soft colored accent */}
            <div
              className={`absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 blur-2xl ${
                item.type === "work"
                  ? "bg-blue-500"
                  : item.type === "education"
                    ? "bg-green-500"
                    : item.type === "project"
                      ? "bg-purple-500"
                      : "bg-orange-500"
              }`}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Give more headroom so progress can reach ~1.0 before you hit the page bottom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.5"],
  })

  // Progressed line height and numeric progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    const unsubscribe = lineProgress.onChange((v) => setCurrentProgress(v))
    return unsubscribe
  }, [lineProgress])

  // A generous line length; purely visual, doesn't affect scroll
  const totalHeight = items.length * 260

  return (
    <div ref={containerRef} className="relative w-xl mx-auto py-12 pb-24">
      {/* Base timeline line */}
      <div
        className="absolute left-2 top-10 w-0.5 bg-neutral-300 rounded-full dark:bg-neutral-700"
        style={{ height: `${totalHeight}px` }}
      />

      {/* Progress line */}
      <motion.div
        className="absolute left-2 top-50 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary/60  rounded-full shadow-lg"
        style={{ height: lineHeight, maxHeight: `${totalHeight}px` }}
      />

      <div className="space-y-10">
        {items.map((item, index) => (
          <TimelineItemComponent
            key={index}
            item={item}
            index={index}
            totalItems={items.length}
            lineProgress={currentProgress}
          />
        ))}
      </div>
    </div>
  )
}
