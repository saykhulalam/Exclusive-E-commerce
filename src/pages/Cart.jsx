import React, { useState } from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import CartItem from "../components/CartItem";
import List from "../components/List";
import ListItem from "../components/ListItem";
import cartImage from "../assets/cartOne.png";
import CartButton from "../components/CartButton";
import Flex from "../components/Flex";
import { useSelector } from "react-redux";

const Cart = () => {
  let cartdata = useSelector((state) => state.allproduct.cart);

  return (
    <section className="xl:pt-[80px] pt-14">
      <Container>
        <Breadcrumb />
        <div className="xl:mt-[80px] mt-14">
          <List className="flex justify-between h-[72px] border-[1px] items-center xl:px-[40px] px-2">
            <ListItem className="text-[16px] font-popins  font-normal leading-[24px] text-black">
              Product
            </ListItem>
            <ListItem className="text-[16px] font-popins  font-normal leading-[24px] text-black">
              Price
            </ListItem>
            <ListItem className="text-[16px] font-popins  font-normal leading-[24px] text-black">
              Quantity
            </ListItem>
            <ListItem className="text-[16px] font-popins  font-normal leading-[24px] text-black">
              Subtotal
            </ListItem>
          </List>
        </div>

        {cartdata.map((item) => (
          <CartItem
            ImageUrl={cartImage}
            Name="LCD Monitor"
            Price="650"
            Total="650"
          />
        ))}

        <Flex className=" justify-between mt-[24px] sm:flex-row xl:flex-row flex-col gap-4">
          <CartButton className="w-[218px]" ButtonName="Return To Shop" />
          <CartButton className="w-[218px]" ButtonName="Update Cart" />
        </Flex>
        <Flex className="justify-between mt-[80px] xl:flex-row flex-col">
          <Flex className="gap-[16px] xl:flex-row flex-col sm:flex-row">
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
          <div className="xl:w-[470px] h-[324px] border-[1px] border-black rounded-[4px] px-[24px] pt-[25px] mt-4 xl:m-0">
            <h2 className="text-[20px] font-popins font-medium leading-[28px] text-black mb-[24px]">
              Cart Total
            </h2>
            <div className="flex justify-between">
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                Subtotal:
              </h3>
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                $1750
              </h3>
            </div>
            <hr className="mt-[16px]" />
            <div className="flex justify-between mt-[16px]">
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                Shipping:
              </h3>
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                Free
              </h3>
            </div>
            <hr className="mt-[16px]" />
            <div className="flex justify-between mt-[16px]">
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                Total:
              </h3>
              <h3 className="text-[16px] font-popins leading-[24px] text-black font-normal">
                $1750
              </h3>
            </div>
            <hr className="mt-[16px]" />
            <div className=" text-center mt-[16px]">
              <CartButton
                ButtonName="Procees to checkout"
                className="w-[260px] bg-prymari-red text-white border-none"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Cart;
