// 'use client';

// import { useEffect, useState, useRef } from 'react';
// import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
// import { Home, Star, Code, Flame, Settings } from 'lucide-react';
// import { div, style } from 'motion/react-client';

// const icons = [Home, Star, Code, Flame, Settings];

// const DominoKeys = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   // const containerref = useRef<HTMLDivElement>(null);
//   // const mouseX = useMotionValue(0);

//   // const springX = useSpring(mouseX, { stiffness: 300, damping: 20 }); 

//   // const handlemousemove = (e: React.MouseEvent<HTMLDivElement>) => {
//   //   if(!containerref.current) return;

//   //   const handlebounds = containerref.current.getBoundingClientRect();
//   //   const x = e.clientX - handlebounds.left;

//   //   const clampedX = Math.max(0, Math.min(x, handlebounds.width));
//   //   mouseX.set(clampedX);
//   // };


  

//   const techStack = [
//     { title: 'JavaScript', icon: '/icons/js.png' },
//     { title: 'TypeScript', icon: '/icons/typescript.png' },
//     { title: 'Vector', icon: '/icons/Vector.png' },
//     { title: 'Motion', icon: '/icons/motion.png' },
//     { title: 'Bootstrap 5', icon: '/icons/bootstrap5.png' },
//     { title: 'Figma', icon: '/icons/figma.png' },
//     { title: 'Frame', icon: '/icons/Frame.png' },
//     { title: 'Framer', icon: '/icons/framer.png' },
//     { title: 'Git', icon: '/icons/git.png' },
//     { title: 'npm', icon: '/icons/npm.png' },
//     { title: 'GitHub', icon: '/icons/github.png' },
//     { title: 'MongoDB', icon: '/icons/mongoDB.png' },
//     { title: 'Next.js', icon: '/icons/nextjs2.png' },
//     { title: 'Node.js', icon: '/icons/nodejs.png' },
//     { title: 'PostgreSQL', icon: '/icons/postgresql.png' },
//     { title: 'React', icon: '/icons/react.png' },
//     { title: 'Supabase', icon: '/icons/supabase.png' },
//     { title: 'Vercel', icon: '/icons/Vercel.png' },
//     { title: 'Figma (Alt)', icon: '/icons/figma.png' }, // Optional duplicate or you can remove if needed
//   ];


//   return (
    
//     <div 
     
//     className="flex  flex-col  gap-1 px-4 w-full h-[400px] dark:bg-neutral-900 bg-white overflow-x-auto relative no-scrollbar">
//       <div className="text-[16px]  font-mono text-neutral-900 dark:text-neutral-200 ml-5 mb-5  bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">my keystrokes</div>
//       <div className='flex flex-row h-[250px] items-center justify-center gap-1'>
//         {techStack.map((tech, index) => {
//         const isHovered = hoveredIndex === index;
//         const Icon = tech.icon;

//         return (
          
//           <motion.div
//             key={index}
//             layout
//             layoutId={`domino-${index}`} // 👈 unique layoutId ensures smooth transition
//             transition={{
//               type: 'spring',
//               stiffness: 300,
//               damping: 22,
//               mass: 0.5,
//             }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//             className={`flex items-center justify-center dark:bg-white/20 bg-neutral-600  border border-white/10
//               rounded-full cursor-pointer overflow-hidden  ${isHovered ? 'keystroke-inset-shadow' : ''}
//               ${isHovered ? 'w-28' : 'w-4'} ${isHovered ? 'h-35' : 'h-8'} relative`}
//           >
//             <AnimatePresence mode="wait">
//               {isHovered && (
//                 <div>
                  
//                   <motion.div
//                     key="content"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.1, ease: 'easeOut' }}
//                     className="text-white text-center p-12  relative"
//                   >
//                     <img src={tech.icon} alt={tech.title} className=" h-12 absolute z-0 left-6 top-6 blur-md opacity-50 " />
//                     <motion.img
//                       initial={{ opacity: 0, scale: 0.7 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.2, ease: 'easeOut' }}
//                       src={tech.icon} alt={tech.title} className=" h-12  absolute  z-10 inset-x-0 left-6  top-6 " />
//                   </motion.div>
//                 </div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         );
//       })}
//       </div>
      
//     </div>
    
//   );
// };

// export default DominoKeys;


'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { filter, style } from 'motion/react-client';

const DominoKeys = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  return (
    <div className="flex flex-col gap-1 px-4 w-full h-[350px] dark:bg-neutral-900 bg-white overflow-x-auto relative no-scrollbar">
      <div className="text-[16px] font-mono text-neutral-900 dark:text-neutral-200 ml-5 mb-5 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
        my keystrokes
      </div>
      <motion.div 
      initial={{
        boxShadow : '0 8px 30px rgb(255,255,255,0.1)'
      }}
      whileHover={{
        boxShadow : '0 8px 30px rgb(255,255,255,0.2)'
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut'
      }}
      className='absolute inset-0 mx-auto mt-23 z-0 w-[600px] h-[160px]    border-1 border-neutral-600 bg-transparent rounded-md '>

      </motion.div>


      <div className='flex flex-row h-[250px] items-center justify-center gap-1'>
        {techStack.map((tech, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={tech.title}
              layoutId={`domino-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              // THE FIX: Added p-1.5 (6px padding) to create a thicker border
              className={`relative flex justify-center items-center overflow-hidden rounded-full ${isHovered ? 'keystroke-inset-shadow' : ''} cursor-pointer dark:bg-neutral-800  bg-black/5 p-[2px]`}
              initial={{ width: '1rem', height: '2rem' }}
              animate={{
                width: isHovered ? '6rem' : '1rem',
                height: isHovered ? '7rem' : '2rem',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {isHovered && (
                <motion.div
                  className="absolute inset-[-1000%]"
                  style={{
                    backgroundImage: 'conic-gradient(from 180deg at 50% 50%, #a855f7 0%, #3b82f6 10%, transparent 25%)',
                    filter: 'blur(10px)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4, // Slightly slowed down
                    ease: 'linear',
                    repeat: Infinity,
                  }}
                />
              )}

              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full dark:bg-neutral-800 bg-neutral-200">
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="flex flex-col relative items-center text-center"
                    >
                      <img src={tech.icon} alt={tech.title} className=" h-12 absolute z-0 inset-0 blur-md opacity-50 " />
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
        })}
      </div>
    </div>
  );
};

export default DominoKeys;