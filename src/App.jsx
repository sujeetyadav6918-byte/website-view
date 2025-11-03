// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// export default App

// import React from 'react'
// import Home from './components/Home/Home'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import Fruits from './components/Fruits/Fruits'

// const App =() =>{
//   const router =createBrowserRouter ([
//     {
//       path:'/',
//       element:<Home/>,
//     },
//     {
//     path:'/Fruits',
//     element:<Fruits/>
//     }

//   ])

// return <RouterProvider router={router}/>

//   // return (
//   //   <div>App</div>
//   // )
// }

// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import HeroSection from "./components/HeroSection/HeroSection";
// // import { Home } from 'lucide-react'
// import Home from "./components/Home/Home";
// import TherapeuticAreas from "./components/TherapeuticAreas/TherapeuticAreas";
// import About from "./components/About/About";
// import ImportedProducts from "./components/medicineslide/medicineslide";
// import LeadershipSection from "./components/Team/team";
// import ContactSection from "./components/Contactus/Contactus";
// import FooterSection from "./components/footersection/Footersection";
// import ImageSlider from "./components/HeroSection/HeroSection";
// import { createBrowserRouter,RouterProvider } from "react-router-dom";
// // import Home1 from "./components/Home1/Home1";

// const App = () => {
//   const router = createBrowserRouter({

//     {
//       path:
//       element:
//     }

//   })
//   return <RouterProvider router={router} />

// }

// export default App;

import React from "react";
import Home1 from "./components/Home1/Home1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus1 from "./components/Aboutus1/Aboutus1";
import Faqandsupport from "./components/Faqandsuppoer/Faqandsuppoer";
// import { Layout } from "lucide-react";
import Layout from "./components/Layout/Layout";
import OncologyProductsPage from "./components/Therapeutic/Oncology";
import MedicinesDirectory from "./components/Therapeutic/medicineDirectory";




const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          path:'/',
          element:<Home1/>
        },
        {
          path: "/Aboutus1",
          element: <Aboutus1 />,
        },
        {
          path: "/faqsupport",
          element: <Faqandsupport />,
        },
        {
          path:"/Oncology",
          element:<OncologyProductsPage/>
        },
        {
          path:"fullmedicine",
          element:<MedicinesDirectory/>
        }
       
      ],
    },
    // {
    //   path:'/Aboutus1',
    //   element: <Aboutus1 />,
    // },
    // {
    //   path:'/faqsupport',
    //   element: <Faqandsupport/>,
    // }
  ]);
  return <RouterProvider router={router} />;
};

export default App;

// function App() {
//   return (
//     <div>
//       <Home1/>
//     </div>
//   )
// }

// export default App

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
