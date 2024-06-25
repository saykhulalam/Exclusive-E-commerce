import React from "react";
import Container from "./Container";
import BannerList from "./BannerList";
import Image from "./Image";
import BannerImg from "../assets/banner.jpg";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div style={{
        margin: "0px", position: 'absolute', left: '50%', transform: 'transLateX(-50%)', bottom:'5%',
      }}>
        <ul style={{
          display: 'flex',
          gap: '12px',
         }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: '12px',
          color: "",
          background: "#808080",
          border: "",
          borderRadius: '50%',
        }}
      ></div>
    ),
  };
  return (
    <>
      <section>
        <Container>
          <div className=" lg:flex flex-col!">
            <div className="lg:w-[20%]">
              <BannerList />
            </div>
            <div className="lg:w-[80%] lg:pt-[40px] lg:pl-[45px]">
              <Slider {...settings}>
                <div>
                  <Image src={BannerImg} />
                </div>
                <div>
                  <Image src={BannerImg} />
                </div>
                <div>
                  <Image src={BannerImg} />
                </div>
                <div>
                  <Image src={BannerImg} />
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
