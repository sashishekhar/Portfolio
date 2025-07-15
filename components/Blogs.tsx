import React from 'react'

const Blogs = () => {
    const blogPosts = [
        {
            title: "Tailwind vs Vanilla",
            description:
                "A sneak overlook on the best practices of Tailwind CSS and why Vanilla CSS is still some developers go to css.",
            date: "5th July’ 25",

        },
        {
            title: "React Hooks in 2025",
            description:
                "Exploring the evolution and essential patterns of React Hooks for modern web development.",
            date: "5th July’ 25",

        },
        {
            title: "Understanding WebAssembly",
            description:
                "A deep dive into WebAssembly's capabilities and its growing impact on performance-critical web applications.",
            date: "5th July’ 25",

        },
    ];

    return (
        <div className='w-full relative h-screen flex flex-col justify-center px-9'>

            <div className="h-[460px] z-20 w-[2px]  absolute opacity-20 left-5
 top-40  [background-image:repeating-linear-gradient(to_bottom,_black_0_6px,_transparent_4px_12px)]
 dark:[background-image:repeating-linear-gradient(to_bottom,_white_0_6px,_transparent_4px_12px)]
  [mask-image:linear-gradient(to_bottom,_transparent,_black_30%,_black_80%,_transparent)]
  mask-repeat-no-repeat mask-size-full"
      />
      <div className="h-[460px] z-20 w-[2px]  absolute opacity-20 right-5
 top-40  [background-image:repeating-linear-gradient(to_bottom,_black_0_6px,_transparent_4px_12px)]
 dark:[background-image:repeating-linear-gradient(to_bottom,_white_0_6px,_transparent_4px_12px)]
  [mask-image:linear-gradient(to_bottom,_transparent,_black_30%,_black_80%,_transparent)]
  mask-repeat-no-repeat mask-size-full"
      />

            <div className="text-[16px] mb-5 font-mono text-neutral-900 dark:text-neutral-200   bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">blogs because i dont't write</div>
                    
            <div className="flex flex-col w-full  gap-4 ">
                {blogPosts.map((post, index) => (
                    <div key={index} className="flex flex-col w-full gap-1 justify-center px-2 ">
                        <div className="flex flex-row justify-between items-center gap-10">
                            <div className="text-[20px] font-medium font-mono text-neutral-900 dark:text-neutral-300">
                                {post.title}
                            </div>
                            <div className="text-[12px] font-medium font-mono text-neutral-900 dark:text-neutral-300">
                                {post.date}
                            </div>
                        </div>

                        <div className="w-[400px] h-[60px] text-[13px] text-neutral-500 dark:text-neutral-500  font-mono ">
                            {post.description}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs
