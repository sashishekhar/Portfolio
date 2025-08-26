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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [dotReached, setDotReached] = useState(false)

  const dotPosition = (index + 0.7) / (totalItems + 1)
  const isLineAtDot = lineProgress >= dotPosition
  const showCard = dotReached || isLineAtDot

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-500"
      case "education":
        return "bg-green-500"
      case "project":
        return "bg-purple-500"
      case "achievement":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

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
    if (isLineAtDot && !dotReached) {
      setDotReached(true)
    }
  }, [isLineAtDot, dotReached, index])

  return (
    <div ref={ref} className="relative flex items-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={showCard ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 300,
        }}
        className="w-5 h-5 rounded-full relative z-10 flex-shrink-0 mr-8 border-2 border-background shadow-lg flex items-center justify-center bg-neutral-500 hover:bg-neutral-400 transition-colors cursor-pointer group"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="absolute inset-0 rounded-full bg-neutral-500 opacity-0 group-hover:opacity-100"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={showCard ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 100, scale: 0.8 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
        }}
        className="flex-1 max-w-2xl"
      >
        <motion.div
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl" />

          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ["0%", "200%"] }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: 0,
              }}
              style={{ display: "none" }}
              whileHover={{ display: "block" }}
            />
          </div>

          <div className="relative p-6 space-y-2">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center font-mono gap-1 px-2 py-1 rounded-full ${
                  item.type === "work"
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : item.type === "education"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : item.type === "project"
                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        : "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                }`}
              >
                {getTypeIcon(item.type)}
                <span className="text-[12px] font-semibold uppercase font-mono tracking-wider">{item.type}</span>
              </div>
              <div className="flex text-[12px] items-center gap-1 text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span className=" font-mono">{item.year}</span>
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-[16px] font-mono font-bold text-foreground leading-tight">{item.title}</h3>
              {item.company && (
                <div className="flex font-mono text-neutral-400 text-[14px] items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{item.company}</span>
                </div>
              )}
            </div>

            <p className="text-muted-foreground leading-normal font-mono text-neutral-200 text-[13px]">{item.description}</p>

            {item.skills && item.skills.length > 0 && (
              <div className="flex font-mono flex-wrap gap-2 pt-1">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-[12px] font-medium bg-muted/30 hover:bg-muted/50 rounded-full border border-muted/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div
              className={`absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 ${
                item.type === "work"
                  ? "bg-blue-500"
                  : item.type === "education"
                    ? "bg-green-500"
                    : item.type === "project"
                      ? "bg-purple-500"
                      : "bg-orange-500"
              } blur-2xl`}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const totalHeight = items.length * 180 + 100
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    const unsubscribe = lineProgress.onChange((latest) => {
      setCurrentProgress(latest)
    })
    return unsubscribe
  }, [lineProgress])

  return (
    <div ref={containerRef} className="relative w-xl mx-auto py-12">
      <div className="absolute left-2 top-0 w-0.5 bg-border/30" style={{ height: `${totalHeight}px` }} />

      <motion.div
        className="absolute left-2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/80 to-primary/60 origin-top shadow-lg"
        style={{
          height: lineHeight,
          maxHeight: `${totalHeight}px`,
        }}
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
