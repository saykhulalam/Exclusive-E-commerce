import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="mt-10">
      <Container>
        <Flex className="lg:gap-6 flex-col lg:flex-row md:flex-row sm:flex-row sm:items-center rotet:justify-between">
          <div className="lg:w-[30%] sm:w-[50%] p-[20px] lg:p-[40px] lg:shadow-lg">
            <h2 className="text-[16px] font-popins font-medium text-black leading-[24px] flex items-center gap-[16px] mb-[24px]">
              {" "}
              <div className=" w-[40px] h-[40px] bg-prymari-red rounded-full flex justify-center items-center">
                <IoCallOutline className="w-[20px] text-white" />
              </div>
              Call To Us
            </h2>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              We are available 24/7, 7 days a week.
            </h5>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              Phone: +8801611112222
            </h5>
            <hr className="mb-[32px] mt-8" />
            <h2 className="text-[16px] font-popins font-medium text-black leading-[24px] flex items-center gap-[16px] mb-[24px]">
              {" "}
              <div className=" w-[40px] h-[40px] bg-prymari-red rounded-full flex justify-center items-center">
                <MdOutlineMail className="w-[20px] text-white" />
              </div>
              Write To US
            </h2>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              Fill out our form and we will contact <br /> you within 24 hours.
            </h5>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              Emails: customer@exclusive.com
            </h5>
            <h5 className="text-[14px] font-popins font-normal leading-[21px] text-black mb-[16px]">
              Emails: support@exclusive.com
            </h5>
          </div>
          <div className=" rotet:w-[70%] lg:w-[70%] lg:p-[40px] shadow-lg p-[20px] lg:shadow-lg">
            <Flex className="gap-[16px] rotet:flex-row lg:flex-row flex-col">
              <input
                className="text-black rotet:w-[200px] w-[235px] h-[50px] bg-[#F5F5F5] pl-[16px] text-[16px] font-popins  font-normal leading-[24px] select-none"
                type="text"
                placeholder="Your Name *"
              />
              <input
                className="text-black rotet:w-[200px] w-[235px] h-[50px] bg-[#F5F5F5] pl-[16px] text-[16px] font-popins  font-normal leading-[24px] select-none"
                type="email"
                placeholder="Your Email *"
              />
              <input
                className="text-black rotet:w-[200px] w-[235px] h-[50px] bg-[#F5F5F5] pl-[16px] text-[16px] font-popins  font-normal leading-[24px] select-none"
                type="number"
                placeholder="Your Phone *"
              />
            </Flex>
            <textarea
              className="text-[16px] select-none text-black leading-[24px] font-popins font-normal lg:w-[737px] w-[300px] lg:h-[207px] h-[100px] bg-[#F5F5F5] pt-[13px] pl-[16px] mt-[32px]"
              placeholder="Your Massage"
            ></textarea>
            <div className="lg:ml-[72%] ml-20">
              <button className="w-[215px] h-[56px] bg-prymari-red rounded-[4px] text-[16px] text-white font-popins font-medium leading-[24px] mt-[32px]">
                Send Massage
              </button>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Contact;
