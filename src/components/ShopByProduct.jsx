import React from "react";
import Prodact from "../components/Prodact";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { Spin } from "antd";

const ShopByProduct = ({ allProduct, loding }) => {
  console.log(allProduct);
  return (
    <div>
      <div className=" lg:flex justify-end mt-4 lg:mt-[50px]">
        <select
          id="countries"
          className="w-[140px] p-1 text-[15px] rounded-lg font-popins  font-normal leading-[21px] border-2"
        >
          <option selected="">6</option>
          <option value="US">12</option>
          <option value="US">24</option>
          <option value="US">40</option>
        </select>
      </div>
      <Flex className=" pt-5 flex-wrap justify-between lg:flex-row flex-col items-center sm:flex-row ">
        {loding ? (
          <Flex className=" flex-wrap justify-between lg:flex-row flex-col items-center sm:flex-row  gap-4  ">
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
            <div className=" lg:w-[240px] w-[270px] h-[350px] flex justify-center items-center">
              <Spin tip="Loading" size="large"></Spin>
            </div>
          </Flex>
        ) : (
          allProduct.map((item) => (
            <Prodact
              imageurl={item.thumbnail}
              prize={`$ ${Math.floor(
                item.price - (item.discountPercentage / 100) * item.price
              )}`}
              cross={`$ ${Math.floor(item.price)}`}
              name={item.brand}
              offer={`${Math.floor(item.discountPercentage)} %`}
              rating={item.rating}
            />
          ))
        )}
      </Flex>
      <List className=" flex gap-[10px] mt-[45px]">
        <ListItem className=" text-[16px] font-popins leading-[24px] text-white w-[56px] h-[27px] bg-black flex items-center justify-center">
          1
        </ListItem>
        <ListItem className=" text-[16px] font-popins leading-[24px] text-white w-[56px] h-[27px] bg-black flex items-center justify-center">
          2
        </ListItem>
        <ListItem className=" text-[16px] font-popins leading-[24px] text-white w-[56px] h-[27px] bg-black flex items-center justify-center">
          3
        </ListItem>
        <ListItem className=" text-[16px] font-popins leading-[24px] text-white w-[56px] h-[27px] bg-black flex items-center justify-center">
          4
        </ListItem>
      </List>
    </div>
  );
};

export default ShopByProduct;
