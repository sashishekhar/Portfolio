import React from 'react'
import { Linkedin01Icon } from "hugeicons-react";
import { Github01Icon } from "hugeicons-react";
import { NewTwitterIcon } from 'hugeicons-react';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center '>
      <div className="w-[800px] ml-3  opacity-20 h-[1.6px]  z-10
            [background-image:repeating-linear-gradient(to_right,_black_0_6px,_transparent_4px_12px)]
            dark:[background-image:repeating-linear-gradient(to_right,_white_0_6px,_transparent_4px_12px)]
            [mask-image:linear-gradient(to_right,_transparent,_black_20%,_black_80%,_transparent)]
            mask-repeat-no-repeat mask-size-full"
    />
    <div className='flex flex-row justify-between my-2 mx-12'>
        <div className='text-[14px] font-mono dark:text-neutral-400'>Made with love by Sashi</div>
        <div className='flex flex-row gap-4'>
            <Linkedin01Icon className='w-5 h-5 dark:text-neutral-400' />
            <Github01Icon className='w-5 h-5 dark:text-neutral-400' />
            <NewTwitterIcon className='w-5 h-5 dark:text-neutral-400' />
        </div>
    </div>
    </div>
  )
}

export default Footer
