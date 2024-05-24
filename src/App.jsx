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


const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/create-account" element={<CreateAccount/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
