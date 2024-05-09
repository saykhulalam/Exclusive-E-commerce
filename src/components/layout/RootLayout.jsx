import React from 'react'
import { Outlet } from 'react-router-dom';
import Hader from '../Hader';
import Nave from '../Nave';

const RootLayout = () => {
  return (
    <>
    <Hader/>
    <Nave/>
    <Outlet/>
    </>
  )
}

export default RootLayout;
