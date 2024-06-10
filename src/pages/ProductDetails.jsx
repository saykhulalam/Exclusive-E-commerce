import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import Flex from "../components/Flex";
import detailsOne from "../assets/detailsOne.png";
import detailsTow from "../assets/detailsTow.png";
import detailsThree from "../assets/detailsThree.png";
import detailsFour from "../assets/detailsOne.png";
import Image from "../components/Image";
import detailsBigImage from "../assets/detailsBig.png";
import { Rate } from "antd";
import { FaRegWindowMinimize, FaPlus } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RxUpdate } from "react-icons/rx";
import RelatedItem from "../components/RelatedItem";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  let [Product, setProducat] = useState({});
  let [ProductImages, setProducatImages] = useState([]);
  let [reviews, setReviews] = useState({});

  async function getAllProduct() {
    let data = await axios.get(`https://dummyjson.com/products/${id}`);
    setProducat(data.data);
    setProducatImages(data.data.images);
    setReviews(data.data.reviews);
  }
  console.log(Product);
  useEffect(() => {
    getAllProduct();
  }, []);

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity < 99999 ? prevQuantity + 1 : 99999
    );
  };

  return (
    <section className="xl:pt-[80px] pt-14">
      <Container>
        <Breadcrumb />
        <Flex className="gap-5 mt-[80px] sm:items-stretch items-center xl:flex-row flex-col lg:flex-row lg:items-center">
          <div className="xl:w-[15%] lg:w-[15%]">
            <Flex className="xl:flex-col lg:flex-col flex-row flex-wrap gap-[18px]">
              {ProductImages.map((item) => (
                <Image src={item} />
              ))}
            </Flex>
          </div>
          <div className="xl:w-[50%] lg:w-[50%]">
            <Image src={Product.thumbnail} />
          </div>
          <div className="xl:w-[35%] lg:w-[35%] mt-10 xl:m-0">
            <h2 className="text-[24px] text-black font-semibold font-inter leading-[24px] mb-[16px]">
              {Product.title}
            </h2>
            <div className="flex items-center gap-[10px]">
              <Rate allowHalf disabled value={Product.rating} />
              <h3 className="font-popins font-normal text-[14px] leading-[21px] text-[#000000b1]">
                ({reviews.length})
              </h3>
              <div className="w-[16px] h-[1px] bg-black rotate-90"></div>
              <h4 className="text-[#00FF66] font-popins font-normal leading-[21px] text-[14px]">
                {Product.availabilityStatus}
              </h4>
            </div>
            <h2 className="text-[24px] font-inter font-normal leading-[24px] text-black mt-[16px]">
              $ {Product.price}
            </h2>
            <p className="text-[14px] font-popins leading-[21px] text-black font-normal mt-[24px]">
              {Product.description}
            </p>
            <hr className="mt-[24px]" />
            {Product?.color && (
              <div className="flex mt-[24px]">
                <h4 className="text-[20px] font-inter font-normal text-black">
                  Colours:
                </h4>
                <div className="flex items-center pt-1 gap-[8px] ml-[24px]">
                  <input className="w-[20px] h-[20px]" type="radio" />
                  <input className="w-[20px] h-[20px]" type="radio" />
                </div>
              </div>
            )}
            {Product?.size && (
              <Flex className="mt-[24px]">
                <h2 className="text-[20px] font-inter font-normal text-black mr-[24px]">
                  Size:
                </h2>
                <Flex className="gap-[16px]">
                  <div className="w-[32px] h-[32px] rounded-[4px] border-[1px] text-[14px] flex items-center justify-center font-inter font-normal text-black hover:bg-[#DB4444] hover:text-white duration-300">
                    XS
                  </div>
                  <div className="w-[32px] h-[32px] rounded-[4px] border-[1px] text-[14px] flex items-center justify-center font-inter font-normal text-black hover:bg-[#DB4444] hover:text-white duration-300">
                    S
                  </div>
                  <div className="w-[32px] h-[32px] rounded-[4px] border-[1px] text-[14px] flex items-center justify-center font-inter font-normal text-black hover:bg-[#DB4444] hover:text-white duration-300">
                    M
                  </div>
                  <div className="w-[32px] h-[32px] rounded-[4px] border-[1px] text-[14px] flex items-center justify-center font-inter font-normal text-black hover:bg-[#DB4444] hover:text-white duration-300">
                    L
                  </div>
                  <div className="w-[32px] h-[32px] rounded-[4px] border-[1px] text-[14px] flex items-center justify-center font-inter font-normal text-black hover:bg-[#DB4444] hover:text-white duration-300">
                    XL
                  </div>
                </Flex>
              </Flex>
            )}
            <Flex className="xl:gap-[16px] lg:gap-1 gap-4 mt-[24px] items-center xl:flex-row sm:flex-row flex-col">
              <div className="flex">
                <div
                  className="text-[16px] flex justify-center border-[1px] w-[40px] h-[44px] rounded-l-lg hover:bg-[#DB4444] hover:text-white duration-150  cursor-pointer"
                  onClick={decrementQuantity}
                >
                  <FaRegWindowMinimize className="mt-2" />
                </div>
                <div className="w-[80px] h-[44px] text-[16px] flex justify-center items-center border-[1px] font-popins font-bold">
                  {quantity}
                </div>
                <div
                  className="text-[16px] flex items-center justify-center border-[1px] w-[40px] h-[44px] rounded-r-lg hover:bg-[#DB4444] hover:text-white duration-150 cursor-pointer"
                  onClick={incrementQuantity}
                >
                  <FaPlus />
                </div>
              </div>
              <button className="xl:w-[165px] w-[150px] h-[44px] rounded-lg bg-[#DB4444] font-popins font-medium text-white">
                Buy Now
              </button>
              <div className="w-[40px] h-[40px] rounded-[4px] flex justify-center items-center border-[1px]">
                <FaRegHeart className="text-[20px]" />
              </div>
            </Flex>
            <div className="xl:h-[90px] xl:w-[399px] border-[1px] rounded-t-[4px] py-[24px] pl-[16px] mt-[30px]">
              <div className="flex items-center gap-[16px]">
                <TbTruckDelivery className="text-[40px]" />
                <div>
                  <h3 className="text-[16px] font-popins font-medium leading-[24px] text-black mb-[8px]">
                    Free Delivery
                  </h3>
                  <p className="text-[12px] font-popins font-medium leading-[18px] text-black">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:h-[90px] xl:w-[399px] border-[1px] rounded-b-[4px] py-[24px] pl-[16px] border-t-0">
              <div className="flex items-center gap-[16px]">
                <RxUpdate className="text-[40px]" />
                <div>
                  <h3 className="text-[16px] font-popins font-medium leading-[24px] text-black mb-[8px]">
                    Return Delivery
                  </h3>
                  <p className="text-[12px] font-popins font-medium leading-[18px] text-black">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Flex>
        <RelatedItem />
      </Container>
    </section>
  );
};

export default ProductDetails;
