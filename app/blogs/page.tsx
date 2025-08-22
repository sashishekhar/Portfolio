import { ContactUs } from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import ContactMeHero from '@/components/Contactmesvg'
import Footer from '@/components/Footer';
import { AnimatedDoc } from '@/components/AnimatedDoc';
import BlogCard from '@/components/BlogCard';


export default function ContactPage() {

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
        <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
            {/* Dotted Background */}
            <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert opacity-50 dark:opacity-80 bg-repeat bg-center -z-10"></div>

            {/* Grid layout */}
            <div className="main grid grid-cols-[2.25fr_5.5fr_2.25fr] w-full h-screen">

                {/* LEFT COLUMN with spacer + fixed card */}
                <div className="relative">
                    {/* Spacer keeps grid width intact */}
                    <div className="w-[280px] h-[242px] ml-[50px]" />

                </div>

                {/* MIDDLE COLUMN (main content) */}
                <div className="middle ml-2 relative rounded-[0px] dark:shadow-xl shadow-neutral-500/50 dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">

                    <div style={{ zIndex: 100, width: '100%' }}>
                        <Navbar />
                    </div>
                    <div className="flex flex-row  items-center mt-10 justify-around mb-6"> {/* Added mb-6 to control bottom spacing */}
                        <div className="flex flex-col gap-5 ">
                            <div className="text-[16px] font-mono text-neutral-900 dark:text-neutral-200 ml-5 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
                                dev notes & coffee !!
                            </div>
                            <div className="text-[14px] font-mono ml-6 max-w-[500px] text-neutral-900 dark:text-neutral-400">
                               Random write-ups on web development, coding hiccups, and those tiny wins that make building stuff fun.
                            </div>
                        </div>
                        <div className=' mt-2'>
                            <AnimatedDoc/>
                        </div>
                    </div>
                    <div className="blogcards w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {blogPosts.map((post, index) => (
                            <BlogCard
                                key={index}
                                date={post.date}
                                title={post.title}
                                desc={post.description}
                                link="#"
                            />
                        ))}
                    </div>

                    <div className="fixed bottom-0 footer">
                        <Footer />
                    </div>



                </div>

                {/* RIGHT COLUMN with spacer + fixed card */}
                <div className="relative">
                    {/* Spacer keeps grid width intact */}
                    <div className="w-[280px] h-[400px] ml-[15px]" />

                </div>

            </div>
        </div>
    )
};
