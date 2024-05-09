import React from "react";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import Container from "./Container";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";




const Nave = () => {
  return (
    <>
      <nav className="pt-[47px] pb-[23px]">
        <Container>
          <div className="flex justify-between items-center">
            <Image src="public/images/logo.png" alt="logo" />
            <List className="flex gap-[48px]">
              <ListItem className="text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0">
                Home
              </ListItem>
              <ListItem className="text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0">
                Contact
              </ListItem>
              <ListItem className="text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0">
                About
              </ListItem>
              <ListItem className="text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0">
                Sign Up
              </ListItem>
            </List>
            <div className="flex items-center gap-[24px]">
              <div className=" relative w-[243px]">
                <input className=" w-full bg-[#F5F5F5] h-[38px] rounded-[4px] pl-[20px] text-[12px] font-normal leading-[18px] font-popins text-black" type="text" placeholder="What are you looking for?"/>
                <IoSearch className="text-[23px]  absolute right-3 top-2"/>
              </div>
              <FaRegHeart className=" text-[20px]" />
              <CiShoppingCart className=" text-[25px]" />
            </div>
          </div>
        </Container>
      </nav>
      <div className="bg-[#00000023] h-[1px] w-full"></div>
    </>
  );
};

export default Nave;
