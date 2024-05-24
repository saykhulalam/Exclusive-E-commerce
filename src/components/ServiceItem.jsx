import React from "react";
import Image from "./Image";

const ServiceItem = ({ ImageUrl, alt, Hading, Paragraph }) => {
  return (
    <div>
      <div className="w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center border-[10px] border-gray-400 mx-auto">
        <Image className="w-[31px]" src={ImageUrl} alt={alt} />
      </div>
      <h2 className="mt-[24px] text-[15px] lg:text-[20px] font-popins font-semibold leading-[28px] text-black mb-[8px] text-center">
        {Hading}
      </h2>
      <h4 className="text-[10px] lg:text-[14px] font-normal font-popins leading-[21px] text-black text-center">
        {Paragraph}
      </h4>
    </div>
  );
};

export default ServiceItem;
