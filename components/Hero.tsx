// 'use client';

// import React from 'react';
// import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';

// export default function Hero() {
//   const { t } = useLanguage();

//   return (
//     <section
//       id="home"
//       className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 overflow-hidden"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%239C92AC fill-opacity=0.4%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
//               <CheckCircle className="w-4 h-4 mr-2" />
//               Professional & Reliable Service
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               <span className="bg-gradient-to-r py-8 from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//                 {t('heroTitle')}
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-4 leading-relaxed">{t('heroSubtitle')}</p>
//             <p className="text-lg text-gray-500 mb-8 leading-relaxed">{t('heroDescription')}</p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
//               <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
//                 {t('getStarted')}
//                 <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
//                 {t('learnMore')}
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Users className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">500+</div>
//                 <div className="text-sm text-gray-600">{t('aboutCustomers')}</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Award className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">50+</div>
//                 <div className="text-sm text-gray-600">{t('aboutServices')}</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Clock className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">10+</div>
//                 <div className="text-sm text-gray-600">{t('aboutExperience')}</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="relative">
//             <div className="relative z-10">
//               <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   {[
//                     { color: 'blue', label: 'Government Services' },
//                     { color: 'emerald', label: 'Educational Forms' },
//                     { color: 'orange', label: 'Business Registration' },
//                     { color: 'purple', label: 'Certificate Services' },
//                   ].map(({ color, label }) => (
//                     <div key={label} className={`bg-${color}-50 p-4 rounded-lg`}>
//                       <div className={`w-8 h-8 bg-${color}-600 rounded-full mb-2`}></div>
//                       <div className="text-sm font-medium text-gray-700">{label}</div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full mx-auto mb-3 flex items-center justify-center">
//                     <span className="text-white font-bold text-lg">सेतु</span>
//                   </div>
//                   <h3 className="font-bold text-gray-900 mb-1">One-Stop Solution</h3>
//                   <p className="text-sm text-gray-600">All services under one roof</p>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
//             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-200 rounded-full opacity-40 animate-pulse animation-delay-1000"></div>
//             <div className="absolute top-1/2 -right-8 w-16 h-16 bg-orange-200 rounded-full opacity-50 animate-pulse animation-delay-2000"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

// import React, { useEffect, useState } from 'react';
// import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { AnimatePresence, motion } from 'framer-motion';

// const images = [
//   'https://images.unsplash.com/photo-1750440982726-d723eab666a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1749870134569-739d2ab6d600?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1750337295808-09145bb6b1f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1750008267598-7f68e1a25ab8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
// ];

// export default function Hero() {
//   const { t } = useLanguage();
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000); // Change every 1 second

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 overflow-hidden"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%239C92AC fill-opacity=0.4%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
//               <CheckCircle className="w-4 h-4 mr-2" />
//               Professional & Reliable Service
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               <span className="bg-gradient-to-r py-8 from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//                 {t('heroTitle')}
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-4 leading-relaxed">{t('heroSubtitle')}</p>
//             <p className="text-lg text-gray-500 mb-8 leading-relaxed">{t('heroDescription')}</p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
//               <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
//                 {t('getStarted')}
//                 <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
//                 {t('learnMore')}
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Users className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">500+</div>
//                 <div className="text-sm text-gray-600">{t('aboutCustomers')}</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Award className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">50+</div>
//                 <div className="text-sm text-gray-600">{t('aboutServices')}</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Clock className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">10+</div>
//                 <div className="text-sm text-gray-600">{t('aboutExperience')}</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Framer Motion Image Slider */}
//           <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={images[current]}
//                 src={images[current]}
//                 alt={`Slide ${current}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </AnimatePresence>

//             {/* Optional overlay */}
//             <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-4 py-2 rounded shadow">
//               <span className="font-semibold text-gray-800">सेतु डिजिटल सेवा</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import React, { useEffect, useState, useRef } from 'react';
// import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { AnimatePresence, motion } from 'framer-motion';

// const images = [
//   'https://images.unsplash.com/photo-1750440982726-d723eab666a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1749870134569-739d2ab6d600?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1750337295808-09145bb6b1f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1750008267598-7f68e1a25ab8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
// ];

// export default function Hero() {
//   const { t } = useLanguage();
//   const [current, setCurrent] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   // Auto-play with hover pause
//   useEffect(() => {
//     if (!isHovered) {
//       intervalRef.current = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % images.length);
//       }, 1000);
//     }

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, [isHovered]);

//   return (
//     <section
//       id="home"
//       className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
//               <CheckCircle className="w-4 h-4 mr-2" />
//               Professional & Reliable Service
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               <span className="bg-gradient-to-r py-8 from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//                 {t('heroTitle')}
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-4 leading-relaxed">{t('heroSubtitle')}</p>
//             <p className="text-lg text-gray-500 mb-8 leading-relaxed">{t('heroDescription')}</p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
//               <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
//                 {t('getStarted')}
//                 <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
//                 {t('learnMore')}
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Users className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">500+</div>
//                 <div className="text-sm text-gray-600">{t('aboutCustomers')}</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Award className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">50+</div>
//                 <div className="text-sm text-gray-600">{t('aboutServices')}</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Clock className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">10+</div>
//                 <div className="text-sm text-gray-600">{t('aboutExperience')}</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Image Slider with Pause on Hover */}
//           <div
//             className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={images[current]}
//                 src={images[current]}
//                 alt={`Slide ${current}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </AnimatePresence>

//             <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-4 py-2 rounded shadow">
//               <span className="font-semibold text-gray-800">सेतु डिजिटल सेवा</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { AnimatePresence, motion } from 'framer-motion';

// const images = [
//   'https://images.unsplash.com/photo-1750440982726-d723eab666a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1749870134569-739d2ab6d600?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1750337295808-09145bb6b1f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D',
//   'https://images.unsplash.com/photo-1750008267598-7f68e1a25ab8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
// ];

// export default function Hero() {
//   const { t } = useLanguage();
//   const [current, setCurrent] = useState(0);
//   const isHoveredRef = useRef(false);

//   // Only setInterval once on mount
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHoveredRef.current) {
//         setCurrent((prev) => (prev + 1) % images.length);
//       }
//     }, 1000); // 1 second

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left content same as before */}
//           <div className="text-center lg:text-left">
//             {/* ... omitted for brevity (same as your earlier code) */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               <span className="bg-gradient-to-r py-8 from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//                 {t('heroTitle')}
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-4 leading-relaxed">{t('heroSubtitle')}</p>
//             <p className="text-lg text-gray-500 mb-8 leading-relaxed">{t('heroDescription')}</p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
//               <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
//                 {t('getStarted')}
//                 <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
//                 {t('learnMore')}
//               </button>
//             </div>
//             {/* Stats can also remain same */}
//           </div>

//           {/* Right Image Slider with real working hover pause */}
//           <div
//             className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
//             onMouseEnter={() => (isHoveredRef.current = true)}
//             onMouseLeave={() => (isHoveredRef.current = false)}
//           >
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={images[current]}
//                 src={images[current]}
//                 alt={`Slide ${current}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//             </AnimatePresence>

//             <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-4 py-2 rounded shadow">
//               <span className="font-semibold text-gray-800">सेतु डिजिटल सेवा</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
// import { useLanguage } from '@/contexts/LanguageContext';

// import imgn1 from "@/assests/a1.jpeg"
// import imgn2 from "@/assests/a2.jpeg"
// import imgn3 from "@/assests/a3.jpeg"
// import imgn4 from "@/assests/a4.jpeg"
// import imgn5 from "@/assests/a5.jpeg"
// import imgn6 from "@/assests/a6.jpeg"
// import imgn7 from "@/assests/a7.jpeg"
// import imgn8 from "@/assests/a8.jpeg"
// import imgn9 from "@/assests/a9.jpeg"
// import imgn10 from "@/assests/a10.jpeg"
// import imgn11 from "@/assests/a11.jpeg"
// import imgn12 from "@/assests/a12.jpeg"
// import imgn13 from "@/assests/a13.jpeg"

// import imgn15 from "@/assests/a15.jpeg"
// import imgn16 from "@/assests/a16.jpeg"
// import imgn17 from "@/assests/a17.jpeg"
// import imgn18 from "@/assests/a18.jpeg"
// import imgn19 from "@/assests/a19.jpeg"
// import imgn20 from "@/assests/a20.jpeg"

// import imgn22 from "@/assests/a22.jpeg"
// import imgn23 from "@/assests/a23.jpeg"

// import s1 from "@/assests/s1.jpeg"

// import s3 from "@/assests/s3.jpeg"
// import s4 from "@/assests/s4.jpeg"



// const images = [
//   s1,
//   s3,
//   s4,
//   imgn1,
//   imgn2,
//   imgn3,
//   imgn4,
//   imgn5,
//   imgn6,
//   imgn7,
//   imgn8,
//   imgn9,
//   imgn10,
//   imgn11,
//   imgn12,
//   imgn13,

//   imgn15,
//   imgn16,
//   imgn17,
//   imgn18,
//   imgn19,
//   imgn20,

//   imgn22,
//   imgn23,



// ];

// export default function Hero() {
//   const { t } = useLanguage();
//   const [current, setCurrent] = useState(0);
//   const isHoveredRef = useRef(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isHoveredRef.current) {
//         setCurrent((prev) => (prev + 1) % images.length);
//       }
//     }, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative  bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
//               <CheckCircle className="w-4 h-4 mr-2" />
//               Professional & Reliable Service
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//               <span className="bg-gradient-to-r py-8 from-blue-600 to-emerald-600 bg-clip-text text-transparent">
//                 {t('heroTitle')}
//               </span>
//             </h1>

//             <p className="text-xl text-gray-600 mb-4 leading-relaxed">{t('heroSubtitle')}</p>
//             <p className="text-lg text-gray-500 mb-8 leading-relaxed">{t('heroDescription')}</p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
//               <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
//                 {t('getStarted')}
//                 <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
//                 {t('learnMore')}
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Users className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">500+</div>
//                 <div className="text-sm text-gray-600">{t('aboutCustomers')}</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Award className="w-6 h-6 text-emerald-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">50+</div>
//                 <div className="text-sm text-gray-600">{t('aboutServices')}</div>
//               </div>

//               <div className="text-center">
//                 <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <Clock className="w-6 h-6 text-orange-600" />
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900">10+</div>
//                 <div className="text-sm text-gray-600">{t('aboutExperience')}</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div
//             className="relative w-full   h-[400px] rounded-2xl   overflow-hidden shadow-xl"
//             onMouseEnter={() => (isHoveredRef.current = true)}
//             onMouseLeave={() => (isHoveredRef.current = false)}
//           >
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={current}
//                 src={images[current].src} // fix for image import
//                 alt={`Slide ${current}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="absolute inset-0 w-full h-full object-fill "
//               />
//             </AnimatePresence>

//             {/* Optional Overlay */}
//             {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-4 py-2 rounded shadow">
//               <span className="font-semibold text-gray-800">सेतु डिजिटल सेवा</span>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';



import imgn1 from "@/assests/a1.jpeg"
import imgn2 from "@/assests/a2.jpeg"
import imgn3 from "@/assests/a3.jpeg"
import imgn4 from "@/assests/a4.jpeg"
import imgn5 from "@/assests/a5.jpeg"
import imgn6 from "@/assests/a6.jpeg"
import imgn7 from "@/assests/a7.jpeg"
import imgn8 from "@/assests/a8.jpeg"
import imgn9 from "@/assests/a9.jpeg"
import imgn10 from "@/assests/a10.jpeg"
import imgn11 from "@/assests/a11.jpeg"
import imgn12 from "@/assests/a12.jpeg"
import imgn13 from "@/assests/a13.jpeg"

import imgn15 from "@/assests/a15.jpeg"
import imgn16 from "@/assests/a16.jpeg"
import imgn17 from "@/assests/a17.jpeg"
import imgn18 from "@/assests/a18.jpeg"
import imgn19 from "@/assests/a19.jpeg"
import imgn20 from "@/assests/a20.jpeg"

import imgn22 from "@/assests/a22.jpeg"
import imgn23 from "@/assests/a23.jpeg"

import s1 from "@/assests/s1.jpeg"

import s3 from "@/assests/s3.jpeg"
import s4 from "@/assests/s4.jpeg"

const images = [
  s1, s3, s4,
  imgn1, imgn2, imgn3, imgn4, imgn5, imgn6, imgn7, imgn8,
  imgn9, imgn10, imgn11, imgn12, imgn13,
  imgn15, imgn16, imgn17, imgn18, imgn19, imgn20,
  imgn22, imgn23
];

export default function Hero() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrent((prev) => (prev + 1) % images.length);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
              <CheckCircle className="w-4 h-4 mr-2" />
              Professional & Reliable Service
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r py-8 from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {t('heroTitle')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-4 leading-relaxed">{t('heroSubtitle')}</p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">{t('heroDescription')}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                {t('getStarted')}
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                {t('learnMore')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">{t('aboutCustomers')}</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">{t('aboutServices')}</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-600">{t('aboutExperience')}</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current].src}
                alt={`Slide ${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-fill"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


