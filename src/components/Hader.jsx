import { Link } from "react-router-dom";
import Container from "./Container";
import React from "react";

const Hader = () => {
  return (
    <header className="bg-black">
      <Container>
        <div className=" py-[15px] relative">
          <h2 className=" w-[75%] lg:w-full text-center lg:text-[14px] text-[12px] text-[#FAFAFA] leading-[21px] pl-[6px] lg:p-0 font-normal font-popins">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            link lin{" "}
            <Link to="/Shop" className="ml-[8px] text-[14px] underline">
              ShopNow
            </Link>{" "}
          </h2>
          <form className="max-w-sm mx-auto absolute right-0 top-3">
            <select
              id="countries"
              className="w-[78px] text-[14px] font-popins bg-black text-[#FAFAFA] font-normal leading-[21px]"
            >
              <option selected="">English</option>
              <option value="US">Ban</option>
            </select>
          </form>
        </div>
      </Container>
    </header>
  );
};

export default Hader;
