// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Scroller.css"; // we’ll create this small CSS file below



// const products = [
//   { name: "Ekterly (Sebetralstat)", img: "src/assets/website.imge/Sephience8.webp" },
//   { name: "Lynozyfic (Garadacimab-gxii)", img: "src/assets/website.imge/Lynozyfic.jpg.webp" },
//   { name: "Panhematin (Hemin for Injection)", img: "src/assets/website.imge/PANHEMATIN-Image.webp" },
//   { name: "Modeyso (Dordaviprone)", img: "src/assets/website.imge/Modeyso_Product_Image.webp" },
//   { name: "Hernexeos (Zongertinib)", img: "src/assets/website.imge/Hernexeos.webp" },
//   { name: "Vizz (Aceclidine Ophthalmic)", img: "src/assets/website.imge/Vizz-Aceclidine-Ophthalmic.webp" },
//   { name: "Adakveo (Crizanlizumab-tmca)", img: "src/assets/website.imge/Adakveo-Crizanlizumab-tmca.webp" },
//   { name: "Entadfi (Finasteride and Tadalafil)", img: "src/assets/website.imge/Entadfi.webp" },
//   { name: "Anzupgo (Delgocitinib)", img: "src/assets/website.imge/Anzupgo.webp" },
//   { name: "Dawnzera (Donidalorsen)", img: "src/assets/website.imge/Dawnzera.webp" },
// ];

// const ImportedProducts = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="container mx-auto px-6 py-16 text-center">
//       <h2
//         // className="text-3xl md:text-4xl font-bold text-red-700 mb-10"
//         data-aos="fade-down"
//       >
//         {/* Imported Products */}
//       </h2>

//       {/* Scroller Wrapper */}
//       <div className="relative overflow-hidden" data-aos="fade-up">
//         {/* Gradient Fade Effects */}
//         <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
//         <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

//         {/* Infinite Scroller */}
//         <div className="scroller flex space-x-8 animate-scroll">
//           {products.map((item, index) => (
//             <a
//               href="#"
//               key={index}
//               className="flex flex-col items-center min-w-[200px] bg-white rounded-lg shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-40 h-40 object-cover rounded-md"
//               />
//               <b className="text-gray-700 mt-2">{item.name}</b>
//             </a>
//           ))}
//           {/* Duplicate items for seamless infinite effect */}
//           {products.map((item, index) => (
//             <a
//               href="#"
//               key={`duplicate-${index}`}
//               className="flex flex-col items-center min-w-[200px] bg-white rounded-lg shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-40 h-40 object-cover rounded-md"
//               />
//               <b className="text-gray-700 mt-2">{item.name}</b>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImportedProducts;






import React from "react";
import Slider from "react-slick";


const products = [
  { name: "Ekterly (Sebetralstat)", img: "src/assets/website.imge/Sephience8.webp",link:"Oncology  ",},
  { name: "Lynozyfic (Garadacimab-gxii)", img: "src/assets/website.imge/Lynozyfic.jpg.webp" },
  { name: "Panhematin (Hemin for Injection)", img: "src/assets/website.imge/PANHEMATIN-Image.webp" },
  { name: "Modeyso (Dordaviprone)", img: "src/assets/website.imge/Modeyso_Product_Image.webp" },
  { name: "Hernexeos (Zongertinib)", img: "src/assets/website.imge/Hernexeos.webp" },
  { name: "Vizz (Aceclidine Ophthalmic)", img: "src/assets/website.imge/Vizz-Aceclidine-Ophthalmic.webp" },
  { name: "Adakveo (Crizanlizumab-tmca)", img: "src/assets/website.imge/Adakveo-Crizanlizumab-tmca.webp" },
  { name: "Entadfi (Finasteride and Tadalafil)", img: "src/assets/website.imge/Entadfi.webp" },
  { name: "Anzupgo (Delgocitinib)", img: "src/assets/website.imge/Anzupgo.webp" },
  { name: "Dawnzera (Donidalorsen)", img: "src/assets/website.imge/Dawnzera.webp" },
];

export default function ImportedProducts() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3200,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-14">
      <h2 className="text-center text-[#28519c] text-3xl md:text-4xl font-bold mt-2 mb-10">Imported Products</h2>
      <Slider {...settings}>
        {products.map((item, idx) => (
          <div key={idx} className="px-4 py-4 focus:outline-none">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 transition hover:shadow-2xl cursor-pointer">
              <img
                src={item.img}
                alt={item.name}
                className="w-[260px] h-[260px] object-cover rounded-xl border border-gray-100 shadow"
                onError={e => (e.target.src = "https://placehold.co/260x260/DFE6EF/707A8A?text=No+Image")}
              />
              <div className="text-gray-800 font-bold text-lg mt-4 text-center">{item.name}</div>
            </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
