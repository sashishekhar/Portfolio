import { ContactUs } from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import ContactMeHero from '@/components/Contactmesvg'
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-50 dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert 
                      opacity-30 dark:opacity-80 bg-repeat bg-center -z-10"></div>

      {/* Grid layout */}
      <div className="main grid grid-cols-[2.25fr_5.5fr_2.25fr] w-full h-screen">

        {/* LEFT COLUMN with spacer */}
        <div className="relative">
          <div className="w-[280px] h-[242px] ml-[50px]" />
        </div>

        {/* MIDDLE COLUMN (main content) */}
        <div
          className="middle mx-2 relative rounded-[0px] 
                     bg-white dark:bg-neutral-900
                     shadow-lg shadow-neutral-300/60 dark:shadow-xl dark:shadow-black/40
                     border border-neutral-200 dark:border-neutral-700"
        >
          <div style={{ zIndex: 100, width: '100%' }}>
            <Navbar />
          </div>

          <div className="flex flex-row gap-5 items-center mt-10 ml-10 mb-6">
            <div className="flex flex-col gap-5 w-full">
              <div
                className="text-[16px] font-mono ml-5 
                           text-neutral-900 dark:text-neutral-200
                           bg-neutral-200/70 dark:bg-neutral-700/40
                           w-fit px-2 shadow-sm"
              >
                say hello !!
              </div>
              <div
                className="text-[14px] font-mono ml-6 max-w-[500px] 
                           text-neutral-700 dark:text-neutral-400"
              >
                I'm currently looking for new opportunities. Whether you have a
                question or want to say hi, hit that button.
              </div>
            </div>
            <div>
              <ContactMeHero />
            </div>
          </div>

          <div className="-mt-4">
            <ContactUs />
          </div>

          <div className="fixed bottom-0 footer w-full">
            <Footer />
          </div>
        </div>

        {/* RIGHT COLUMN with spacer */}
        <div className="relative">
          <div className="w-[280px] h-[400px] ml-[15px]" />
        </div>
      </div>
    </div>
  );
}
