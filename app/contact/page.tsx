import { ContactUs } from '@/components/ContactUs';
import Navbar from '@/components/Navbar';


export default function ContactPage() {
  return(
    <div className="relative min-h-screen w-full bg-transparent dark:bg-black  overflow-hidden">
      {/* Dotted Line */}


      <div className="absolute inset-0 bg-[url('/bgTexture.svg')] dark:invert  opacity-50 dark:opacity-80 bg-repeat bg-center -z-10"></div>

      {/* Navbar */}
      <div style={{ zIndex: 100, width: '100%' }} className="absolute">
        <Navbar />
      </div>
      <ContactUs />
    </div>
  )
};
