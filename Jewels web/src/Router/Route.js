import { Route, Routes } from "react-router-dom";
import Contact from "../Components/Contact/Contact";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import AdminContainer from "../Container/AdminContainer/AdminContainer";
import HomeContainer from "../Container/HomeContainer/HomeContainer";

export let routes = (
  <Routes>
    <Route path="/" element={<HomeContainer />} />
    <Route path="/home" element={<HomeContainer />} />
    <Route path="/signIn" element={<SignIn />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/admin" element={<AdminContainer />} />
    <Route path="/contact" element={<Contact />} />
    <Route />
  </Routes>
);
