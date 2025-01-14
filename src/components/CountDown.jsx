import { useCallback, useEffect, useState } from "react";
import propTypes from "prop-types";

const CountDown = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [calculateTimeLeft]);

  // Split each time unit into separate digit variables
  const daysDigits = String(timeLeft.days || 0)
    .padStart(2, "0")
    .split("");
  const hoursDigits = String(timeLeft.hours || 0)
    .padStart(2, "0")
    .split("");
  const minutesDigits = String(timeLeft.minutes || 0)
    .padStart(2, "0")
    .split("");
  const secondsDigits = String(timeLeft.seconds || 0)
    .padStart(2, "0")
    .split("");

  // Destructure digits into individual variables
  const [daysTens, daysOnes] = daysDigits;
  const [hoursTens, hoursOnes] = hoursDigits;
  const [minutesTens, minutesOnes] = minutesDigits;
  const [secondsTens, secondsOnes] = secondsDigits;
  return (
    <div className="xl:gap-[52px] w-full md:w-[80%] h-auto flex flex-col gap-[29px] justify-between mt-[217px] ">
      <h2 className=" font-Montserrat text-[16px] font-bold text-white text-center px-10">
        The Countdown to Your Future Starts Now!
      </h2>
      <div className="w-full h-auto flex justify-center gap-2  ">
        <div className="flex flex-col items-center  ">
          <span className="flex  gap-[4px]">
            <p className=" xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[100%] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              {daysTens}
            </p>
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[100%] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              {daysOnes}
            </p>
          </span>
          <p className="xl:text-[20px] text-white font-Inter font-semibold text-[10px]">
            Days
          </p>
        </div>
        <p className="xl:text-[96px] font-Inter text-[16px] mt-3 font-semibold text-white">
          :
        </p>
        <div className="flex flex-col items-center  ">
          <span className="flex  gap-[4px]">
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[100%] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              {hoursTens}
            </p>
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[100%] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              {hoursOnes}
            </p>
          </span>
          <p className="xl:text-[20px] text-white font-Inter font-semibold text-[10px]">
            Hours
          </p>
        </div>
        <p className="xl:text-[96px] font-Inter text-[16px]  mt-3 font-semibold text-white">
          :
        </p>
        <div className="flex flex-col items-center  ">
          <span className="flex  gap-[4px]">
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[100%] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              {minutesTens}
            </p>
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[100%] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              {minutesOnes}
            </p>
          </span>
          <p className="xl:text-[20px] text-white font-Inter font-semibold text-[10px]">
            Minutes
          </p>
        </div>
        <p className="xl:text-[96px] font-Inter text-[16px]  mt-3 font-semibold text-white">
          :
        </p>
        <div className="flex flex-col items-center  ">
          <span className="flex  gap-[4px]">
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[100%] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              {secondsTens}
            </p>
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[100%] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              {secondsOnes}
            </p>
          </span>
          <p className="xl:text-[20px] text-white font-Inter font-semibold text-[10px]">
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

CountDown.propTypes = {
  targetDate: propTypes.string,
};
export default CountDown;
