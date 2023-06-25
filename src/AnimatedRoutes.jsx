import React from 'react';
import Home from'./Home';
import Contact from'./Contact';
import About from './About';

import {Router,Routes,Route,useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Service from './Service';
function AnimatedRoutes() {
    // const location=useLocation();
  return (
    <>
   
    {/* <AnimatePresence> */}
       
    <Routes >
                        <Route path="/" element={<Home />} />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="About" element={<About />} />
                        <Route path="service" element={<Service />} />
                        {/* <Route path="BestSeller" element={<BestSeller />} />
                        <Route path="Discount" element={<Discount />} /> */}
                    </Routes>
                    {/* </AnimatePresence> */}
                   
                    </>
  )
}

export default AnimatedRoutes