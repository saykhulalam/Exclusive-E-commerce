import React, { useState, useEffect } from "react";
import Flex from "./Flex";
import Timedot from "../assets/timedot.png";
import Image from "./Image";

const ReallTime = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T00:00:00"); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Flex className="items-center gap-[18px] mt-[-10px] lg:pt-[30px]">
        <div>
          <h3 className="text-black text-[12px] font-popins font-medium leading-[18px] mb-[4px]">
            Days
          </h3>
          <h2 className="text-[25px] lg:text-[32px] font-inter font-bold leading-[30px] tracking-[1px]">
            {timeLeft.days.toString().padStart(2, "0")}
          </h2>
        </div>
        <Image className="mt-4" src={Timedot} alt="dotimg" />
        <div>
          <h3 className="text-black text-[12px] font-popins font-medium leading-[18px] mb-[4px]">
            Hours
          </h3>
          <h2 className="text-[25px] lg:text-[32px] font-inter font-bold leading-[30px] tracking-[1px]">
            {timeLeft.hours.toString().padStart(2, "0")}
          </h2>
        </div>
        <Image className="mt-4" src={Timedot} alt="dotimg" />
        <div>
          <h2 className="text-black text-[12px] font-popins font-medium leading-[18px] mb-[4px]">
            Minutes
          </h2>
          <h2 className="text-[25px] lg:text-[32px] font-inter font-bold leading-[30px] tracking-[1px]">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </h2>
        </div>
        <Image className="mt-4" src={Timedot} alt="dotimg" />
        <div>
          <h3 className="text-black text-[12px] font-popins font-medium leading-[18px] mb-[4px]">
            Seconds
          </h3>
          <h2 className="text-[25px] lg:text-[32px] font-inter font-bold leading-[30px] tracking-[1px]">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </h2>
        </div>
      </Flex>
    </>
  );
};

export default ReallTime;
