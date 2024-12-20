import arrow from "../../assets/icons/arrow.svg";
import Animation from "./Animation";
const Hero = () => {
  return (
    <div className="w-full h-[534px] mt-[140px] flex flex-col gap-[101px] ">
      {/* Hero contents */}
      <div className="w-full h-[284px] flex flex-col items-center gap-[50px] ">
        <span className="flex flex-col items-center gap-[16px]">
          <h1 className="text-white text-center text-[36px] leading-[48px] font-bold font-Montserrat">
            Your Pathway to Tech Excellence
          </h1>
          <p className="w-[329px] text-gray text-center font-Inter text-[15px] font-semibold leading-[28px]">
            Kickstart your tech journey with our free one-month foundational
            program, learn the skills to thrive in tech, from coding to AI.
          </p>
        </span>
        <button className="w-[189px] h-[38px] rounded-[30px]  bg-orange font-Inter font-bold text-[12px] leading-[34px] text-white flex items-center justify-center gap-1">
          <span>Join waitlist Today!</span> <img src={arrow} />
        </button>
      </div>
      {/* Animation container */}
      <Animation />
    </div>
  );
};

export default Hero;
