import React from "react";


const CategoryItem = ({name, iconUrl}) => {
  return (
    <div>
      <div className="lg:w-[150px] w-[150px] h-[145px] border-[1px] border-[#00000049] rounded-[4px] text-center hover:bg-prymari-red hover:text-white group select-none">
        <div className="text-[56px] ml-[55%] translate-x-[-50%] mt-[25px]">
          {iconUrl}
        </div>
        <h2 className="text-[16px] font-popins font-normal leading-[24px] text-black mt-[16px] group-hover:text-white">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default CategoryItem;
