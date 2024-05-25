import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FaAngleRight } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

const BannerList = () => {
  let [manuShow, setManuShow] = useState(true);
  return (
    <>
      <div
        className="flex items-center border-[1px] gap-2 text-[15px] font-popins border-gray-500 w-[140px] p-1 rounded-[5px] mt-4 lg:hidden select-none sm:select-none md:select-none hover:bg-black hover:text-white duration-300 mb-3 relative"
        onClick={() => setManuShow(!manuShow)}
      >
        <TbCategory className="text-[20px]" />
        <h2>Category</h2>
        <FaChevronDown />
      </div>
      <List
        className={`lg:pt-[40px] pt-3 border-r ${
          manuShow ? "hidden" : "block"
        } lg:block absolute z-20 backdrop-blur-xl lg:backdrop-brightness-200 backdrop-brightness-50 lg:bg-transparent lg:p-0 lg:pr-4 p-4 rounded-lg`}
      >
        <ListItem className=" text-white text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[35px] items-center">
          Woman’s Fashion {true ? <FaAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white w-[217px] text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[20px] items-center justify-between">
          Men’s Fashion{true ? <FaAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white  text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[35px] items-center justify-between">
          Electronics {false ? <FaAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white  text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[35px] items-center justify-between">
          Home & Lifestyle {false ? <FaAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white  text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[35px] items-center justify-between">
          Medicine {false ? <FaAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white  text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[35px] items-center justify-between">
          Sports & Outdoor {false ? <FaAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white  text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[35px] items-center justify-between">
          Baby’s & Toys{false ? <FaAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[35px] items-center justify-between">
          Groceries & Pets {false ? <FaAngleRight /> : ""}
        </ListItem>
        <ListItem className=" text-white text-[18px] font-popins font-normal leading-[24px] lg:text-black mb-[16px] flex gap-[35px] items-center justify-between">
          Health & Beauty {false ? <FaAngleRight /> : ""}
        </ListItem>
      </List>
    </>
  );
};

export default BannerList;
