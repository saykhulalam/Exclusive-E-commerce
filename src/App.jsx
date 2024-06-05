import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "../src/pages/Home";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";


const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Create-account" element={<CreateAccount/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Shop" element={<Shop/>}></Route>
    <Route path="/productdetails" element={<ProductDetails/>}></Route>
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
