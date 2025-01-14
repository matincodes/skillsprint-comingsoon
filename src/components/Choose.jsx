import video from "../assets/icons/video.svg";
import task from "../assets/icons/task.svg";
import mentor from "../assets/icons/mentor.svg";
import mentoring from "../assets/icons/mentoring.svg";
import slow from "../assets/icons//slow.svg";
import arrow from "../assets/icons/arrow.svg";
import { Link } from "react-scroll";

const Choose = () => {
  return (
    <div id="Program highlights" className="w-[80%] h-auto mt-[217px] flex flex-col gap-[29px] ">
      <h2 className="font-bold text-[16px] md:text-[29px] text-white font-Montserrat">
        Why Choose Skill Sprint?
      </h2>
      <div className="w-full h-auto flex flex-col items-center gap-[74px] ">
        {/* Cards container */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-[32px] w-full h-auto ">
          <div className="w-auto h-auto rounded-lg py-[26px] px-[19px] flex flex-col gap-[39px] border-solid border-[1px] border-gray bg-semiBlack">
            <img className="w-[24px] h-[24px]" src={video} />
            <span>
              <h2 className="text-white text-[20px] font-Inter leading-[36px] font-bold">
                Live Interactive Classes
              </h2>
              <p className="text-gray text-[20px] font-Inter font-medium leadding-[32px]">
                Engage with instructors and peers in real-time.
              </p>
            </span>
          </div>
          <div className="w-auto h-auto rounded-lg py-[26px] px-[19px] flex flex-col gap-[39px] border-solid border-[1px] border-gray bg-semiBlack">
            <img className="w-[24px] h-[24px]" src={task} />
            <span>
              <h2 className="text-white text-[20px] font-Inter leading-[36px] font-bold">
                Practical Projects
              </h2>
              <p className="text-gray text-[20px] font-Inter font-medium leadding-[32px]">
                Work on assignments to build real-world skills.
              </p>
            </span>
          </div>
          <div className="w-auto h-auto rounded-lg py-[26px] px-[19px] flex flex-col gap-[39px] border-solid border-[1px] border-gray bg-semiBlack">
            <img className="w-[24px] h-[24px]" src={mentor} />
            <span>
              <h2 className="text-white text-[20px] font-Inter leading-[36px] font-bold">
                Mentorship
              </h2>
              <p className="text-gray text-[20px] font-Inter font-medium leadding-[32px]">
                Gain guidance from industry professionals.
              </p>
            </span>
          </div>
          <div className="w-auto h-auto md:col-span-2  rounded-lg py-[26px] px-[19px] flex flex-col gap-[39px] border-solid border-[1px] border-gray bg-semiBlack">
            <img className="w-[24px] h-[24px]" src={mentoring} />
            <span>
              <h2 className="text-white text-[20px] font-Inter leading-[36px] font-bold">
                Career Support
              </h2>
              <p className="text-gray text-[20px] font-Inter font-medium leadding-[32px]">
                LinkedIn optimization, resume building, interview prep, and job
                placements.
              </p>
            </span>
          </div>
          <div id="Waitlist" className="w-auto h-auto   rounded-lg py-[26px] px-[19px] flex flex-col gap-[39px] border-solid border-[1px] border-gray bg-semiBlack">
            <img className="w-[24px] h-[24px]" src={slow} />
            <span>
              <h2 className="text-white text-[20px] font-Inter leading-[36px] font-bold">
                Flexibility
              </h2>
              <p className="text-gray text-[20px] font-Inter font-medium leadding-[32px]">
                Recorded sessions and structured schedules for effective
                learning.
              </p>
            </span>
          </div>
        </div>
        <Link  
            to="register"
            smooth={true}
            duration={500}
            className="w-[189px] h-[38px] rounded-[30px]  bg-goldenBrown font-Inter font-bold text-[12px] leading-[34px] text-white flex items-center justify-center gap-1 cursor-pointer">
          <span>Join waitlist Today!</span> <img src={arrow} />
        </Link>
      </div>
    </div>
  );
};

export default Choose;

