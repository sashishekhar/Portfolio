import { ContactUs } from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import ContactMeHero from '@/components/Contactmesvg'
import Footer from '@/components/Footer';


export default function ContactPage() {
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
          <div className="flex flex-row gap-5 items-center mt-10 ml-10 mb-6"> {/* Added mb-6 to control bottom spacing */}
            <div className="flex flex-col gap-5 w-full">
              <div className="text-[16px] font-mono text-neutral-900 dark:text-neutral-200 ml-5 bg-neutral-200/50 dark:bg-neutral-700/30 w-fit px-2">
                say hello !!
              </div>
              <div className="text-[14px] font-mono ml-6 max-w-[500px] text-neutral-900 dark:text-neutral-400">
                I'm currently looking for new opportunities. Whether you have a question or want to say hi, hit that button.
              </div>
            </div>
            <div>
              <ContactMeHero />
            </div>
          </div>

          <div className="-mt-4"> {/* Pull form up without touching internal spacing */}
            <ContactUs />
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
