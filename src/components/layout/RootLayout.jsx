import React from 'react'
import { Outlet } from 'react-router-dom';
import Hader from '../Hader';
import Nave from '../Nave';
import Footer from '../Footer';

const RootLayout = () => {
  return (
    <>
    <Hader/>
    <Nave/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout;
