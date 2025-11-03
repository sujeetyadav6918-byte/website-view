



// import React, { useState, useEffect } from "react";

// const images = [
//   " src/assets/website.imge/image1.jpg",
//   "src/assets/website.imge/image4.jpg",
//   "src/assets/website.imge/image6.jpg",
//   "src/assets/website.imge/image5.jpg",
//   "website.imge/image5.jpg",
// ];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-full h-[80vh] overflow-hidden">
//       {/* Image List */}
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((src, index) => (
//           <div key={index} className="min-w-full h-[80vh]">
//             <img
//               src={src}
//               alt={`slide-${index}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white text-3xl px-3 py-1 rounded-full hover:bg-black/60 transition"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white text-3xl px-3 py-1 rounded-full hover:bg-black/60 transition"
//       >
//         &#8250;
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 w-full flex justify-center gap-3">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer ${
//               index === currentIndex ? "bg-white" : "bg-gray-400"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

















// import React from "react";

// export default function VideoPlayer() {
//   const videoUrl = " src/assets/website.imge/goku-dbz.1920x1080.mp4"; // Replace with your own video URL

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-black">
//       <video
//         className="w-full h-full object-cover"
//         src={videoUrl}
//         autoPlay
//         loop
//         muted
//         // playsInline
//         // controls // Optional: show controls to users
//       >
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }




import { ReactLenis } from "lenis/dist/lenis-react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";

const SECTION_HEIGHT = 1200;
const BG_IMAGE =
  "src/assets/website.imge/image6.jpg ";

export default function SmoothScrollHero() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <ReactLenis root options={{ lerp: 0.085 }}>
        <Nav />
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
}

const Nav = () => (
  <nav className=" ">
    {/* <SiSpacex className="text-3xl mix-blend-difference" /> */}
    <button
      onClick={() => {
        document.getElementById("launch-schedule")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      // className="flex items-center gap-1 text-xs text-zinc-300 hover:text-white transition"
    >
      {/* LAUNCH SCHEDULE <FiArrowRight /> */}
    </button>
  </nav>
);

const Hero = () => (
  <section
    style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    className="relative w-full"
  >
    <CenterImage />
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 z-40 top-40 sm:top-64 bg-zinc-900/65 rounded-xl shadow-lg px-8 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-2xl md:text-4xl font-extrabold text-white text-center pb-3">
        <Typewriter
          words={[
            "WELCOME TO RAREPHARMASUPPLY.",
            // "Track Every Mission in Real Time.",
            // "SpaceX & Beyond: Live Data & Schedules."
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={65}
          deleteSpeed={30}
          delaySpeed={1800}
        />
      </h1>
      <p className="max-w-xl mx-auto text-zinc-200 text-lg text-center pt-3 opacity-80">
        {/* Experience smooth parallax, real motion, and interactive launch data powered by React and Framer Motion. */}
        Need an Unapproved or Unavailable Medicine in India?
      </p>
    </motion.div>
    <ParallaxImages />
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none z-30" />
  </section>
);

const CenterImage = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 400],
    ["150%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 400],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full z-10"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  );
};

const ParallaxImages = () => (
  <div className="mx-auto max-w-5xl px-4 pt-[240px] z-50 relative">
    <ParallaxImg
      src="src/assets/website.imge/image5.jpg "
      alt="Space launch"
      start={-120}
      end={120}
      className="w-1/4 rounded-xl shadow-lg shadow-black/20"
    />
    <ParallaxImg
      src="src/assets/website.imge/Oncology-1030x579.jpg"
      alt="Space launch 2"
      start={100}
      end={-130}
      className="mx-auto w-1/2 rounded-xl shadow-lg"
    />
    <ParallaxImg
      src="src/assets/website.imge/oncology.jpeg "
      alt="Orbiting satellite"
      start={-90}
      end={90}
      className="ml-auto w-1/3 rounded-xl shadow-md"
    />
    <ParallaxImg
      src="src/assets/website.imge/image1.jpg "
      alt="Satellite"
      start={0}
      end={-250}
      className="ml-24 w-5/12 rounded-lg shadow"
    />
  </div>
);

function ParallaxImg({ className, alt, src, start, end }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.92, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.87]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      ref={ref}
      className={className}
      style={{ transform, opacity }}
    />
  );
}

const Schedule = () => (
  <section id="launch-schedule" className="mx-auto max-w-5xl px-4 py-48 text-white">
    <motion.h1
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-20 text-4xl font-black uppercase text-zinc-50"
    >
      We Can help
      
    </motion.h1>
    {[
      //  { title: "Oncology", date: "Dec 9th", location: "Florida" },
      { title: "Oncology",},
      { title: "Hematology" },
      { title: "Neurology", },
      { title: "Immunology", },
      { title: "Nephrology",  },
      { title: "Rare Disease", },
      { title: "Gastroentrolog"},
      { title: "Cardio " },
    ].map((sched, i) => (
      <ScheduleItem key={sched.title + i} {...sched} />
    ))}
  </section>
);

const ScheduleItem = ({ title, date, location }) => (
  <motion.div
    initial={{ y: 48, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.8 }}
    className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
  >
    <div>
      <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
      <p className="text-sm uppercase text-zinc-500">{date}</p>
    </div>
    <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
      <p>{location}</p>
      <FiMapPin />
    </div>
  </motion.div>
);



















