import React from "react";
import ServiceItem from "./ServiceItem";
import serviceImgOne from "../assets/car.png";
import serviceImgTow from "../assets/hadefone.png";
import serviceImgThree from "../assets/badch.png";
import Container from "./Container";
import Flex from "./Flex";

const Service = () => {
  return (
    <section className=" mt-[130px] lg:mt-[140px]">
      <Container>
        <Flex className=" flex-wrap justify-center gap-8 lg:justify-between gap-3">
          <ServiceItem
            ImageUrl={serviceImgOne}
            Hading="FREE AND FAST DELIVERY"
            Paragraph="Free delivery for all orders over $140"
            alt="car-img"
          />
          <ServiceItem
            ImageUrl={serviceImgTow}
            Hading="24/7 CUSTOMER SERVICE"
            Paragraph="Friendly 24/7 customer support"
            alt="car-img"
          />
          <ServiceItem
            ImageUrl={serviceImgThree}
            Hading="MONEY BACK GUARANTEE"
            Paragraph="We reurn money within 30 days"
            alt="car-img"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Service;
