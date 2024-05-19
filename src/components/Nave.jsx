import React, { useState } from "react";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import Container from "./Container";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { TfiMenu } from "react-icons/tfi";

const Nave = () => {
  let [manuShow, setManuShow] = useState(false);

  let handleManu = () => {
    setManuShow(!manuShow);
  };

  return (
    <>
      <nav className="pt-[40px] pb-[23px] relative z-10">
        <Container>
          <div className="flex justify-between items-center">
            <Image src="public/images/logo.png" alt="logo" />
            <div
              className={`lg:flex gap-[180px] ${
                manuShow ? "lg:flex" : "hidden"
              } absolute lg:static top-[100px] mt-4 bg-black lg:bg-transparent items-center p-5 lg:p-0`}
            >
              <List className="lg:flex gap-[48px]">
                <ListItem className=" select-none text-white lg:text-black after:duration-500 text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 lg:hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0 after:top-6 mb-2">
                  Home
                </ListItem>
                <ListItem className=" select-none text-white lg:text-black after:duration-500 text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 lg:hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0 after:top-6 mb-2">
                  Contact
                </ListItem>
                <ListItem className=" select-none text-white lg:text-black after:duration-500 text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 lg:hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0 after:top-6 mb-2">
                  About
                </ListItem>
                <ListItem className=" select-none text-white lg:text-black after:duration-500 text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 lg:hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0 after:top-6 mb-2">
                  Sign Up
                </ListItem>
              </List>
              <div className="lg:flex flex items-center gap-[24px]">
                <div className=" relative w-[243px]">
                  <input
                    className=" w-full bg-[#F5F5F5] h-[38px] rounded-[4px] pl-[20px] text-[12px] font-normal leading-[18px] font-popins text-black mt-2 lg:m-0"
                    type="text"
                    placeholder="What are you looking for?"
                  />
                  <IoSearch className="text-[23px]  absolute right-3 top-4 lg:top-2" />
                </div>
                <div className="flex gap-[24px] items-center">
                <FaRegHeart className=" text-[20px] text-white lg:text-black" />
                <CiShoppingCart className=" text-[25px] text-white lg:text-black" />
                </div>
              </div>
            </div>
            <TfiMenu
              onClick={handleManu}
              className=" border-[3px] p-[2px] rounded-[4px] text-[40px] lg:hidden"
            />
          </div>
        </Container>
      </nav>
      <div className="bg-[#00000023] h-[1px] w-full"></div>
    </>
  );
};

export default Nave;
