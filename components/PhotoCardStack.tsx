"use client"
import { PhotoCard } from "./PhotoCard"
import { createContext, useContext, useRef, type ReactNode } from "react"

const photos = [
  {
    id: 1,
    src: "/profilepics/Andi Lane.jpg",
    alt: "Andi Lane",
    title: "Andi Lane",
  },
  {
    id: 2,
    src: "/profilepics/Candice Wu.jpg",
    alt: "Candice Wu",
    title: "Candice Wu",
  },
  {
    id: 3,
    src: "/profilepics/Elsie Roy.jpg",
    alt: "Elsie Roy",
    title: "Elsie Roy",
  },
  {
    id: 4,
    src: "/profilepics/Jordan Burgess.jpg",
    alt: "Jordan Burgess",
    title: "Jordan Burgess",
  },
]

interface GlobalTimeoutContextType {
  resetGlobalTimeout: (callback: () => void) => void
  clearGlobalTimeout: () => void
}

const GlobalTimeoutContext = createContext<GlobalTimeoutContextType | null>(null)

export const useGlobalTimeout = () => {
  const context = useContext(GlobalTimeoutContext)
  if (!context) {
    throw new Error("useGlobalTimeout must be used within GlobalTimeoutProvider")
  }
  return context
}

function GlobalTimeoutProvider({ children }: { children: ReactNode }) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const callbacksRef = useRef<(() => void)[]>([])

  const resetGlobalTimeout = (callback: () => void) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (!callbacksRef.current.includes(callback)) {
      callbacksRef.current.push(callback)
    }

    timeoutRef.current = setTimeout(() => {
      callbacksRef.current.forEach((cb) => cb())
    }, 3000)
  }

  const clearGlobalTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  return (
    <GlobalTimeoutContext.Provider value={{ resetGlobalTimeout, clearGlobalTimeout }}>
      {children}
    </GlobalTimeoutContext.Provider>
  )
}

export function PhotoCardStack() {
  return (
    <GlobalTimeoutProvider>
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* Subtle background drag text */}
        <div className="absolute z--10 font-mono dragtext text-[200px] tracking-wider font-semibold 
                        text-neutral-200 dark:text-neutral-800 select-none pointer-events-none">
          drag
        </div>

        {/* Photo cards */}
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            index={index}
            totalCards={photos.length}
          />
        ))}
      </div>
    </GlobalTimeoutProvider>
  )
}
