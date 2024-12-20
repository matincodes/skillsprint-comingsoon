const About = () => {
  return (
    <div className="w-[325px] h-[763px] mt-[217px] flex flex-col gap-[52px] border-solid border-[1px] border-white">
      <div className="w-full h-[473px] flex flex-col gap-[22px] border-solid border-[1px] border-white">
        <h5 className="text-[15px] font-Montserrat text-gray  ">
          About program
        </h5>
        <p className="text-[20px] font-Inter font-medium leading-[44px] text-white">
          Skill Sprint is an intensive tech education program by Thynkcity
          designed to equip you with the skills needed to thrive in today’s
          tech-driven world. Starting with a free one-month foundational course,
          Skill Sprint offers live classes, hands-on projects, and pathways to
          internships and career opportunities.
        </p>
      </div>
      {/* Cards */}
      <div className="w-full h-[238px] border-solid border-[1px] border-white">
        <div className="w-[139px] h-[106px] rounded-lg px-[15px] py-[20px] border-solid border-[1px] border-white">
          <span className="text-white">Free</span> <span  className="text-white">foundational training.</span>
        </div>
      </div>
    </div>
  );
};

export default About;
// border-solid border-[1px] border-white
