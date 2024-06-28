import React from "react";
import Container from "./Container";
import Taitel from "./Taitel";
import ReallTime from "./ReallTime";
import Flex from "./Flex";
import Prodact from "./Prodact";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import VewallButton from "./VewallButton";
import remortimg from "../assets/remort.png";
import kaybord from "../assets/kaybord.png";
import monitor from "../assets/monitor.png";
import chayer from "../assets/chayer.png";
import { Link } from "react-router-dom";

const FlashSales = () => {
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
          top: "-12%",
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
          top: "-12%",
        }}
        onClick={onClick}
      >
        <FaAngleLeft className="text-[24px]" />
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
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
        breakpoint: 737,
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
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: "",
          prevArrow: "",
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="lg:pt-[150px] pt-12 ">
      <Container>
        <Flex className="gap-[67px] lg:items-center lg:flex-row flex-col">
          <Taitel subtaitel="Today’s" taitel="Flash Sales" />
          <ReallTime />
        </Flex>
        <Slider {...settings}>
          <Prodact
            imageurl={remortimg}
            prize="$120"
            cross="$160"
            name="HAVIT HV-G92 Gamepad"
            offer="-40%"
          />
          <Prodact
            imageurl={kaybord}
            prize="$960"
            cross="$1160"
            name="AK-900 Wired Keyboard"
            offer="-40%"
          />
          <Prodact
            imageurl={monitor}
            prize="$370"
            cross="$400"
            name="IPS LCD Gaming Monitor"
            offer="-40%"
          />
          <Prodact
            imageurl={chayer}
            prize="$375"
            cross="$400"
            name="S-Series Comfort Chair "
            offer="-40%"
          />
          <Prodact
            imageurl={remortimg}
            prize="$120"
            cross="$160"
            name="HAVIT HV-G92 Gamepad"
            offer="-40%"
          />
          <Prodact
            imageurl={kaybord}
            prize="$960"
            cross="$1160"
            name="AK-900 Wired Keyboard"
            offer="-40%"
          />
          <Prodact
            imageurl={monitor}
            prize="$370"
            cross="$400"
            name="IPS LCD Gaming Monitor"
            offer="-40%"
          />
          <Prodact
            imageurl={chayer}
            prize="$375"
            cross="$400"
            name="S-Series Comfort Chair "
            offer="-40%"
          />
        </Slider>
        <Link to="/shop">
          <VewallButton />
        </Link>
      </Container>
    </section>
  );
};

export default FlashSales;
