'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { filter, style } from 'motion/react-client';
import { useTheme } from "next-themes";

const DominoKeys = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // sm breakpoint is 640px
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const techStack = [
    { title: 'JavaScript', icon: '/icons/js.png' },
    { title: 'TypeScript', icon: '/icons/typescript.png' },
    { title: 'Vector', icon: '/icons/Vector.png' },
    { title: 'Motion', icon: '/icons/motion.png' },
    { title: 'Bootstrap 5', icon: '/icons/bootstrap5.png' },
    { title: 'Figma', icon: '/icons/figma.png' },
    { title: 'Frame', icon: '/icons/Frame.png' },
    { title: 'Framer', icon: '/icons/framer.png' },
    { title: 'Git', icon: '/icons/git.png' },
    { title: 'npm', icon: '/icons/npm.png' },
    { title: 'GitHub', icon: '/icons/github.png'},
    { title: 'MongoDB', icon: '/icons/mongoDB.png' },
    { title: 'Next.js', icon: '/icons/nextjs2.png' },
    { title: 'Node.js', icon: '/icons/nodejs.png' },
    { title: 'PostgreSQL', icon: '/icons/postgresql.png' },
    { title: 'React', icon: '/icons/react.png' },
    { title: 'Supabase', icon: '/icons/supabase.png' },
    { title: 'Vercel', icon: '/icons/Vercel.png' },
  ];

  // Individual tech item component with intersection observer
  const TechItem = ({ tech, index }: { tech: any, index: number }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(itemRef, { 
      threshold: 0.5,
      margin: "-50% 0px -50% 0px" // Trigger when item is in the center area
    });

    const isHovered = hoveredIndex === index;
    const isActive = isSmallScreen ? (isInView) : isHovered;

    // Remove the activeIndex state management to reduce jitter
    // useEffect(() => {
    //   if (isSmallScreen && isInView && activeIndex !== index) {
    //     setActiveIndex(index);
    //   }
    // }, [isInView, isSmallScreen, index]);

    return (
      <motion.div
        ref={itemRef}
        key={tech.title}
        layoutId={`domino-${index}`}
        onMouseEnter={() => !isSmallScreen && setHoveredIndex(index)}
        onMouseLeave={() => !isSmallScreen && setHoveredIndex(null)}
        className={`relative flex justify-center items-center overflow-hidden rounded-full ${isActive ? 'keystroke-inset-shadow' : ''} cursor-pointer dark:bg-neutral-800 bg-neutral-500 p-[2px]`}
        initial={{ 
          width: '1rem', 
          height: '2rem' 
        }}
        animate={{
          width: isActive ? (isSmallScreen ? '7rem' : '6rem') : '1rem',
          height: isActive ? (isSmallScreen ? '6rem' : '7rem') : '2rem',
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 25, // Increased damping to reduce jitter
          mass: 0.8 // Added mass for smoother animation
        }}
      >
        {isActive && (
          <motion.div
            className="absolute inset-[-1000%]"
            style={{
              backgroundImage: 'conic-gradient(from 180deg at 50% 50%, #a855f7 0%, #3b82f6 10%, transparent 25%)',
              filter: 'blur(10px)',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              ease: 'linear',
              repeat: Infinity,
            }}
          />
        )}

        <div className="relative z-100 flex h-full w-full items-center justify-center rounded-full dark:bg-neutral-800 bg-neutral-500">
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex flex-col relative items-center text-center"
              >
                <img src={tech.icon} alt={tech.title} className="h-12 absolute z-0 inset-0 blur-md opacity-50" />
                <img
                  src={tech.icon}
                  alt={tech.title}
                  className="h-12 w-12"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <div 
      ref={containerRef}
      className={`flex flex-col gap-1 px-4 w-full overflow-x-auto relative no-scrollbar ${
        isSmallScreen ? 'h-auto' : 'h-[350px]'
      }`}
    >
      <div className="text-[16px] font-mono text-neutral-800 dark:text-neutral-200 ml-5 mb-5 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
        my keystrokes
      </div>
      
      {/* Background container - show in both orientations */}
      <motion.div
        initial={{
          boxShadow: currentTheme === "dark" ? "0 8px 30px rgb(255,255,255,0.1)" : "0 8px 30px rgb(0,0,0,0.1)"
        }}
        whileHover={{
          boxShadow: currentTheme === "dark" ? "0 8px 30px rgb(255,255,255,0.2)" : "0 8px 30px rgb(0,0,0,0.2)"
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className={`absolute z-0 border-1 mx-auto border-neutral-300 dark:border-neutral-600 bg-transparent rounded-md ${
          isSmallScreen 
            ? 'inset-x-4 top-16 bottom-8 w-[300px] h-auto' // Full height container for mobile
            : 'inset-0 mx-auto mt-23 w-[380px] sm:w-[600px] h-[160px]' // Original desktop size
        }`}
      />

      <div className={`flex items-center justify-center gap-1 relative z-10 ${
        isSmallScreen 
          ? 'flex-col  pt-10 pb-10 h-[800px] p' // Vertical layout for small screens
          : 'flex-row h-[250px]' // Horizontal layout for large screens
      }`}>
        {techStack.map((tech, index) => (
          <TechItem key={tech.title} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DominoKeys;