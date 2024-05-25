import React from "react";

const AboutCategory = ({ Count, Paragraph, IconUrl }) => {
  return (
    <div className="w-[270px] h-[230px] border-[2px] rounded-[4px] py-[30px] px-[45px] hover:bg-prymari-red group duration-300 ">
      <div className="w-[58px] h-[58px] bg-black rounded-full flex items-center justify-center border-[10px] border-gray-400 mx-auto group-hover:border-white duration-300">
        <div className="text-[25px] text-white">
          {IconUrl}
        </div>
      </div>
      <h2 className="text-[32px] font-bold font-inter leading-[30px] tracking-[1px] text-black mt-[24px] mb-[12px] text-center group-hover:text-white duration-300">
        {Count}
      </h2>
      <p className="text-[16px] leading-[24px] font-popins font-normal to-black text-center group-hover:text-white duration-300">
        {Paragraph}
      </p>
    </div>
  );
};

export default AboutCategory;
