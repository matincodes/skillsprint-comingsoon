const Hero = () => {
  return (
    <div className="w-full h-[534px] mt-[140px] flex flex-col gap-[101px] border-solid border-[1px] border-black">
      <div className="w-full h-[284px] flex flex-col gap-[50px] border-solid border-[1px] border-black">
        <span className="flex flex-col items-center gap-[16px]">
          <h1 className=" text-center text-[36px] leading-[48px] font-bold font-Montserrat">
            Your Pathway to Tech Excellence
          </h1>
          <p className="w-[329px] text-center font-Inter text-[15px] font-semibold leading-[28px]">
            Kickstart your tech journey with our free one-month foundational
            program, learn the skills to thrive in tech, from coding to AI.
          </p>
        </span>
        <button>Join waitlist Today!</button>
      </div>
    </div>
  );
};

export default Hero;
