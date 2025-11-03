// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation speed in ms
//       once: true, // Animation happens only once
//     });
//   }, []);

//   return (
//     <div className="container mx-auto px-6 text-center py-16">
//       {/* Section Heading */}
//       <h2
//         className="text-3xl md:text-4xl font-bold text-blue-700 mb-6"
//         data-aos="fade-down"
//       >
//         Pharmaceutical Care For You and Your Family
//       </h2>

//       {/* Sub Text */}
//       <p
//         className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed"
//         data-aos="fade-up"
//       >
//         We are renowned traders, suppliers, and exporters of specialty medicines.
//         With extensive expertise, Rare Pharma Supply caters to the healthcare
//         needs of patients and institutions in India and globally.
//       </p>

//       {/* Three Feature Cards */}
//       <div className="grid md:grid-cols-3 gap-8 md:gap-12">
//         {/* Card 1 */}
//         <div
//           className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
//           data-aos="zoom-in"
//         >
//           <h3 className="text-xl font-bold text-blue-700 mb-3">
//             Named Patient Program
//           </h3>
//           <p className="text-gray-600">
//             We provide expert guidance for importing medicines legally and
//             ethically for individual patient use.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div
//           className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
//           data-aos="zoom-in"
//           data-aos-delay="200"
//         >
//           <h3 className="text-xl font-bold text-blue-700 mb-3">
//             Generic & Branded Options
//           </h3>
//           <p className="text-gray-600">
//             We can help source both original branded medicines and
//             high-quality generic alternatives to suit your needs.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div
//           className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
//           data-aos="zoom-in"
//           data-aos-delay="400"
//         >
//           <h3 className="text-xl font-bold text-blue-700 mb-3">
//             Medical & Hospital Supplies
//           </h3>
//           <p className="text-gray-600">
//             We are a reliable partner for researchers and institutions requiring
//             specialty medicines for clinical use.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;







// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function GiftCardSection() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="bg-white text-gray-900">
//       {/* ===== Top Info Text ===== */}
//       <div
//         className="text-center py-16 px-6 max-w-3xl mx-auto"
//         data-aos="fade-up"
//       >
//         <p className="text-lg md:text-xl leading-relaxed">
//           We design durable travel apparel with a conscience —{" "}
//           <span className="font-medium">100% made in America.</span>
//         </p>
//         <p className="mt-2 text-gray-600">
//           Products by{" "}
//           <a
//             href="#"
//             className="underline hover:text-gray-900 transition-colors"
//           >
//             United By Blue
//           </a>
//           . Video by{" "}
//           <a
//             href="#"
//             className="underline hover:text-gray-900 transition-colors"
//           >
//             Seth Morrisey
//           </a>
//           .
//         </p>
//       </div>

//       {/* ===== Gift Card Section ===== */}
//       <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
//         {/* ===== Left Text Section ===== */}
//         <div data-aos="fade-right">
//           <p className="uppercase tracking-widest text-sm text-gray-600 mb-2">
//             Gift Cards
//           </p>
//           <h2 className="text-4xl font-serif font-semibold mb-4">
//             Support your neighborhood
//           </h2>
//           <p className="text-gray-700 mb-8 leading-relaxed">
//             We believe that local businesses are an integral part of a
//             neighborhood's character. Help keep us local by buying a gift card!
//           </p>
//           <button className="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition flex items-center gap-2">
//             Shop gift cards <span className="text-lg">→</span>
//           </button>
//         </div>

//         {/* ===== Right Image Section ===== */}
//         <div
//           className="relative flex justify-center"
//           data-aos="fade-left"
//         >
//           {/* Background large image */}
//           <img
//             src="src/assets/website.imge/image6.jpg"
//             alt="Gift card background"
//             className="rounded-lg shadow-lg w-80 sm:w-96"
//           />

//           {/* Overlapping image */}
//           <img
//             src="src/assets/website.imge/image5.jpg"
//             alt="Store interior"
//             className="absolute bottom-0 left-0 transform translate-x-10 translate-y-10 rounded-lg shadow-xl w-56 sm:w-64 border-4 border-white"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Replace these with your actual images if local
const imageMain = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80";
const imageOverlay = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80";

export default function GiftCardSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Top Centered Heading */}
      <div className="w-full text-center pt-12 pb-8 px-4" data-aos="fade-down">
       
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-5">  We are renowned traders suppliers and exporters of specialty medicines.</h2>
      </div>

      {/* Bottom Split Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 lg:mt-24 mt-10 mb-12">
        {/* Text Block */}
        <div className="flex flex-col justify-center lg:w-1/2 w-full mb-10 lg:mb-0" data-aos="fade-right">
          <div>
            <p className="uppercase tracking-widest text-gray-700 text-sm mb-3">HIMANSHU TIWARI</p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-5">  Pharmaceutical Care For <br />You and Your Family</h2>
            <p className="text-gray-800 mb-6">
             We provide expert guidance for importing medicines legally and ethically for individual patient use.   </p>
           <a href="/"> <button className="bg-black text-white px-6 py-3 rounded shadow hover:bg-gray-900 font-serif transition  cursor-pointer"> ABOUT US</button> </a> 
          </div>
        </div>

        {/* Overlapping Images Block */}
        <div className="relative flex-1 flex justify-center items-center lg:justify-end" data-aos="fade-left">
          <div className="relative w-64 h-80">
            {/* Background Main Image */}
            <img
              src={imageMain}
              alt="Background"
              className="rounded-lg shadow-lg object-cover w-64 h-80"
            />
            {/* Overlay Small Image */}
            <img
              src={imageOverlay}
              alt="Overlay"
              className="rounded shadow-lg object-cover absolute left-16 -bottom-14 w-48 h-32 border-4 border-white"
              style={{ zIndex: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
