import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import Flex from "../components/Flex";
import Image from "../components/Image";
import CheckImage from "../assets/cartTow.png";
import CartButton from "../components/CartButton";
import bankImageOne from "../assets/Bkash.png";
import bankImageTow from "../assets/Visa.png";
import bankImageThree from "../assets/Mastercard.png";
import bankImageFour from "../assets/Nagad.png";

const CheckOut = () => {
  return (
    <section className="xl:pt-[96px] pt-10">
      <Container>
        <Breadcrumb />
        <Flex className="mt-[80px] xl:justify-between xl:flex-row flex-col lg:flex-row">
          <div>
            <h2 className="text-[36px] font-inter font-medium text-black leading-[30px] tracking-[1px] mb-[48px]">
              Billing Details
            </h2>
            <div className="">
              <div className="mb-[32px]">
                <h2 className="text-[16px] font-normal leading-[24px] font-popins mb-[8px]">
                  First Name*
                </h2>
                <input
                  className=" sm:w-[470px] lg:w-[390px] xl:w-[470px] w-[300px] h-[50px] bg-[#F5F5F5] rounded-[4px] text-[16px] font-popins pl-5"
                  type="text"
                />
              </div>
              <div className="mb-[32px]">
                <h2 className="text-[16px] font-normal leading-[24px] font-popins mb-[8px]">
                  Company Name
                </h2>
                <input
                  className=" sm:w-[470px] lg:w-[390px] xl:w-[470px] w-[300px] h-[50px] bg-[#F5F5F5] rounded-[4px] text-[16px] font-popins pl-5"
                  type="text"
                />
              </div>
              <div className="mb-[32px]">
                <h2 className="text-[16px] font-normal leading-[24px] font-popins mb-[8px]">
                  Street Address*
                </h2>
                <input
                  className=" sm:w-[470px] lg:w-[390px] xl:w-[470px] w-[300px] h-[50px] bg-[#F5F5F5] rounded-[4px] text-[16px] font-popins pl-5"
                  type="text"
                />
              </div>
              <div className="mb-[32px]">
                <h2 className="text-[16px] font-normal leading-[24px] font-popins mb-[8px]">
                  Apartment, floor, etc. (optional)
                </h2>
                <input
                  className=" sm:w-[470px] lg:w-[390px] xl:w-[470px] w-[300px] h-[50px] bg-[#F5F5F5] rounded-[4px] text-[16px] font-popins pl-5"
                  type="text"
                />
              </div>
              <div className="mb-[32px]">
                <h2 className="text-[16px] font-normal leading-[24px] font-popins mb-[8px]">
                  Town/City*
                </h2>
                <input
                  className=" sm:w-[470px] lg:w-[390px] xl:w-[470px] w-[300px] h-[50px] bg-[#F5F5F5] rounded-[4px] text-[16px] font-popins pl-5"
                  type="text"
                />
              </div>
              <div className="mb-[32px]">
                <h2 className="text-[16px] font-normal leading-[24px] font-popins mb-[8px]">
                  Phone Number*
                </h2>
                <input
                  className=" sm:w-[470px] lg:w-[390px] xl:w-[470px] w-[300px] h-[50px] bg-[#F5F5F5] rounded-[4px] text-[16px] font-popins pl-5"
                  type="number"
                />
              </div>
              <div className="mb-[32px]">
                <h2 className="text-[16px] font-normal leading-[24px] font-popins mb-[8px]">
                  Email Address*
                </h2>
                <input
                  className=" sm:w-[470px] lg:w-[390px] xl:w-[470px] w-[300px] h-[50px] bg-[#F5F5F5] rounded-[4px] text-[16px] font-popins pl-5"
                  type="email"
                />
              </div>
              <div className="flex gap-[16px] mb-6 items-center">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="w-[24px] h-[24px] rounded-[4px]"
                    required=""
                  />
                </div>
                <h3 className="text-[16px] font-popins font-normal leading-[24px] text-black">
                  Save this information for faster check-out next time
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[425px] mt-10 xl:mt-28">
            <div className="flex justify-between items-center mb-[32px]">
              <div className=" flex items-center gap-[24px]">
                <Image src={CheckImage} />
                <h2 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                  LCD Monitor
                </h2>
              </div>
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                $650
              </h3>
            </div>
            <div className="flex justify-between items-center mb-[32px]">
              <div className=" flex items-center gap-[24px]">
                <Image src={CheckImage} />
                <h2 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                  LCD Monitor
                </h2>
              </div>
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                $650
              </h3>
            </div>
            <div className="flex xl:justify-between gap-[200px] sm:justify-between">
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                Subtotal:
              </h3>
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                $1750
              </h3>
            </div>
            <hr className="mt-[16px]" />
            <div className="flex xl:justify-between gap-[200px] sm:justify-between mt-[16px]">
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                Shipping:
              </h3>
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                Free
              </h3>
            </div>
            <hr className="mt-[16px]" />
            <div className="flex xl:justify-between gap-[230px] sm:justify-between mt-[16px]">
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                Total:
              </h3>
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                $1750
              </h3>
            </div>
            <div className="flex justify-between sm:justify-between mt-[32px] xl:flex-row flex-col gap-5 md:flex-row sm:flex-row">
              <div className="flex items-center gap-[16px]">
                <input className="w-[24px] h-[24px]" type="radio" />
                <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                  Cash on delivery
                </h3>
              </div>
              <div className="flex gap-[8px] items-center">
                <Image src={bankImageOne} />
                <Image src={bankImageTow} />
                <Image src={bankImageThree} />
                <Image src={bankImageFour} />
              </div>
            </div>
            <Flex className="gap-[16px] xl:flex-row flex-col mt-[32px] md:flex-row sm:flex-row">
              <input
                placeholder="Coupon Code"
                className="text-[16px] font-popins font-normal border-[1px] w-[300px] h-[56px] pl-[24px] border-black"
                type="text"
              />
              <CartButton
                className="w-[218px] bg-prymari-red text-white border-none"
                ButtonName="Apply Coupon"
              />
            </Flex>
            <CartButton
              className="w-[218px] bg-prymari-red text-white border-none mt-[32px]"
              ButtonName="Place Order"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CheckOut;
