import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import accountimg from "../assets/accountimg.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <section>
      <Container>
        <Flex className="md:flex-row lg:flex-row flex-col justify-between lg:gap-20 md:gap-7 gap-10 items-center">
          <div>
            <Image src={accountimg} />
          </div>
          <div className="lg:w-[371px] w-[300px] md:mt-8">
            <form action="">
              <h2 className="lg:text-[36px] text-[30px] font-medium font-inter text-black leading-[30px] tracking-[2px] mb-[24px]">
                Create an account
              </h2>
              <h5 className="text-[16px] font-popins font-normal text-black leading-[24px] mb-4">
                Enter your details below
              </h5>
              <div className="relative h-11 lg:w-[370px] min-w-[200px] mb-[40px]">
                <input
                  placeholder="Name"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-[16px] font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-[#000000] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div className="relative h-11 lg:w-[370px] min-w-[200px] mb-[40px]">
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-[16px] font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-[#000000] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email or Phone Number
                </label>
              </div>
              <div className="relative h-11 lg:w-[370px] min-w-[200px] mb-[40px]">
                <input
                  type="password"
                  placeholder="Password"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-[16px] font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
                <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-[#000000] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </form>
            <button className="lg:w-[371px] w-[300px] h-[56px] bg-prymari-red rounded-[4px] text-[16px] font-medium leading-[24px] font-popins text-white mb-[16px]">
              Create Account
            </button>
            <button className=" relative lg:w-[371px] w-[300px] h-[56px] bg-transparent rounded-[4px] text-[16px] font-medium leading-[24px] font-popins text-black mb-[16px] border-[2px] border-[#00000069] ">
              <FcGoogle className="text-[24px] absolute lg:left-16 left-8" /> Sign up with
              Google
            </button>
            <div className="flex gap-[16px] lg:ml-11 mt-[20px] lg:mt-[34px]">
              <h5 className="text-[18px] font-popins font-normal leading-[24px] text-black">
                Already have account?
              </h5>
              <Link className="text-[18px] font-popins font-medium leading-[24px] text-black underline">
                Log in
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CreateAccount;
