// 'use client';

// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import Services from '@/components/Services';
// import About from '@/components/About';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';
// import { LanguageProvider } from '@/contexts/LanguageContext';

// export default function Home() {
//   return (
//     <LanguageProvider>
//       <div className="min-h-screen">
//         <Header />
//         <main>
//           <Hero />
//           <Services />
//           <About />
//           <Contact />
//         </main>
//         <Footer />
//       </div>
//     </LanguageProvider>
//   );'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react'; // You can use a WhatsApp-like icon
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen relative">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919767684236" // replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </div>
    </LanguageProvider>
  );
}

// }


