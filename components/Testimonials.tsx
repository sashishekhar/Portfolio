'use client';

import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { div, filter, style } from 'motion/react-client';
import Image from 'next/image';

function Testimonials() {
    const [paused, setPaused] = useState(false);
    const testimonials = [
        {
            name: 'John Doe',
            title: 'Developer',
            testimonial: 'This is one of the best portfolios I have ever seen. It\'s so clean and easy to navigate! I wish I could make something like this myself.',
            image: '/profilepics/Andi Lane.jpg'
        },
        {
            name: 'Jane Doe',
            title: 'UX Designer',
            testimonial: 'I love the design of this portfolio. It\'s so modern and sleek. I could easily find everything I was looking for.',
            image: '/profilepics/Candice Wu.jpg'
        },
        {
            name: 'Bob Smith',
            title: 'Product Manager',
            testimonial: 'This portfolio is so well organized. I could easily find all the information I needed and the projects were easy to navigate.',
            image: '/profilepics/Dillan Nguyen.jpg'
        },
        {
            name: 'Alice Johnson',
            title: 'QA Engineer',
            testimonial: 'I had a great experience with this portfolio. The projects were easy to understand and the code was so clean and organized.',
            image: '/profilepics/Drew Cano.jpg'
        },
        {
            name: 'Michael Brown',
            title: 'DevOps Engineer',
            testimonial: 'I was so impressed with this portfolio. The projects were so well organized and the code was so clean and easy to read.',
            image: '/profilepics/Elsie Roy.jpg'
        },
        {
            name: 'Sarah Lee',
            title: 'Data Scientist',
            testimonial: 'This portfolio is so easy to navigate and the projects are so interesting. I could easily find all the information I needed.',
            image: '/profilepics/Jordan Burgess.jpg'
        }

    ]
    return (
        <div className='w-full relative h-[400px]  overflow-hidden'>
            <div className="h-[350px] z-20 w-[2px]  absolute opacity-20 left-5
 top-[-10px]  [background-image:repeating-linear-gradient(to_bottom,_black_0_6px,_transparent_4px_12px)]
 dark:[background-image:repeating-linear-gradient(to_bottom,_white_0_6px,_transparent_4px_12px)]
  [mask-image:linear-gradient(to_bottom,_transparent,_black_30%,_black_80%,_transparent)]
  mask-repeat-no-repeat mask-size-full"
            />
            <div className="h-[350px] z-20 w-[2px]  absolute opacity-20 right-5
 top-[-10px]  [background-image:repeating-linear-gradient(to_bottom,_black_0_6px,_transparent_4px_12px)]
 dark:[background-image:repeating-linear-gradient(to_bottom,_white_0_6px,_transparent_4px_12px)]
  [mask-image:linear-gradient(to_bottom,_transparent,_black_30%,_black_80%,_transparent)]
  mask-repeat-no-repeat mask-size-full"
            />
            <div className="w-[900px] absolute opacity-20 h-[1.6px]  top-[80px] inset-x-0 z-10
      [background-image:repeating-linear-gradient(to_right,_black_0_6px,_transparent_4px_12px)]
      dark:[background-image:repeating-linear-gradient(to_right,_white_0_6px,_transparent_4px_12px)]
      [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_80%,_transparent)]
      mask-repeat-no-repeat mask-size-full"
            />
            <div className="w-[900px] absolute opacity-20 h-[1.6px]  bottom-[100px] inset-x-0 z-10
      [background-image:repeating-linear-gradient(to_right,_black_0_6px,_transparent_4px_12px)]
      dark:[background-image:repeating-linear-gradient(to_right,_white_0_6px,_transparent_4px_12px)]
      [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_80%,_transparent)]
      mask-repeat-no-repeat mask-size-full"
            />

            <div className="text-[16px] mb-10 font-mono text-neutral-900 dark:text-neutral-200 ml-8 mt-4  bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">appreciations</div>


            <div className="w-[760px] h-[220px] mx-auto flex justify-center items-center  relative overflow-hidden">
                <div className="w-[100px] absolute z-10 top-[50%] left-0 -translate-y-1/2 h-[210px] bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none"></div>
                <div className="w-[100px] absolute z-10 top-[50%] right-0 -translate-y-1/2 h-[210px] bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>

                <div className="overflow-hidden relative"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}>
                    <div
                        className="flex gap-4 whitespace-nowrap w-fit animate-scrollX"
                        style={{
                            animationPlayState: paused ? 'paused' : 'running',
                        }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <motion.div
                                
                                key={index} className="w-[250px] h-[170px] border-2 border-neutral-800 testimonial-card-inset-shadow    p-3 m-1 rounded-lg  transition text-left">
                                <div className='flex h-full flex-col'>
                                    <div className="text w-full h-fit break-words whitespace-normal text-neutral-900 dark:text-neutral-400 font-mono text-[12px]">{testimonial.testimonial}</div>
                                    <div className=' absolute flex flex-row items-center gap-2 bottom-4'>
                                        <Image src={testimonial.image} alt={testimonial.name} width={30} height={30} className="w-10 h-10 border-2 border-neutral-800 rounded-full" />
                                        <div className="text w-full h-fit break-words whitespace-normal text-neutral-900 dark:text-neutral-300 font-mono text-[12px]">{testimonial.name}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
