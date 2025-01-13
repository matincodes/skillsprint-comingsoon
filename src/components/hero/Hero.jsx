import arrow from "../../assets/icons/arrow.svg";
import Animation from "./Animation";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div id="Home" className="w-full h-auto mt-[140px] flex flex-col gap-[101px] ">
      {/* Hero contents */}
      <div className="w-full h-[284px] flex flex-col items-center gap-[50px] ">
        <span className=" flex flex-col items-center gap-[16px]">
          <h1 className=" xl:w-[450px]    text-white text-center text-[36px] leading-[48px] font-bold font-Montserrat">
            Your Pathway to Tech Excellence
          </h1>
          <p className=" xl:w-[70%] text-gray text-center font-Inter  text-[15px] font-semibold leading-[28px]">
            Embark on a transformative tech journey with our free one-month foundational program, where you&apos;ll gain practical skills in everything from coding fundamentals to the exciting world of AI, setting the stage for a thriving career in the digital age.
          </p>
        </span>
        <Link 
          to="register"
          smooth={true}
          duration={500}
          className="w-[189px] h-[38px] rounded-[30px]  bg-goldenBrown font-Inter font-bold text-[12px] leading-[34px] text-white flex items-center justify-center gap-1 cursor-pointer">
          <span>Join waitlist Today!</span> <img src={arrow} />
        </Link>
      </div>
      {/* Animation container */}
      <Animation />
    </div>
  );
};

export default Hero;

