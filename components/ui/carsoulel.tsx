// "use client"
// import { useLanguage } from "@/contexts/LanguageContext";
// import React, { useEffect, useState } from "react";
// import immage1 from "@/assets/images/immage1.jpg";
// import immage2 from "@/assets/images/immage2.jpg";
// const images = [
//     immage1,
//     immage2,
// ];
// // const images = [
// //     "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D",
// //     "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHxlbnwwfHwwfHx8MA%3D%3D",
// //     "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob3B8ZW58MHx8MHx8fDA%3D",
// //     "https://images.unsplash.com/photo-1726661025461-5635b785ec23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MTV8fHNob3B8ZW58MHx8MHx8fDA%3D", // Replace with your actual image URLs or Cloudinary links
// // ];

// const ShopCarousel = () => {
//     const [current, setCurrent] = useState(0);
//     const { language, setLanguage, t } = useLanguage();
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//         }, 4000); // Change slide every 4 seconds

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="relative h-screen w-full overflow-hidden">
//             {images.map((img, index) => (
//                 <div
//                     key={index}
//                     className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//                         }`}
//                 >
//                     <img
//                         src={img}
//                         alt={`Shop ${index}`}
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                         <h1 className="text-white text-4xl md:text-6xl font-bold animate-fadeInDown">
//                             {/* साई डिजिटल ऑनलाईन सेवा केंद्र */}
//                             {t("heroTitle")}
//                         </h1>
//                     </div>
//                 </div>
//             ))}
//             {/* Dots indicator */}
//             <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
//                 {images.map((_, i) => (
//                     <span
//                         key={i}
//                         className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white/50"
//                             }`}
//                     ></span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ShopCarousel;


"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import React, { useEffect, useState } from "react";
import immage1 from "@/assests/image1.jpeg";
import immage2 from "@/assests/image2.jpeg";

const images = [immage1, immage2];

const ShopCarousel = () => {
    const [current, setCurrent] = useState(0);
    const { t } = useLanguage();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        // <div className="relative h-screen w-full overflow-hidden">
        //     {images.map((img, index) => (
        //         <div
        //             key={index}
        //             className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
        //                 }`}
        //         >
        //             <img
        //                 src={img.src}
        //                 alt={`Shop ${index}`}
        //                 className="w-full h-full object-contain"
        //             />
        //             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        //                 <h1 className="text-white text-4xl md:text-6xl font-bold animate-fadeInDown">
        //                     {t("heroTitle")}
        //                 </h1>
        //             </div>
        //         </div>
        //     ))}
        //     <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        //         {images.map((_, i) => (
        //             <span
        //                 key={i}
        //                 className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white/50"
        //                     }`}
        //             ></span>
        //         ))}
        //     </div>
        // </div>
        <div className="relative h-screen w-full overflow-hidden font-sans">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform
        ${index === current ? "opacity-100 z-20 scale-100" : "opacity-0 z-0 scale-105"}
      `}
                >
                    <img
                        src={img.src}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg animate-slide-in">
                            {t("heroTitle")}
                        </h1>
                        <p className="mt-4 text-white text-lg md:text-2xl font-medium max-w-3xl animate-fade-in">
                            {t("heroSubtitle")}
                        </p>
                        <button
                            onClick={() => window.open("https://wa.me/919767684236", "_blank")}
                            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-black hover:text-white transition-colors duration-300 animate-fade-in"
                        >
                            {t("ctaButton") || "Explore Now"}
                        </button>

                    </div>
                </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300
          ${i === current ? "bg-white scale-110 shadow" : "bg-white/40"}
        `}
                    ></span>
                ))}
            </div>
        </div>

    );
};

export default ShopCarousel;

