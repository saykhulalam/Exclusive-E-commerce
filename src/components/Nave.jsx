import React, { useState } from "react";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import Container from "./Container";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import Flex from "../components/Flex";

const Nave = () => {
  let [manuShow, setManuShow] = useState(false);
  let [accountManuShow, setAccountManuShow] = useState(true);
  let handleManu = () => {
    setManuShow(!manuShow);
  };
  let handleAccount = () => {
    setAccountManuShow(!accountManuShow);
    console.log(accountManuShow);
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
              } absolute lg:static top-[100px] mt-4 backdrop-blur-xl backdrop-brightness-50 lg:backdrop-brightness-200 lg:bg-transparent items-center p-5 lg:p-0`}
            >
              <List className="lg:flex gap-[48px]">
                <ListItem className=" select-none text-white lg:text-black after:duration-500 text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 lg:hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0 after:top-6 mb-2">
                  <Link to="/">Home</Link>
                </ListItem>
                <ListItem className=" select-none text-white lg:text-black after:duration-500 text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 lg:hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0 after:top-6 mb-2">
                  <Link to="/Contact">Contact</Link>
                </ListItem>
                <ListItem className=" select-none text-white lg:text-black after:duration-500 text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 lg:hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0 after:top-6 mb-2">
                  <Link to="/About">About</Link>
                </ListItem>
                <ListItem className=" select-none text-white lg:text-black after:duration-500 text-[16px] font-popins leading-[24px] text-black font-normal after:contents-[''] after:w-0 lg:hover:after:w-full duration-500 after:h-[1px] after:absolute after:bg-black after:bottom-0 relative after:left-0 after:top-6 mb-2">
                  <Link to="/Create-account">Sign Up</Link>
                </ListItem>
              </List>
              <Flex className="lg:flex-row flex-col lg:items-center gap-[24px]">
                <div className=" relative w-[243px]">
                  <input
                    className=" w-full bg-[#F5F5F5] h-[38px] rounded-[4px] pl-[20px] text-[12px] font-normal leading-[18px] font-popins text-black mt-2 lg:m-0"
                    type="text"
                    placeholder="What are you looking for?"
                  />
                  <IoSearch className="text-[23px]  absolute right-3 top-4 lg:top-2" />
                </div>
                <div className="flex lg:m-0 md:mt-4 gap-[24px] items-center">
                  <FaRegHeart className=" text-[20px] text-white lg:text-black" />
                  <CiShoppingCart className=" text-[25px] text-white lg:text-black" />
                  <div
                    onClick={handleAccount}
                    className="w-[32px] h-[32px] rounded-full hover:bg-prymari-red flex justify-center items-center group duration-300"
                  >
                    <MdOutlineManageAccounts className=" text-[25px] text-white lg:text-black group-hover:text-white duration-300" />
                  </div>
                </div>
              </Flex>
            </div>
            <TfiMenu
              onClick={handleManu}
              className=" border-[3px] p-[2px] rounded-[4px] text-[40px] lg:hidden"
            />
            <div
              className={`w-[225px] h-[260px] backdrop-blur-3xl backdrop-saturate-200 backdrop-brightness-50	  absolute lg:right-[250px] md:right-[200px] rotet:right-[450px] md:top-[120px] lg:top-[110px] top-[395px] py-[15px] px-[15px] rounded-[4px] ${
                accountManuShow ? "hidden" : "block"
              }`}
            >
              <List>
                <ListItem className=" select-none text-[14px] text-white leading-[21px] font-popins font-normal mb-[18px] flex gap-[16px] items-center">
                  <MdManageAccounts className="text-[32px] text-white" />
                  <Link>Manage My Account</Link>
                </ListItem>
                <ListItem className=" select-none text-[14px] text-white leading-[21px] font-popins font-normal mb-[18px] flex gap-[16px] items-center">
                  <LuShoppingBag className="text-[32px] text-white" />
                  <Link>My Order</Link>
                </ListItem>
                <ListItem className=" select-none text-[14px] text-white leading-[21px] font-popins font-normal mb-[18px] flex gap-[16px] items-center">
                  <RxCrossCircled className="text-[32px] text-white" />
                  <Link>My Cancellations</Link>
                </ListItem>
                <ListItem className=" select-none text-[14px] text-white leading-[21px] font-popins font-normal mb-[18px] flex gap-[16px] items-center">
                  <FaRegStar className="text-[32px] text-white" />
                  <Link>My Reviews</Link>
                </ListItem>
                <ListItem className=" select-none text-[14px] text-white leading-[21px] font-popins font-normal mb-[18px] flex gap-[16px] items-center">
                  <TbLogout2 className="text-[32px] text-white" />
                  <Link>Logout</Link>
                </ListItem>
              </List>
            </div>
          </div>
        </Container>
      </nav>
      <div className="bg-[#00000023] h-[1px] w-full"></div>
    </>
  );
};

export default Nave;
