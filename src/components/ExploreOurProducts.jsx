import React from "react";
import Container from "./Container";
import Taitel from "../components/Taitel";
import OurProducts from "./OurProducts";
import Cat from "../assets/cat.png";
import Camara from "../assets/camara.png";
import Laptop from "../assets/laptop.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import VewallButton from "../components/VewallButton";
import { Link } from "react-router-dom";

const ExploreOurProducts = () => {
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
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
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
    <section className="mt-[135px]">
      <Container>
        <Taitel subtaitel="Our Products" taitel="Explore Our Products" />
        <div className="slider-container">
          <Slider {...settings} className="">
            <OurProducts
              name="Breed Dry Dog Food"
              prize="$100"
              count="(35)"
              imageurl={Cat}
            />
            <OurProducts
              name="CANON EOS DSLR Camera"
              prize="$360"
              count="(95)"
              imageurl={Camara}
            />
            <OurProducts
              name="ASUS FHD Gaming Laptop"
              prize="$700"
              count="(325)"
              imageurl={Laptop}
            />
            <OurProducts
              name="Breed Dry Dog Food"
              prize="$100"
              count="(35)"
              imageurl={Cat}
            />
            <OurProducts
              name="Breed Dry Dog Food"
              prize="$100"
              count="(35)"
              imageurl={Cat}
            />
            <OurProducts
              name="CANON EOS DSLR Camera"
              prize="$360"
              count="(95)"
              imageurl={Camara}
            />
            <OurProducts
              name="ASUS FHD Gaming Laptop"
              prize="$700"
              count="(325)"
              imageurl={Laptop}
            />
            <OurProducts
              name="Breed Dry Dog Food"
              prize="$100"
              count="(35)"
              imageurl={Cat}
            />
            <OurProducts
              name="Breed Dry Dog Food"
              prize="$100"
              count="(35)"
              imageurl={Cat}
            />
            <OurProducts
              name="CANON EOS DSLR Camera"
              prize="$360"
              count="(95)"
              imageurl={Camara}
            />
            <OurProducts
              name="ASUS FHD Gaming Laptop"
              prize="$700"
              count="(325)"
              imageurl={Laptop}
            />
            <OurProducts
              name="Breed Dry Dog Food"
              prize="$100"
              count="(35)"
              imageurl={Cat}
            />
          </Slider>
        </div>
        <Link to="/shop">
          <VewallButton />
        </Link>
      </Container>
    </section>
  );
};

export default ExploreOurProducts;
