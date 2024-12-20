const About = () => {
  return (
    <div className="w-[80%] h-auto mt-[217px] flex flex-col gap-[52px] ">
      <div className="w-full h-auto flex flex-col gap-[22px] ">
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
      <div className="w-full h-auto grid grid-cols-2 md:flex md:justify-between  gap-[26px] ">
        <div className="w-auto h-auto   rounded-lg px-[15px] py-[20px] border-solid border-[1px] border-white">
          <span className="text-white font-bold text-[16px] leading-[22px]">
            Free
          </span>{" "}
          <span className="text-gray text-[16px] font-semibold leading-[22px]">
            foundational training.
          </span>
        </div>
        <div className="w-auto h-auto   rounded-lg px-[15px] py-[20px] border-solid border-[1px] border-white">
          <span className="text-gray text-[16px] font-semibold leading-[22px]">
            Career
          </span>{" "}
          <span className="text-white font-bold text-[16px] leading-[22px]">
            mentorship
          </span>{" "}
          <span className="text-gray text-[16px] font-semibold leading-[22px]">
            and support.
          </span>
        </div>
        <div className="w-auto h-auto   rounded-lg px-[15px] py-[20px] border-solid border-[1px] border-white">
          <span className="text-white font-bold text-[16px] leading-[22px]">
            Live classes
          </span>{" "}
          <span className="text-gray text-[16px] font-semibold leading-[22px]">
            and hands on
          </span>{" "}
          <span className="text-white font-bold text-[16px] leading-[22px]">
            projects
          </span>
        </div>
        <div className="w-auto h-auto  rounded-lg px-[15px] py-[20px] border-solid border-[1px] border-white">
          <span className="text-gray text-[16px] font-semibold leading-[22px]">
            Access to
          </span>
          <br />
          <span className="text-white font-bold text-[16px] leading-[22px]">
            internships{" "}
          </span>{" "}
          <span className="text-white font-bold text-[16px] leading-[22px]">
            job
          </span>
          <span className="text-gray text-[16px] font-semibold leading-[22px]">
            placements
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
