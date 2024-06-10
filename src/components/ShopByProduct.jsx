import React, { useState } from "react";
import Prodact from "../components/Prodact";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { Spin } from "antd";
import Pagenation from "./Pagenation";

const ShopByProduct = ({ loding }) => {
  let [parPage, setParPage] = useState(6);
  let handleParpage = (e) => {
    setParPage(e.target.value);
  };
  return (
    <div>
      <div className=" lg:flex justify-end mt-4 lg:mt-[50px]">
        <select
          onChange={handleParpage}
          id="countries"
          className="w-[140px] p-1 text-[15px] rounded-lg font-popins  font-normal leading-[21px] border-2"
        >
          <option value="6" selected="">
            6
          </option>
          <option value="12">12</option>
          <option value="24">24</option>
        </select>
      </div>
      <div>
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
          <Pagenation itemsPerPage={parPage} />
        )}
      </div>
    </div>
  );
};

export default ShopByProduct;
