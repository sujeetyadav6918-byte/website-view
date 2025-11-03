// // import React, { useState } from "react";

// // function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   return (






   
// //   );
// // }

// // export default Navbar;



// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white fixed w-full z-20 top-0 left-0 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
//         {/* Logo */}
//         <div className="text-2xl font-bold">MyWebsite</div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 items-center">
//           <li>
//             <a href="#" className="hover:text-orange-500 transition">Home</a>
//           </li>
//           <li>
//             <a href="#" className="hover:text-orange-500 transition">About</a>
//           </li>

//           {/* Dropdown */}
//           <li
//             className="relative"
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//           >
//             <button className="flex items-center hover:text-orange-500 transition">
//               Services <ChevronDown size={16} className="ml-1" />
//             </button>

//             {dropdownOpen && (
//               <ul className="absolute bg-gray-900 mt-2 rounded-lg shadow-lg p-2 w-40 space-y-2">
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">
//                     Web Design
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-800 rounded">
//                     Marketing
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li>
//             <a href="#" className="hover:text-orange-500 transition">Contact</a>
//           </li>

//           {/* Button */}
//           <li>
//             <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition">
//               9768640067
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Burger */}
//         <div className="md:hidden ">
//           <button className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gray-900 space-y-2 px-6 pb-4 pt-2">
//           <a href="#" className="block py-2 hover:text-orange-500">Home</a>
//           <a href="#" className="block py-2 hover:text-orange-500">About</a>

//           {/* Mobile Dropdown */}
//           <div>
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center py-2 hover:text-orange-500 "
//             >
//               Services <ChevronDown size={16} className="ml-1" />
//             </button>

//             {dropdownOpen && (
//               <ul className="bg-gray-800 rounded-lg p-2 space-y-2 ml-4">
//                 <li>
//                   <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">
//                     Web Design
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-2 py-1 hover:bg-gray-700 rounded">
//                     Marketing
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </div>

//           <a href="#" className="block py-2 hover:text-orange-500">Contact</a>
//           <button className="bg-orange-500 hover:bg-orange-600 w-full py-2 rounded-lg">
//             9768640067
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }
{/* <div className="absolute left-full top-0 bg-white shadow-lg rounded-md mt-0 ml-1 opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-200 w-64">
  {[
    { name: "Lunsumio (Mosunetuzumab-axgb)", link: "/lunsumio" },
    { name: "Krazati (adagrasib)", link: "/krazati" },
    { name: "Rolvedon (Eflapegrastim-xnst)", link: "/rolvedon" },
    { name: "Orserdu (Elacestrant)", link: "/orserdu" },
  ].map((drug) => (
    <a
      key={drug.name}
      href={drug.link}
      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
    >
      {drug.name}
    </a>
  ))}
</div> */}



// import { useState } from "react";
// import { ChevronDown, Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [subDropdown, setSubDropdown] = useState(null);

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleSubDropdown = (menu) =>
//     setSubDropdown(subDropdown === menu ? null : menu);

//   return (
//     <nav className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <img
//             src="https://www.indianpharmanetwork.co.in/assets/img/logo.png"
//             alt="Logo"
//             className="h-8"
//           />

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center font-medium">
//             <a href="#" className="hover:text-blue-600">Home</a>
//             <a href="#" className="hover:text-blue-600">About Us</a>

//             {/* Product Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center space-x-1 hover:text-blue-600">
//                 <span>Product List</span>
//                 <ChevronDown size={16} />
//               </button>

//               {/* Dropdown on Hover */}
//               <div className="absolute left-0 top-full bg-white shadow-lg rounded-md mt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 w-56">
//                 {[
//                   "ONCOLOGY",
//                   "HEMATOLOGY",
//                   "NEUROLOGY",
//                   "IMMUNOLOGY",
//                   "MISC.",
//                   "RARE DISEASES",
//                   "Nephrology",
//                   "GASTROENTROLOGY",
//                   "Cardio",
//                 ].map((item) => (
//                   <div key={item} className="relative group/item">
//                     <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
//                       {item}
//                       <ChevronDown size={14} className="group-hover/item:rotate-90 transition-transform" />
//                     </button>

//                     {/* Submenu */}
//                     {/* <div className="absolute left-full top-0 bg-white shadow-lg rounded-md mt-0 ml-1 opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-200 w-64">
//                       {[
//                         "Lunsumio (Mosunetuzumab-axgb)",
//                         "Krazati (adagrasib)",
//                         "Rolvedon (Eflapegrastim-xnst)",
//                         "Orserdu (Elacestrant)",
//                       ].map((drug) => (
//                         <a
//                           href="#"
//                           key={drug}
//                           className="block px-4 py-2 hover:bg-gray-100 text-sm"
//                         >
//                           {drug}
//                         </a>
//                       ))}
//                     </div> */}
//                     <div className="absolute left-full top-0 bg-white shadow-lg rounded-md mt-0 ml-1 opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-200 w-64">
//   {[
//     { name: "Lunsumio (Mosunetuzumab-axgb)", link: "/lunsumio" },
//     { name: "Krazati (adagrasib)", link: "/krazati" },
//     { name: "Rolvedon (Eflapegrastim-xnst)", link: "/rolvedon" },
//     { name: "Orserdu (Elacestrant)", link: "/orserdu" },
//   ].map((drug) => (
//     <a
//       key={drug.name}
//       href={drug.link}
//       className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//     >
//       {drug.name}
//     </a>
//   ))}
// </div>









//                   </div>
//                 ))}
//               </div>
//             </div>

//             <a href="#" className="hover:text-blue-600">Blog</a>
//             <a href="#" className="hover:text-blue-600">Support & FAQs</a>
//             <a href="#" className="hover:text-blue-600">News</a>
//             <a href="#" className="hover:text-blue-600">Contact Us</a>

//             <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
//               +91 96548 60915
//             </button>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setMenuOpen(!menuOpen)}>
//               {menuOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <a href="#" className="block px-4 py-2 border-b hover:bg-gray-50">Home</a>
//           <a href="#" className="block px-4 py-2 border-b hover:bg-gray-50">About Us</a>

//           {/* Product List Toggle */}
//           <button
//             onClick={toggleDropdown}
//             className="w-full flex justify-between items-center px-4 py-2 border-b hover:bg-gray-50"
//           >
//             Product List
//             <ChevronDown
//               className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
//               size={18}
//             />
//           </button>

//           {dropdownOpen && (
//             <div className="bg-gray-50">
//               {[
//                 "ONCOLOGY",
//                 "HEMATOLOGY",
//                 "NEUROLOGY",
//                 "IMMUNOLOGY",
//                 "MISC.",
//                 "RARE DISEASES",
//               ].map((item) => (
//                 <div key={item}>
//                   <button
//                     onClick={() => toggleSubDropdown(item)}
//                     className="w-full flex justify-between items-center px-6 py-2 hover:bg-gray-100 text-sm"
//                   >
//                     {item}
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform ${subDropdown === item ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   {/* Submenu inside */}
//                   {subDropdown === item && (
//                     // <div className="pl-8 bg-white">
//                     //   {[
//                     //     "Lunsumio",
//                     //     "Krazati",
//                     //     "Rolvedon",
//                     //     "Orserdu",
//                     //   ].map((drug) => (
//                     //     <a
//                     //       href="#"
//                     //       key={drug}
//                     //       className="block px-4 py-2 hover:bg-gray-100 text-sm"
//                     //     >
//                     //       {drug}
//                     //     </a>
//                     //   ))}
//                     // </div>
//                     <div className="absolute left-full top-0 bg-white shadow-lg rounded-md mt-0 ml-1 opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-200 w-64">
//   {[
//     { name: "Lunsumio (Mosunetuzumab-axgb)", link: "/lunsumio" },
//     { name: "Krazati (adagrasib)", link: "/krazati" },
//     { name: "Rolvedon (Eflapegrastim-xnst)", link: "/rolvedon" },
//     { name: "Orserdu (Elacestrant)", link: "/orserdu" },
//   ].map((drug) => (
//     <a
//       key={drug.name}
//       href={drug.link}
//       className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//     >
//       {drug.name}
//     </a>
//   ))}
// </div>








//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           <a href="#" className="block px-4 py-2 border-b hover:bg-gray-50">Blog</a>
//           <a href="#" className="block px-4 py-2 border-b hover:bg-gray-50">Contact Us</a>

//           <button className="m-4 w-full bg-black text-white py-2 rounded-full">+91 96548 60915</button>
//         </div>
//       )}
//     </nav>
//   );
// }





// import React, { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-full bg-transparent absolute top-0 left-0 z-30">
//       {/* Free shipping bar */}
//       <div className="bg-black text-xs text-white text-center py-1">
//        RAREPHARMASUPPLY =9768640067
//       </div>

//       {/* Navbar Main */}
//       <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-white/10">
//         {/* Logo */}
//         <a href="/" className="font-extrabold text-xl bg-white px-2 py-1 rounded shadow opacity-90"></a>
//         {/* Menu - large screens */}
//         <ul className="hidden md:flex space-x-8 items-center text-white font-medium ">
//              {/* <li className="relative group">
//             Men <span className="ml-1">&#9662;</span>
//             {/* Dropdown (implement as needed) 
//           </li> */}
//           {/* <li className="relative group">
//             Women <span className="ml-1">&#9662;</span>
//           </li>
//           <li className="relative group">
//             About <span className="ml-1">&#9662;</span>
//           </li> */}
//           <li>
//             <a href="#" className="hover:"> HOME  </a>
//           </li>
//           <li>
//             <a href="#" className="hover:"> ABOUT US  </a>
//           </li>

//           <li>
//             <a href="#" className="hover:"> PRODUCT  <span className="ml-1">&#9662;</span>
//             </a>
            
//           </li>
//           <li>
//             <a href="#" className="hover:">CONTACT US</a>
//           </li>
//         </ul>
//         {/* Icons */}
//         <div className="flex space-x-4 text-white items-center ">
//           <button aria-label="search"><svg className="w-6 h-6 " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
//           {/* <button aria-label="cart"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></button> */}
//           {/* Hamburger for mobile */}
//           <button onClick={() => setOpen(!open)} className="md:hidden cursor-pointer">
//             <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//               <path d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </nav>
//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden bg-white/90 text-black absolute w-full left-0 top-25 z-20 p-4 flex flex-col space-y-4">
//           <a href="#">HOME</a>
//           <a href="#">ABOUT US</a>
//           <a href="#">PRODUCT</a>
//           <a href="#">CONTACT US</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);

//   // Close dropdown on mobile menu close
//   const handleMobileMenuToggle = () => {
//     setOpen((prev) => {
//       if (prev === true) setAboutOpen(false);
//       return !prev;
//     });
//   };

//   return (
//     <div className="w-full bg-transparent absolute top-0 left-0 z-30">
//       {/* Free shipping bar */}
//       <div className="bg-black text-xs text-white text-center py-1">
//        RAREPHARMASUPPLY
//       </div>

//       {/* Navbar Main */}
//       <nav className="flex items-center justify-between px-6 py-4 backdrop-blur-sm bg-white/10">
//         {/* Logo */}
//         <a href="/" className="font-extrabold text-xl bg-white px-2 py-1 rounded shadow opacity-90">RAREPHARMASUPPLY</a>
//         {/* Menu - large screens */}
//         <ul className="hidden md:flex space-x-8 items-center text-white font-medium">
//           {/* <li className="relative group">
//             Men <span className="ml-1">▾</span>
//           </li>
//           <li className="relative group">
//             Women <span className="ml-1">▾</span>
//           </li> */}

//           <li>
//              <a href="#" className="hover:"> HOME  </a>
//            </li>
//            <li>
//              <a href="#" className="hover:"> ABOUT US  </a>
//            </li>



//           {/* About Dropdown */}
//           <li className="relative group">
//             <div className="flex items-center cursor-pointer">
//               PRODUCTS <span className="ml-1">▾</span>
//             </div>
//             {/* Dropdown menu on desktop */}
//             <div className="absolute left-0 top-7 min-w-[170px] bg-white text-black shadow-lg rounded mt-1 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
//               <a href="/about/mission" className="block px-4 py-2 hover:bg-gray-100">Our Mission</a>
//               <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Team</a>
//               <a href="/about/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
//               <a href="/about/mission" className="block px-4 py-2 hover:bg-gray-100">Our Mission</a>
//               <a href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Team</a>
//               <a href="/about/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
//             </div>
//           </li>
//           <li>
//             <a href="#" className="hover:underline">CONATCT US</a>
//           </li>
//         </ul>
//         {/* Icons */}
//         <div className="flex space-x-4 text-white items-center">
//           <button aria-label="search" className="cursor-pointer"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
//           {/* <button aria-label="cart"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg></button> */}
//           {/* Hamburger for mobile */}
//           <button onClick={handleMobileMenuToggle} className="md:hidden cursor-pointer">
//             {!open
//               ? (
//                 // Hamburger icon
//                 <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )
//               : (
//                 // Close (X) icon
//                 <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                   <path d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               )
//             }
//           </button>
//         </div>
//       </nav>
//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden bg-white/90 text-black absolute w-full left-0 top-25 z-20 p-4 flex flex-col space-y-2">
//           {/* Close Button Top Right */}
//           <div className="flex justify-end mb-2 ">
            
//           </div>
//           <a href="#" className="py-2">HOME</a>
//           <a href="#" className="py-2">ANOUT US</a>
//           {/* About with toggle */}
//           <div>
//             <button
//               className="flex items-center w-full py-2"
//               onClick={() => setAboutOpen((prev) => !prev)}
//             >
//               <span>PRODUCTS</span>
//               <span className="ml-2">{aboutOpen ? "▲" : "▼"}</span>
//             </button>
//             {aboutOpen && (
//               <div className="pl-4 flex flex-col">
//                 <a href="/about/mission" className="py-1">Our Mission</a>
//                 <a href="/about/team" className="py-1">Team</a>
//                 <a href="/about/careers" className="py-1">Careers</a>
//                  <a href="/about/mission" className="py-1">Our Mission</a>
//                 <a href="/about/team" className="py-1">Team</a>
//                 <a href="/about/careers" className="py-1">Careers</a>
//               </div>
//             )}
//           </div>
//           <a href="#" className="py-2">CONTACT US</a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;








import React, { useState } from "react";
import { Link } from "react-router-dom";

const megaMenu = [
  {
    title: "ONCOLOGY",
    items: [
      { name: "Lunsumio (Mosunetuzumab-axgb)", link: "#" },
      { name: "Krazati (adagrasib)", link: "#" },
      { name: "Rolvedon (Eflapegrastim-xnst)", link: "#" },
      { name: "Orserdu (Elacestrant)", link: "#" },
      { name: "Ocaliva (Obeticholic Acid)", link: "#" },
      { name: "Portrazza (Necitumumab)", link: "#" },
      { name: "Cytalux (Pofalacanine)", link: "#" },
      { name: "Pylarify (Piflufolastat F18)", link: "#" },
    ],
  },
  {
    title: "HEMATOLOGY",
    items: [
      { name: "Rezlidhia (Olutasidenib)", link: "#" },
      { name: "Jaypirca (pirtobrutinib)", link: "#" },
      { name: "Jesduvroq (Daprodustat)", link: "#" },
      { name: "Columvi (Glofitamab-gxbm)", link: "#" },
    ],
  },
  {
    title: "NEUROLOGY",
    items: [
      { name: "Radicut (Edaravone)", link: "#" },
      { name: "Rilutek (Riluzole)", link: "#" },
      { name: "Ajovy (Fremanezumab-vfrm)", link: "#" },
      { name: "Emgality (Galcanezumab)", link: "#" },
    ],
  },
  {
    title: "NEPHAROLOGY",
    items: [
      { name: "Korsuva (Difelikefalin)", link: "#" },
      { name: "Kerendia (Finerenone)", link: "#" },
      { name: "Ultomiris (Ravulizumab)", link: "#" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);

  return (
    <div className="relative w-full bg-transparent z-30 border-b border-gray-100 shadow">
       <div className="bg-black text-x1 text-white text-center py-1">
        RAREPHARMASUPPLY =9768640067
       </div>
      <nav className="max-w-[1250px] mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo & Branding */}
        <a href="/" className="flex items-center gap-2">
          <svg className="w-10 h-10" viewBox="0 0 100 100">
            <path d="M50 95 C 20 75, 20 35, 50 55" fill="#003366" />
            <path d="M50 95 C 80 75, 80 35, 50 55" fill="#003366" />
            <path d="M50 95 C 30 85, 35 55, 50 70" fill="#003366" opacity=".7" />
            <path d="M50 95 C 70 85, 65 55, 50 70" fill="#003366" opacity=".7" />
            <path d="M50 70 C 40 50, 40 20, 50 10 C 60 20, 60 50, 50 70 Z" fill="#E8795F" />
          </svg>
          <span className="text-xl font-bold text-blue-900">Rare Pharma Supply</span>
        </a>
        {/* Links: Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-base font-semibold">
          <li><a href="#" className="hover:text-blue-600">HOME</a></li>
          <li><Link to="Aboutus1" className="hover:text-blue-600">ABOUT US</Link></li>
          <li
            className="relative"
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-700 focus:outline-none cursor-pointer">
              PRODUCT LIST <span className="text-lg">▾</span>
            </button>
            {/* Mega Menu */}
            {mega && (
              <div className="absolute left-1/2 top-[40px] -translate-x-1/2 bg-white shadow-2xl rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-[90vw] max-w-6xl text-sm z-50 animate-fadeIn">
                {megaMenu.map((col, i) => (
                  <div key={col.title}>
                    <h3 className="mb-3 font-bold text-blue-800 text-lg">{col.title}</h3>
                    <ul className="space-y-2 font-medium text-gray-700">
                      {col.items.map((item, idx) => (
                        <li key={idx}>
                          <a href={item.link} className="italic hover:text-blue-700">{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li><a href="#" className="hover:text-blue-600">BLOG</a></li>
          <li><Link to="faqsupport" className="hover:text-blue-600">FAQ & SUPPORT</Link></li>
          <li><a href="#" className="hover:text-blue-600">CONTACT US</a></li>
        </ul>
        {/* Hamburger for Mobile */}
        <button className="md:hidden cursor-pointer" onClick={() => setOpen((o) => !o)}>
          {!open ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Slide-down Menu */}
      {open && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white border-t p-6 flex flex-col gap-3 shadow-xl z-40 animate-fadeIn">
          <a href="#" className="font-semibold pb-2 border-b">HOME</a>
          <a href="Aboutus1 " className="font-semibold pb-2 border-b">ABOUT US</a>
          <details>
            <summary className="font-semibold pb-2 border-b cursor-pointer">PRODUCT LIST</summary>
            <div className="pt-4 grid grid-cols-1 gap-4">
              {megaMenu.map((cat, i) => (
                <div key={cat.title}>
                  <div className="text-blue-800 font-bold mb-1">{cat.title}</div>
                  <ul className="ml-3 text-gray-700 text-sm space-y-1">
                    {cat.items.map((item, idx) => (
                      <li key={idx}><a href={item.link} className="italic hover:text-blue-700">{item.name}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
          <a href="#" className="font-semibold pb-2 border-b">BLOG</a>
          <a href="faqsupport" className="font-semibold pb-2 border-b">FAQ & SUPPORT</a>
          <a href="#" className="font-semibold">CONTACT US</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
