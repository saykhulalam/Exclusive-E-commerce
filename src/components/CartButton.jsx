import React from "react";

const CartButton = ({ ButtonName, className }) => {
  return (
    <>
      <button
        className={`h-[56px] rounded-[4px] border-[1px] text-[16px] font-popins font-medium leading-[24px] text-black border-black ${className}`}
      >
        {ButtonName}
      </button>
    </>
  );
};

export default CartButton;
