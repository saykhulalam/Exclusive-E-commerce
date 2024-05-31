import React from 'react'
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    let location = useLocation().pathname;
    let locationPathname= location.split("/");
  return (
    <div className=''>
      <ul className='flex gap-[12px]'>
        <li className=' font-popins font-normal leading-[21px] text-black text-[14px]'>home</li>
        <li className=' font-popins font-normal leading-[21px] text-black text-[14px]'>/</li>
        <li className=' font-popins font-normal leading-[21px] text-black text-[14px]'>{locationPathname}</li>
      </ul>
    </div>
  )
}

export default Breadcrumb
