import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import aboutBannerImg from "../assets/about-img.png";
import Image from "./Image";
import AboutCategory from "./AboutCategory";
import { FaStore } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { IoGiftOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import AboutCustomer from "./AboutCustomer";
import AboutImgCustomerOne from "../assets/aboutslide-one.png";
import AboutImgCustomerTow from "../assets/aboutslide-tow.png";
import AboutImgCustomerThree from "../assets/aboutslide-three.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Service from "./Service";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          margin: "0px",
          position: "absolute",
          left: "50%",
          transform: "transLateX(-50%)",
          bottom: "-8%",
        }}
      >
        <ul style={{ margin: "0px", display: "flex", gap: "12px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          color: "",
          background: "#808080",
          border: "",
          borderRadius: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="lg:mt-20 mt-10">
      <Container>
        <Flex className=" items-center gap-10 lg:gap-[75px] lg:flex-row flex-col">
          <div className="lg:w-[50%]">
            <h2 className="text-[54px] font-inter font-semibold leading-[64px] text-black mb-[40px]">
              Our Story
            </h2>
            <p className="text-[16px] font-popins font-normal leading-[26px] text-black mb-[24px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="text-[16px] font-popins font-normal leading-[26px] text-black">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="lg:w-[50%]">
            <Image src={aboutBannerImg} />
          </div>
        </Flex >
        <Flex className="lg:justify-between mt-16 lg:mt-[140px] items-center lg:gap-0 gap-5 lg:flex-row flex-col sm:flex-row sm:justify-evenly sm:flex-wrap">
          <AboutCategory
            IconUrl={<FaStore />}
            Count="10.5k"
            Paragraph="Sallers active our site"
          />
          <AboutCategory
            IconUrl={<AiOutlineDollar />}
            Count="33k"
            Paragraph="Mopnthly Produduct Sale"
          />
          <AboutCategory
            IconUrl={<IoGiftOutline />}
            Count="45.5k"
            Paragraph="Customer active in our site"
          />
          <AboutCategory
            IconUrl={<FaSackDollar />}
            Count="25k"
            Paragraph="Anual gross sale in our site"
          />
        </Flex>
        <Slider {...settings} className="lg:mt-[140px] mt-20">
          <AboutCustomer
            ImageUrl={AboutImgCustomerOne}
            Name="Tom Cruise"
            Paragraph="Founder & Chairman"
          />
          <AboutCustomer
            ImageUrl={AboutImgCustomerTow}
            Name="Emma Watson"
            Paragraph="Managing Director"
          />
          <AboutCustomer
            ImageUrl={AboutImgCustomerThree}
            Name="Will Smith"
            Paragraph="Product Designer"
          />
          <AboutCustomer
            ImageUrl={AboutImgCustomerOne}
            Name="Tom Cruise"
            Paragraph="Founder & Chairman"
          />
          <AboutCustomer
            ImageUrl={AboutImgCustomerTow}
            Name="Emma Watson"
            Paragraph="Managing Director"
          />
          <AboutCustomer
            ImageUrl={AboutImgCustomerThree}
            Name="Will Smith"
            Paragraph="Product Designer"
          />
        </Slider>
        <Service />
      </Container>
    </section>
  );
};

export default About;
