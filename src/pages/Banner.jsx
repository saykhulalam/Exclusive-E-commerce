import React from "react";
import Container from "../components/Container";
import List from "../components/List";
import ListItem from "../components/ListItem";
import { FaAngleRight } from "react-icons/fa6";
import Image from "../components/Image";
import Bannerimg from "../assets/banner.png";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <section>
        <Container>
          <div className="grid grid-cols-12">
            <div className=" col-span-3 border-r-[1px]">
              <List className="mt-[40px]">
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px] flex items-center gap-[51px]">
                  Woman’s Fashion <FaAngleRight className="w-[7px]" />
                </ListItem>
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px] flex items-center gap-[51px]">
                  Men’s Fashion <FaAngleRight className="w-[7px]" />
                </ListItem>
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px]">
                  Electronics
                </ListItem>
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px]">
                  Home & Lifestyle
                </ListItem>
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px]">
                  Medicine
                </ListItem>
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px]">
                  Sports & Outdoor
                </ListItem>
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px]">
                  Baby’s & Toys
                </ListItem>
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px]">
                  Groceries & Pets
                </ListItem>
                <ListItem className="text-[16px] font-normal font-popins text-black leading-[24px] mb-[16px]">
                  Health & Beauty
                </ListItem>
              </List>
            </div>
            <div className=" col-span-9 p-8">
              <div className="bg-black relative">
                <Image className="ml-[40%]" src={Bannerimg} alt="bannerimg" />
                <div className=" absolute top-9 left-10">
                  <div className="flex items-center gap-[14px]">
                    <FaApple className="text-white text-[40px]" />
                    <h2 className="text-[16px] text-white font-popins font-normal lading-[24px]">
                      iPhone 14 Series
                    </h2>
                  </div>
                  <h1 className="text-[48px] text-white font-inter font-semibold w-[294px] mt-[20px]">
                    Up to 10% off Voucher
                  </h1>
                  <Link className="text-[18px] text-white font-popins font-medium leading-[24px] underline flex items-center gap-[8px] mt-[22px]">
                    Shop Now <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
