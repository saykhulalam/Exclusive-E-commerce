import React, { useState } from "react";
import Image from "./Image";
import { RxCrossCircled } from "react-icons/rx";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const CartItem = ({ ImageUrl, Name, Price, Total }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="h-[102px] border-[1px] flex xl:flex-row justify-between items-center px-2 xl:px-[40px] gap-8 py-20">
      <div className="flex items-center lg:gap-[20px] relative lg:flex-row flex-col gap-2">
        <Image src={ImageUrl} />
        <h2 className="text-[16px] font-popins font-normal leading-[24px] text-black">
          {Name}
        </h2>
        <div className=" absolute top-0 left-[-7px]">
          <RxCrossCircled className="text-[18px] bg-prymari-red rounded-full text-white" />
        </div>
      </div>
      <h2 className="text-[16px] font-popins font-normal leading-[24px] text-black xl:pr-[80px]">
        ${Price}
      </h2>
      <div className="gap-[10px] w-[100px] xl:w-[72px] h-[44px] border-[1px] rounded-[4px] xl:mr-[130px] flex items-center justify-center">
        <h2 className="text-[16px] font-popins font-normal leading-[24px] text-black mr-2">
          {quantity}
        </h2>
        <div className="flex flex-col gap-[2px]">
          <FaAngleUp onClick={handleIncrement} className="cursor-pointer" />
          <FaAngleDown onClick={handleDecrement} className="cursor-pointer" />
        </div>
      </div>
      <h2 className="text-[16px] font-popins font-normal leading-[24px] text-black">
        ${Total}
      </h2>
    </div>
  );
};

export default CartItem;
