import React from "react";
import { Route, Routes } from "react-router-dom";
import Forgetpassword from "../Components/auth/Forgetpassword";
import { Navbar } from "../Components/HomePage";
import LoginCard from "../Components/auth/LoginCard";
import SignupCard from "../Components/auth/SignupCard";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import Hotels from "../Components/Hotelpage/Hoteldetails";
import About from "../Pages/About";
import Privacy from "../Pages/Privacy";
import Terms from "../Pages/Terms";
import Faq from "../Pages/Faq";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginCard />}></Route>
        <Route path="/signup" element={<SignupCard />}></Route>
        <Route path="/resetpassword" element={<Forgetpassword />}></Route>
        <Route path="/collections" element={<Collections />}></Route>
        <Route path="/hotels" element={<Hotels/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
        <Route path="/about-us/#contact" element={<About/>}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
