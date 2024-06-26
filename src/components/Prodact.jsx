import React from "react";
import Image from "./Image";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartReducer } from "../slices/productSlice";

const Prodact = ({
  imageurl,
  name,
  prize,
  cross,
  offer,
  rating,
  id,
  productDetails,
}) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleProductDetails = () => {
    navigate(`/productdetails/${id}`);
  };
  let handleAddToCart = () => {
    dispatch(cartReducer({...productDetails, qun: 1}));
    // localStorage.setItem("cart", JSON.stringify(productDetails));
  };
  return (
    <>
      <div className=" w-[270px] rotet:w-[250px] lg:w-[270px] mt-[40px] sm:px-4 md:px-2">
        <div className=" bg-[#F5F5F5] w-full h-[250px] rounded-[4px] flex justify-center items-center relative  group-hover:w-[270px] group overflow-hidden">
          <Image onClick={handleProductDetails} src={imageurl} />
          {offer && (
            <div className="w-[55px] h-[26px] bg-prymari-red flex items-center justify-center rounded-[4px] absolute left-2 top-2">
              <h4 className="text-[12px] leading-[18px] font-popins font-normal text-white">
                {offer}
              </h4>
            </div>
          )}
          <div className=" absolute right-2 top-2">
            <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center mb-[8px]">
              <FaRegHeart className="text-[24px] text-black" />
            </div>
            <div className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center">
              <IoEyeSharp className="text-[27px] text-black" />
            </div>
          </div>
          <button className=" group-hover:bottom-0 duration-300 w-full py-[8px] bg-black absolute flex items-center justify-center bottom-[-100%]">
            <button
              onClick={handleAddToCart}
              className="text-[16px] text-white leading-[24px] font-popins"
            >
              Add To Cart
            </button>
          </button>
        </div>
        <div className=" mt-[16px]">
          <h3 className="text-[16px] font-popins font-medium leading-[24px] text-black mb-[8px]">
            {name}
          </h3>
          <div className="flex gap-[12px] items-center mb-[8px]">
            <h3 className="text-[16px] font-popins font-medium leading-[24px] text-prymari-red">
              {prize}
            </h3>
            <del className="text-[16px] font-popins font-medium leading-[24px] text-black">
              {cross}
            </del>
          </div>
          <div className="flex gap-[8px] items-center">
            <Rate value={rating} disabled />

            <h3 className="text-[14px] font-popins font-semibold leading-[21px]">
              (88)
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prodact;
