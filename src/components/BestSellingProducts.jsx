import React from "react";
import Container from "./Container";
import Taitel from "./Taitel";
import SellingProductsBtn from "./SellingProductsBtn";
import Flex from "./Flex";
import Prodact from "./Prodact";
import jacket from "../assets/jacket.png";
import bag from "../assets/bag.png";
import box from "../assets/box.png";
import tabile from "../assets/tabile.png";
import { Link } from "react-router-dom";

const BestSellingProducts = () => {
  return (
    <section className="mb-11 lg:mb-[140px]">
      <Container>
        <Flex className=" justify-between items-end">
          <Taitel
            className=""
            subtaitel="This Month"
            taitel="Best Selling Products"
          />
          <Link to="/shop">
            <SellingProductsBtn />
          </Link>
        </Flex>
        <Flex className=" justify-between flex-row flex-wrap sm:flex-row ">
          <Prodact
            imageurl={jacket}
            prize="$260"
            cross="$$360"
            name="The north coat"
          />
          <Prodact
            imageurl={bag}
            prize="$960"
            cross="$1160"
            name="Gucci duffle bag"
          />
          <Prodact
            imageurl={box}
            prize="$160"
            cross="$170"
            name="RGB liquid CPU Cooler"
          />
          <Prodact
            imageurl={tabile}
            prize="$360"
            cross="$932"
            name="Small BookSelf"
          />
        </Flex>
      </Container>
    </section>
  );
};

export default BestSellingProducts;
