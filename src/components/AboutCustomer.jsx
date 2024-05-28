import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const AboutCustomer = ({ ImageUrl, Name, Paragraph }) => {
  return (
    <div className="sm:m-2">
      <Image src={ImageUrl} />
      <h2 className="text-[32px] font-inter leading-[30px] font-medium text-black mb-[8px] mt-[32px] sm:text-[25px]">
        {Name}
      </h2>
      <p className="text-[16px] font-popins font-normal leading-[24px] text-black mb-[16px]">
        {Paragraph}
      </p>
      <Flex className="gap-[16px]">
        <FiTwitter className="text-[24px] text-black" />
        <FaInstagram className="text-[24px] text-black" />
        <FaLinkedinIn className="text-[24px] text-black" />
      </Flex>
    </div>
  );
};

export default AboutCustomer;
