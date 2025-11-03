import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Scroller.css"; // we’ll create this small CSS file below



const products = [
  { name: "Ekterly (Sebetralstat)", img: "src/assets/website.imge/Sephience8.webp" },
  { name: "Lynozyfic (Garadacimab-gxii)", img: "website.imge/Lynozyfic.jpg.webp" },
  { name: "Panhematin (Hemin for Injection)", img: "website.imge/PANHEMATIN-Image.webp" },
  { name: "Modeyso (Dordaviprone)", img: "website.imge/Modeyso_Product_Image.webp" },
  { name: "Hernexeos (Zongertinib)", img: "website.imge/Hernexeos.webp" },
  { name: "Vizz (Aceclidine Ophthalmic)", img: "website.imge/Vizz-Aceclidine-Ophthalmic.webp" },
  { name: "Adakveo (Crizanlizumab-tmca)", img: "website.imge/Adakveo-Crizanlizumab-tmca.webp" },
  { name: "Entadfi (Finasteride and Tadalafil)", img: "website.imge/Entadfi.webp" },
  { name: "Anzupgo (Delgocitinib)", img: "website.imge/Anzupgo.webp" },
  { name: "Dawnzera (Donidalorsen)", img: "website.imge/Dawnzera.webp" },
];

const ImportedProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <h2
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-10"
        data-aos="fade-down"
      >
        Imported Products
      </h2>

      {/* Scroller Wrapper */}
      <div className="relative overflow-hidden" data-aos="fade-up">
        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Infinite Scroller */}
        <div className="scroller flex space-x-8 animate-scroll">
          {products.map((item, index) => (
            <a
              href="#"
              key={index}
              className="flex flex-col items-center min-w-[200px] bg-white rounded-lg shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-md"
              />
              <b className="text-gray-700 mt-2">{item.name}</b>
            </a>
          ))}
          {/* Duplicate items for seamless infinite effect */}
          {products.map((item, index) => (
            <a
              href="#"
              key={`duplicate-${index}`}
              className="flex flex-col items-center min-w-[200px] bg-white rounded-lg shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-md"
              />
              <b className="text-gray-700 mt-2">{item.name}</b>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportedProducts;
