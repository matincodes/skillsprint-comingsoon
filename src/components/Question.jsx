import open from "../assets/icons/open.svg";
import close from "../assets/icons/close.svg";

const Question = () => {
  return (
    <div className="w-[80%] h-auto mt-[235px]  flex flex-col gap-[29px] ">
      <h2 className=" xl:text-[29px] text-white text-[16px] font-semibold font-Montserrat">
        Frequently asked questions
      </h2>
      <div className="overflow-x-scroll scrollbar  scrollbar-none ">
        <div className=" xl:w-[1696px] w-[1096px] h-[36px] flex gap-[26px]  ">
          <p className=" xl:text-[20px] cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            General Information
          </p>
          <p className="xl:text-[20px] cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Program Details
          </p>
          <p className="xl:text-[20px] cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Registration and Fees
          </p>
          <p className="xl:text-[20px] cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Career Support
          </p>
          <p className="xl:text-[20px] cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Learning Experience
          </p>
          <p className="xl:text-[20px] cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Technical Requirements
          </p>
          <p className="xl:text-[20px] cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Additional Questions
          </p>
        </div>
      </div>
      {/* Acordiong */}
      <div className="w-full h-auto flex flex-col gap-[32px] ">
        <div className=" cursor-pointer w-full h-auto px-[19px] py-[26px] flex flex-col gap-[45px] rounded-lg bg-lightDark">
          <span className="w-full h-[39px] flex justify-between items-center">
            <h2 className="xl:text-[24px] font-Inter font-medium text-[16px] text-white">
              Is Skill Sprint only for tech skills?
            </h2>
            <img src={close} />
          </span>
          {/* <span className="cursor-default bg-black rounded-sm">
            <p className="text-white px-[19px] py-[26px] font-Inter font-normal text-[16px]">
              No, Skill Sprint also offers non-tech skills like Digital
              Marketing, SEO & Technical Writing, and Project Management to
              ensure participants can pursue diverse career opportunities.
            </p>
          </span> */}
        </div>
        <div className="cursor-pointer w-full h-auto px-[19px] py-[26px] flex flex-col gap-[45px] rounded-lg bg-lightDark">
          <span className="w-full h-[39px] flex justify-between items-center">
            <h2 className="xl:text-[24px] font-Inter font-medium text-[16px] text-white">
              Is Skill Sprint only for tech skills?
            </h2>
            <img src={close} />
          </span>
          {/* <span className="cursor-default bg-black rounded-sm">
            <p className="text-white px-[19px] py-[26px] font-Inter font-normal text-[16px]">
              No, Skill Sprint also offers non-tech skills like Digital
              Marketing, SEO & Technical Writing, and Project Management to
              ensure participants can pursue diverse career opportunities.
            </p>
          </span> */}
        </div>
        <div className="cursor-pointer w-full h-auto px-[19px] py-[26px] flex flex-col gap-[45px] rounded-lg bg-lightDark">
          <span className="w-full h-[39px] flex justify-between items-center">
            <h2 className="xl:text-[24px] font-Inter font-medium text-[16px] text-white">
              Is Skill Sprint only for tech skills?
            </h2>
            <img src={close} />
          </span>
          {/* <span className="cursor-default bg-black rounded-sm">
            <p className="text-white px-[19px] py-[26px] font-Inter font-normal text-[16px]">
              No, Skill Sprint also offers non-tech skills like Digital
              Marketing, SEO & Technical Writing, and Project Management to
              ensure participants can pursue diverse career opportunities.
            </p>
          </span> */}
        </div>
        <div className="cursor-pointer w-full h-auto px-[19px] py-[26px] flex flex-col gap-[45px] rounded-lg bg-lightDark">
          <span className="w-full h-[39px] flex justify-between items-center">
            <h2 className="xl:text-[24px] font-Inter font-medium text-[16px] text-white">
              Is Skill Sprint only for tech skills?
            </h2>
            <img src={open} />
          </span>
          <span className=" cursor-default bg-black rounded-sm">
            <p className="xl:text-[24px] text-white px-[19px] py-[26px] font-Inter font-normal text-[16px]">
              No, Skill Sprint also offers non-tech skills like Digital
              Marketing, SEO & Technical Writing, and Project Management to
              ensure participants can pursue diverse career opportunities.
            </p>
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default Question;

