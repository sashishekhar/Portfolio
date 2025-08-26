"use client"

import { motion, useMotionValue, useTransform, animate, type PanInfo } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { useGlobalTimeout } from "./PhotoCardStack"

interface Photo {
  id: number
  src: string
  alt: string
  title: string
}

interface PhotoCardProps {
  photo: Photo
  index: number
  totalCards: number
}

export function PhotoCard({ photo, index, totalCards }: PhotoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isReturning, setIsReturning] = useState(false)
  const { resetGlobalTimeout, clearGlobalTimeout } = useGlobalTimeout()

  // Motion values for position
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Transform for rotation based on position
  const rotateX = useTransform(y, [-150, 200], [10, -10])
  const rotateY = useTransform(x, [-200, 200], [-10, 10])

  // Calculate initial stacked position
  const stackOffset = (index - (totalCards - 1) / 2) * 8
  const stackRotation = (index - (totalCards - 1) / 2) * 3
  const stackScale = 1 - index * 0.02

  const resetPosition = () => {
    setIsReturning(true)

    // Animate back to original position with floating motion
    animate(x, 0, {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1.2,
      duration: 1.5,
    })

    animate(y, 0, {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1.2,
      duration: 1.5,
      onComplete: () => {
        setIsReturning(false)
      },
    })
  }

  const handleDragStart = () => {
    setIsDragging(true)
    clearGlobalTimeout()
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    resetGlobalTimeout(resetPosition)
  }

  useEffect(() => {
    return () => {
      clearGlobalTimeout()
    }
  }, [clearGlobalTimeout])

  return (
    <motion.div
      ref={cardRef}
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        x,
        y,
        rotateX,
        rotateY,
        zIndex: isDragging ? 50 : totalCards - index,
      }}
      initial={{
        x: stackOffset,
        y: stackOffset,
        rotate: stackRotation,
        scale: stackScale,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        mass: 1,
      }}
      drag
      dragMomentum={false}
      dragElastic={0.05}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      whileHover={{
        scale: isDragging ? 1.05 : stackScale + 0.02,
        transition: { duration: 0.2 },
      }}
      whileDrag={{
        scale: 1.05,
        rotateZ: 5,
        transition: { duration: 0.1 },
      }}
    >
      <motion.div
        animate={{
          x: isDragging ? 0 : stackOffset,
          y: isDragging ? 0 : stackOffset,
          rotate: isDragging ? 0 : stackRotation,
          scale: isDragging ? 1 : stackScale,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="bg-white border-1 border-neutral-700 dark:bg-neutral-800 rounded-2xl shadow-2xl p-2 w-48 h-60 flex flex-col">
          <div className="relative  flex-1 rounded-xl overflow-hidden bg-gray-100 dark:bg-neutral-800 shadow-[5px_0px_5px_rgba(255,255,255,0.1),-5px_-5px_5px_rgba(255,255,255,0.05),-5px_5px_5px_rgba(255,255,255,0.1),5px_-5px_5px_rgba(255,255,255,0.05)] ">
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-lg font-mono font-semibold text-gray-800 dark:text-neutral-200">{photo.title}</h3>
            
          </div>
        </div>

        {(!isDragging || isReturning) && (
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full"
            animate={{
              scale: isReturning ? [1, 1.5, 1] : [1, 1.2, 1],
              opacity: isReturning ? [0.8, 1, 0.8] : [0.7, 1, 0.7],
            }}
            transition={{
              duration: isReturning ? 0.8 : 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
