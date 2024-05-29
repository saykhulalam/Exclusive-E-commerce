import React from "react";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import { LuSendHorizonal } from "react-icons/lu";
import Flex from "./Flex";
import Image from "./Image";
import FooterImgOne from "../assets/skem.png";
import FooterImgTow from "../assets/googlepay.png";
import FooterImgThree from "../assets/apple.png";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-black pt-[80px] pb-[24px] mt-[80px] lg:mt-[140px]">
      <Container>
        <Flex className=" justify-between lg:flex-row flex-wrap gap-10">
          <div className="">
            <h2 className="text-[24px] font-bold font-inter leading-[24px] tracking-[1px] text-white mb-[24px]">
              Exclusive
            </h2>
            <h3 className="text-[20px] font-medium font-popins leading-[28px] text-[#FAFAFA] mb-[24px]">
              Subscribe
            </h3>
            <List>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins">
                Get 10% off your first order
              </ListItem>
              <div className=" relative">
                <input
                  className="w-[217px] h-[48px] bg-transparent rounded-[4px] border-[1px] border-[#FAFAFA] text-[16px] font-normal font-popins leading-[24px] pl-[16px] mt-[16px]"
                  placeholder="Enter your email"
                  type="text"
                />
                <LuSendHorizonal className="text-[#FAFAFA] text-[24px]  absolute  left-[170px]  top-[28px]" />
              </div>
            </List>
          </div>
          <div>
            <h2 className="text-[24px] font-bold font-inter leading-[24px] tracking-[1px] text-white mb-[24px]">
              Support
            </h2>
            <List>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </ListItem>
              <ListItem className=" text-[12px] lg:text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                exclusive@gmail.com
              </ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                +88015-88888-9999
              </ListItem>
            </List>
          </div>
          <div>
            <h2 className="text-[24px] font-bold font-inter leading-[24px] tracking-[1px] text-white mb-[24px]">
              Account
            </h2>
            <List>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                My Account
              </ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]"></ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                Login / Register
              </ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                Cart
              </ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                Wishlist
              </ListItem>
            </List>
          </div>
          <div>
            <h2 className="text-[24px] font-bold font-inter leading-[24px] tracking-[1px] text-white mb-[24px]">
              Quick Link
            </h2>
            <List>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                Privacy Policy{" "}
              </ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]"></ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                Terms Of Use
              </ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                FAQ
              </ListItem>
              <ListItem className="text-[16px] text-[#FAFAFA] leading-[24px] font-normal font-popins mb-[16px]">
                Contact
              </ListItem>
            </List>
          </div>
          <div>
            <h2 className="text-[24px] font-bold font-inter leading-[24px] tracking-[1px] text-white mb-[24px]">
              Download App
            </h2>
            <h5 className="text-[#FAFAFA] text-[12px] font-medium font-popins leading-[18px] mb-[8px]">
              Save $3 with App New User Only
            </h5>
            <Flex className=" items-center gap-[8px]">
              <div className="">
                <Image src={FooterImgOne} />
              </div>
              <div className="flex flex-col gap-[4px]">
                <Image src={FooterImgTow} />
                <Image src={FooterImgThree} />
              </div>
            </Flex>
            <div className="flex gap-[24px] mt-[24px]">
              <Link>
                <FaFacebookF className="text-[24px] text-white" />
              </Link>
              <Link>
                <IoLogoTwitter className="text-[24px] text-white" />
              </Link>
              <Link>
                <FaInstagram className="text-[24px] text-white" />
              </Link>
              <Link>
                <FaLinkedinIn className="text-[24px] text-white" />
              </Link>
            </div>
          </div>
        </Flex>
        <hr className="mt-[60px] mb-[24px]" />
        <h5 className="text-white text-[16px] leading-[24px] font-popins text-center tracking-[1px] font-normal">
          {" "}
          &#169; Copyright Rimel 2022. All right reserved
        </h5>
      </Container>
    </section>
  );
};

export default Footer;
