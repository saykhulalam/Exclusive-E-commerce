import { useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "../src/pages/Home";


const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
