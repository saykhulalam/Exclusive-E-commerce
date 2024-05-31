import React from "react";

const Color = ({ Name, Color }) => {
  return (
    <ul className="mt-[15px]">
      <li className="flex items-center gap-[10px] mb-[18px]">
        {" "}
        <div className={`w-[11px] h-[11px] rounded-full ${Color}`}></div>
        <h3 className=" text-[#767676] font-popins font-normal leading-[30px]">
          {Name}
        </h3>
      </li>
    </ul>
  );
};

export default Color;
