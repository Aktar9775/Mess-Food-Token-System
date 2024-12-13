import { useEffect, useState } from "react";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Component/Pages/Naavbar";

import Naavbar from "./Component/Pages/Naavbar";
import Hero from "./Component/Pages/Hero";
import About from "./Component/Pages/About";
import Plans2 from "./Component/Pages/Plans2";
import FoodCatagory from "./Component/Pages/FoodCatagory";
import Features from "./Component/Pages/Features";
import Footer from "./Component/Pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Component/Pages/Registration";
import Login from "./Component/Pages/Login"
import AdminLogin from "./Component/Pages/AdminLogin";
import AdminDashbord from "./Component/Pages/AdminDashbord";
import UserPage from "./Component/Pages/UserPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Naavbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Plans2 />
                <FoodCatagory />
                <Features />
              </>
            }
          ></Route>
          <Route path="/Hero" element={<Hero></Hero>}></Route>
          <Route path="/Plans" element={<Plans2></Plans2>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Features" element={<Features/>}></Route>
          <Route
            path="/Registration"
            element={<Registration></Registration>}
          ></Route>
          <Route
            path="/UserLogin"
            element={<Login></Login>}
          ></Route>
          <Route 
          path="/AdminLogin"
          element={<AdminLogin></AdminLogin>}
          ></Route>
          <Route 
          path="/AdminDashboard"
          element={<AdminDashbord></AdminDashbord>}
          ></Route>
          <Route 
          path="/UserPage"
          element={<UserPage></UserPage>}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
