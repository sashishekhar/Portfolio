import { ContactUs } from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import ContactMeHero from '@/components/Contactmesvg'
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert dark:opacity-30 opacity-50  bg-repeat bg-center z--10"></div>

      {/* Single column layout */}
      <div className="main w-full flex justify-center">
        {/* MIDDLE COLUMN (main content) */}
        <div className="middle w-full h-full sm:h-screen max-w-[820px] mx-auto relative rounded-[0px] shadow-[2px_0px_5px_rgba(0,0,0,0.2),-2px_0px_5px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] dark:border-l dark:border-r dark:border-neutral-600 border-neutral-300 bg-white dark:bg-neutral-900">

          <div style={{ zIndex: 100, width: '100%' }}>
            <Navbar />
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-center mt-10 ml-1 mr-0 sm:ml-10 mb-6">
            <div>
              <ContactMeHero />
            </div>
            
            <div className="flex flex-col gap-5 mb-5 w-full">
              <div
                className="text-[16px] font-mono ml-3 sm:ml-5
                           text-neutral-900 dark:text-neutral-200
                           bg-neutral-200/70 dark:bg-neutral-700/40
                           w-fit px-2 shadow-sm"
              >
                say hello !!
              </div>
              <div
                className="text-[14px] font-mono ml-4 sm:ml-6 max-w-[500px] 
                           text-neutral-700 dark:text-neutral-400"
              >
                I'm currently looking for new opportunities. Whether you have a
                question or want to say hi, hit that button.
              </div>
            </div>
            
          </div>

          <div className="-mt-4">
            <ContactUs />
          </div>

          <div className="mt-20 footer w-full">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
