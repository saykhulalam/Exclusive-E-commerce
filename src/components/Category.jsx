import React from "react";
import Container from "./Container";
import Taitel from "./Taitel";
import CategoryItem from "./CategoryItem";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { SlCamera } from "react-icons/sl";
import { MdOutlineHeadphones } from "react-icons/md";
import { VscGame } from "react-icons/vsc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Category = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
        },
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
        },
      },
      {
        breakpoint: 442,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#F5F5F5",
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          right: "0px",
          top: "-75%",
        }}
        onClick={onClick}
      >
        <FaAngleRight className="text-[24px]" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#F5F5F5",
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          right: "6%",
          top: "-75%",
        }}
        onClick={onClick}
      >
        <FaAngleLeft className="text-[24px]" />
      </div>
    );
  }
  return (
    <section>
      <Container>
        <Taitel
          className="mt-[80px]"
          subtaitel="Categories"
          taitel="Browse By Category"
        />
        <FaArrowRightLong className="text-[25px] mb-[-30px] lg:hidden ml-[85%]" />

        <Slider {...settings} className="mt-[60px] mb-[70px]">
          <CategoryItem name="Phones" iconUrl={<CiMobile4 />} />
          <CategoryItem name="SmartWatch" iconUrl={<IoWatchOutline />} />
          <CategoryItem name="Camera" iconUrl={<SlCamera />} />
          <CategoryItem name="HeadPhones" iconUrl={<MdOutlineHeadphones />} />
          <CategoryItem name="Gaming" iconUrl={<VscGame />} />
          <CategoryItem
            name="Computers"
            iconUrl={<HiOutlineComputerDesktop />}
          />
          <CategoryItem name="Phones" iconUrl={<CiMobile4 />} />
          <CategoryItem name="SmartWatch" iconUrl={<IoWatchOutline />} />
          <CategoryItem name="Camera" iconUrl={<SlCamera />} />
          <CategoryItem name="HeadPhones" iconUrl={<MdOutlineHeadphones />} />
          <CategoryItem name="Gaming" iconUrl={<VscGame />} />
          <CategoryItem
            name="Computers"
            iconUrl={<HiOutlineComputerDesktop />}
          />
        </Slider>
        <hr className="mb-[70px]" />
      </Container>
    </section>
  );
};

export default Category;
