import React from 'react'
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection'
// import HeroSection from "../HeroSection/HeroSection";
// import { Home } from 'lucide-react'
// import Home from "../Home/Home";
import TherapeuticAreas from "../TherapeuticAreas/TherapeuticAreas";
import About from "../About/About";
import ImportantDrugs from "../ImportantDrugs/ImportantDrugs";
import ImportedProducts from "../medicineslide/medicineslide";
import LeadershipSection from "../Team/team";
import ContactSection from "../Contactus/Contactus";
import FooterSection from "../footersection/Footersection";
// import ImageSlider from "../HeroSection/HeroSection";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
 

function Home1() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <About />
      <TherapeuticAreas />
      <ImportantDrugs/>
      <ImportedProducts />
      <LeadershipSection/>
      <ContactSection/>
      {/* <FooterSection/> */}
      
    </div>
  );
}

// export default App;

export default Home1



// function App() {
//   return (
//     <div>
//       <Navbar />
//       {/* <HeroSection /> */}
//        <ImageSlider/>
//       {/* <Home/> */}

//       <About />
//       <TherapeuticAreas />
//       <Home />
//       <ImportedProducts />
//       <LeadershipSection/>
//       <ContactSection/>
//       <FooterSection/>
//     </div>
//   );
// }

// export default App;
