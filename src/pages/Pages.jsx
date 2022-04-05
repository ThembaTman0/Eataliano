import React from "react"
import Home from "./Home"
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import Special from "./Special";
import { Route, Routes, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />}/>
        <Route path="/recipe/:name" element={<Recipe />}/>
        <Route path="/special/" element={<Special />}/>
      </Routes>
      </AnimatePresence>
    
  )
}

export default Pages