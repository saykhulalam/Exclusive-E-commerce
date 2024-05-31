import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Hading from "../components/Hading";
import List from "../components/List";
import ListItem from "../components/ListItem";
import { TbCategory } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import Color from "../components/Color";
import axios from "axios";
import ShopByProduct from "../components/ShopByProduct";

const Shop = () => {
  let [shopManuShow, setshopManushow] = useState(true);
  
  let [allProduct, setallProducat] = useState([]);

  let [loding, setLoding]= useState(true)
  async function getAllProduct() {
    let data = await axios.get("https://dummyjson.com/products/search?q=phone");
    setallProducat(data.data.products);
    setLoding(false)
  }

  useEffect(() => {
    getAllProduct();
  }, []);


  return (
    <section className=" lg:pt-[80px] pt-10">
      <Container>
        <Breadcrumb />
        <Flex className="lg:flex-row flex-col">
          <div className="lg:w-[20%] relative">
            <div
              onClick={() => setshopManushow(!shopManuShow)}
              className="flex items-center border-[1px] gap-2 text-[15px] font-popins border-gray-500 w-[180px] p-1 rounded-[5px] mt-4 select-none sm:select-none md:select-none hover:bg-black hover:text-white duration-300  relative lg:hidden"
            >
              <TbCategory className="text-[20px]" />
              <h2>Shop Category</h2>
              <FaChevronDown />
            </div>
            <Hading
              Name="Shop by Category"
              className=" lg:mb-[15px] mt-[50px] hidden lg:block"
            />
            <List
              className={`mt-[15px] lg:block lg:bg-transparent bg-black lg:p-0 pl-2 py-4 rounded-lg w-[180px] lg:w-full absolute lg:static z-10 top-12  ${
                shopManuShow ? "hidden" : "block"
              }`}
            >
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Woman’s Fashion
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Men’s Fashion
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Electronics
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Home & Lifestyle
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Medicine
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Sports & Outdoor
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Baby’s & Toys
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Groceries & Pets
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-white lg:text-black lg:mb-[16px] mb-[14px]">
                Health & Beauty
              </ListItem>
            </List>
            <Hading Name="Shop by Color" className=" mt-[40px]" />

            <div className="">
              <Color Name="black" Color=" bg-black" />
              <Color Name="red" Color=" bg-red-500" />
              <Color Name="green" Color=" bg-green-600" />
            </div>
          </div>
          <div className="lg:w-[80%]">
            <ShopByProduct loding={loding} allProduct={allProduct} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
