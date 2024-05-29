import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Hading from "../components/Hading";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Prodact from "../components/Prodact";
import monitor from "../assets/monitor.png";
const Shop = () => {
  return (
    <div>
      <Container>
        <Breadcrumb />
        <Flex className='lg:flex-row flex-col'>
          <div className="lg:w-[20%]">
            <Hading Name="Shop by Category" className=" mb-[15px] mt-[50px]" />
            <List className=" mt-[15px]">
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Woman’s Fashion
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Men’s Fashion
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Electronics
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Home & Lifestyle
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Medicine
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Sports & Outdoor
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Baby’s & Toys
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Groceries & Pets
              </ListItem>
              <ListItem className=" text-[16px] font-normal font-popins leading-[24px] text-black mb-[16px]">
                Health & Beauty
              </ListItem>
            </List>
          </div>
          <div className="lg:w-[80%]">
            <div className=" flex justify-end mt-[50px]">
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
            <Flex className=" flex-wrap justify-between lg:flex-row flex-col items-center sm:flex-row rotet:justify-normal">
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
              <Prodact
                imageurl={monitor}
                prize="$120"
                cross="$160"
                name="HAVIT HV-G92 Gamepad"
                offer="-40%"
              />
            </Flex>
            <List className=' flex gap-[10px] mt-[45px]'>
              <ListItem className=' text-[16px] font-popins leading-[24px] text-white w-[56px] h-[27px] bg-black flex items-center justify-center'>1</ListItem>
              <ListItem className=' text-[16px] font-popins leading-[24px] text-white w-[56px] h-[27px] bg-black flex items-center justify-center'>2</ListItem>
              <ListItem className=' text-[16px] font-popins leading-[24px] text-white w-[56px] h-[27px] bg-black flex items-center justify-center'>3</ListItem>
              <ListItem className=' text-[16px] font-popins leading-[24px] text-white w-[56px] h-[27px] bg-black flex items-center justify-center'>4</ListItem>
            </List>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
