import React from "react";
import Container from "./Container";
import Taitel from "../components/Taitel";
import Image from "../components/Image";
import ArrivalImgOne from "../assets/ArrivalImgOne.png";
import ArrivalImgTow from "../assets/ArrivalImgTow.png";
import ArrivalImgThree from "../assets/ArrivalImgThree.png";
import ArrivalImgFour from "../assets/ArrivalImgFour.png";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";
const Arrival = () => {
  return (
    <section className="mt-[100px]">
      <Container>
        <Taitel subtaitel="Featured" taitel="New Arrival" />
        <Flex className="lg:flex-row lg:gap-8 flex-col justify-between gap-[20px] mt-6 lg:mt-[60px]  lg:p-0 md:flex-col">
          <Link>
            <Image src={ArrivalImgOne} alt="image" />
          </Link>
          <div className="flex lg:flex-col  flex-col justify-between">
            <Link>
              <Image className=" mb-[15px]" src={ArrivalImgTow} alt="image" />
            </Link>
            <Flex className="lg:justify-between gap-6  flex-col lg:flex-row md:flex-row sm:flex-row ">
              <Link>
                <Image src={ArrivalImgThree} alt="image" />
              </Link>
              <Link>
                <Image src={ArrivalImgFour} alt="image" />
              </Link>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Arrival;
