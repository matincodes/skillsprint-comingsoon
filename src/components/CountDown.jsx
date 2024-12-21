const CountDown = () => {
  return (
    <div className="xl:gap-[52px] w-[80%] h-auto flex flex-col gap-[29px] justify-between mt-[217px] ">
      <h2 className="xl:text-[29px] font-Montserrat text-[16px] font-bold text-white text-center">
        The Countdown to Your Future Starts Now!
      </h2>
      <div className="w-full h-auto flex justify-between  ">
        <div className="flex flex-col items-center  ">
          <span className="flex  gap-[4px]">
            <p className=" xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[28px] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              3
            </p>
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[28px] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              7
            </p>
          </span>
          <p className="xl:text-[20px] text-white font-Inter font-semibold text-[10px]">Days</p>
        </div>
        <p className="xl:text-[96px] font-Inter text-[16px] mt-3 font-semibold text-white">:</p>
        <div className="flex flex-col items-center  ">
            <span className="flex  gap-[4px]">
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[28px] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              0
            </p>
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[28px] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              8
            </p>
            </span>
            <p className="xl:text-[20px] text-white font-Inter font-semibold text-[10px]">Hours</p>
          </div>
          <p className="xl:text-[96px] font-Inter text-[16px]  mt-3 font-semibold text-white">:</p>
          <div className="flex flex-col items-center  ">
            <span className="flex  gap-[4px]">
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[28px] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              5
            </p>
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[28px] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              6
            </p>
            </span>
            <p className="xl:text-[20px] text-white font-Inter font-semibold text-[10px]">Minutes</p>
          </div>
          <p className="xl:text-[96px] font-Inter text-[16px]  mt-3 font-semibold text-white">:</p>
          <div className="flex flex-col items-center  ">
            <span className="flex  gap-[4px]">
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[28px] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              2
            </p>
            <p className="xl:text-[96px] xl:w-[115px] xl:h-[177px] xl:justify-center w-[28px] h-[41px] flex items-center text-white text-[24px] font-bold font-Inter bg-darkGray px-[6px] py-[12px] rounded-sm">
              2
            </p>
            </span>
            <p className="xl:text-[20px] text-white font-Inter font-semibold text-[10px]">Seconds</p>
          </div>
      </div>
    </div>
  );
};

export default CountDown;
//border-solid border-[1px] border-white
