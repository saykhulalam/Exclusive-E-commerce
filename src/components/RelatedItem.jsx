import React from "react";
import Taitel from "../components/Taitel";
import jacket from "../assets/jacket.png";
import bag from "../assets/bag.png";
import box from "../assets/box.png";
import tabile from "../assets/tabile.png";
import Flex from "./Flex";
import Prodact from "./Prodact";
const RelatedItem = () => {
  return (
    <section className="xl:pt-[140px] pt-20">
      <Taitel subtaitel="Related Item" />

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
    </section>
  );
};

export default RelatedItem;
