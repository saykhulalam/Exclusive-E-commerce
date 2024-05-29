import React from "react";
import Image from "./Image";
import { FaStar } from "react-icons/fa";
import Flex from "./Flex";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const OurProducts = ({ imageurl, name, prize, count, marzin }) => {
  return (
    <div>
      <div className="w-[270px] md:w-[240px] lg:w-[250px] mt-[40px] sm:px-4 md:px-2">
        <div className=" bg-[#F5F5F5] w-full h-[250px] rounded-[4px] flex justify-center items-center relative  group-hover:w-[270px] group overflow-hidden">
          <Image src={imageurl} />
          <div className=" absolute right-2 top-2">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-[8px]">
              <FaRegHeart className="text-[24px] text-black" />
            </div>
            <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
              <IoEyeSharp className="text-[27px] text-black" />
            </div>
          </div>
          <button className=" group-hover:bottom-0 duration-300 w-full py-[8px] bg-black absolute flex items-center justify-center bottom-[-100%]">
            <h2 className="text-[16px] text-white leading-[24px] font-popins">
              Add To Cart
            </h2>
          </button>
        </div>
        <div className=" mt-[16px]">
          <h3 className="text-[16px] font-popins font-medium leading-[24px] text-black mb-[8px]">
            {name}
          </h3>
          <Flex className="gap-[8px]">
            <div className="flex gap-[12px] items-center mb-[8px]">
              <h3 className="text-[16px] font-popins font-medium leading-[24px] text-prymari-red">
                {prize}
              </h3>
            </div>
            <Flex className="gap-1">
              <FaStar className="text-[20px] text-[#FFAD33]" />
              <FaStar className="text-[20px] text-[#FFAD33]" />
              <FaStar className="text-[20px] text-[#FFAD33]" />
              <FaStar className="text-[20px] text-[#FFAD33]" />
              <FaStar className="text-[20px] text-[#FFAD33]" />
            </Flex>
            <h3 className="text-[14px] font-popins font-semibold leading-[21px]">
              {count}
            </h3>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
