import React from 'react'
import SalutationButton from './SalutationButton'
import DottedLine from './Dottedline'

const Header = () => {
  return (
    <div className='flex mt-20 relative flex-row justify-between  h-[180px]  rounded-[20px] p-4'>
        <div className="w-[570px] absolute opacity-20 h-[1.4px]  top-[61px] left-[-20px] z-10
      [background-image:repeating-linear-gradient(to_right,_black_0_6px,_transparent_4px_12px)]
      dark:[background-image:repeating-linear-gradient(to_right,_white_0_6px,_transparent_4px_12px)]
      [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_80%,_transparent)]
      mask-repeat-no-repeat mask-size-full"
    />
    <div className="h-[190px] z-20 w-[2px]  absolute opacity-20 left-2
 top-2  [background-image:repeating-linear-gradient(to_bottom,_black_0_6px,_transparent_4px_12px)]
 dark:[background-image:repeating-linear-gradient(to_bottom,_white_0_6px,_transparent_4px_12px)]
  [mask-image:linear-gradient(to_bottom,_transparent,_black_30%,_black_80%,_transparent)]
  mask-repeat-no-repeat mask-size-full"
/>
      <div>
        <div className="flex  flex-col gap-2 ">
            <div className="nameSalutation flex gap-4 flex-row items-center">
                <div className='text-[30px]  text-shadow-xs text-shadow-neutral-400 text-neutral-800 dark:text-neutral-100 tracking-tighter   font-bold font-mono'>Sashi Sekhar Singh</div>
                <div><SalutationButton/></div>
            </div>
            

            <div className='subheading'>
                <div className='text-[14px] text-neutral-500  font-mono w-[500px] tracking-tight'>
                    They call me Sketch. What kind of name is that? Just a kid with a wrench in one hand and a wireframe in the other—designing what tomorrow runs on.
                </div>
            </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Header
