import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const leaders = [
  {
    name: "Himanshu Tiwari",
    title: "Founder & CEO",
    description:
      "Himanshu's vision and specialized experience are the driving force behind our patient-first approach.",
    img: "website.imge/himanshu.jpg",
    fallback: "https://placehold.co/200x200/E2E8F0/4A5568?text=Founder",
  },
  {
    name: "Dr. Priya Desai",
    title: "Chief Medical Officer",
    description:
      "Dr. Desai ensures that all our services meet the highest standards of medical ethics and patient safety.",
    img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop",
    fallback: "https://placehold.co/200x200/E2E8F0/4A5568?text=CMO",
  },
  {
    name: "Rohan Mehta",
    title: "Head of Operations & Logistics",
    description:
      "Rohan masterfully navigates the complexities of global supply chains to ensure timely and secure delivery.",
    img: "https://images.unsplash.com/photo-1581092916322-3c1a36a28196?q=80&w=1887&auto=format&fit=crop",
    fallback: "https://placehold.co/200x200/E2E8F0/4A5568?text=COO",
  },
];

const LeadershipSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleImageError = (e, fallback) => {
    e.target.src = fallback;
  };

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Section Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-12"
        data-aos="fade-down"
      >
        Meet Our Leadership
      </h2>

      {/* Leadership Grid */}
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <img
              src={leader.img}
              alt={leader.name}
              onError={(e) => handleImageError(e, leader.fallback)}
              className="rounded-full shadow-md mx-auto w-44 h-44 object-cover mb-4 border-4 border-blue-100 hover:border-blue-300 transition-all"
            />
            <h3 className="text-xl font-bold text-blue-700">{leader.name}</h3>
            <p className="text-gray-500 font-semibold">{leader.title}</p>
            <p className="text-gray-600 mt-3 leading-relaxed text-sm">
              {leader.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
