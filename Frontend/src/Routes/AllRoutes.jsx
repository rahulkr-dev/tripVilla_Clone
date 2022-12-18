import React from "react";
import { Route, Routes } from "react-router-dom";
import Forgetpassword from "../Components/auth/Forgetpassword";
import { Navbar } from "../Components/HomePage";
import LoginCard from "../Components/auth/LoginCard";
import SignupCard from "../Components/auth/SignupCard";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import Hotels from "../Components/Hotelpage/Hoteldetails";
<<<<<<< HEAD
// import Payment from "../Pages/Payment";
=======

>>>>>>> 2d12d604ed3ead82bd2b9fc0d6b94dfffb596d73

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
<<<<<<< HEAD
        {/* <Route path="/payment" element={<Payment/>}></Route> */}
=======

>>>>>>> 2d12d604ed3ead82bd2b9fc0d6b94dfffb596d73
      </Routes>
    </>
  );
}

export default AllRoutes;
