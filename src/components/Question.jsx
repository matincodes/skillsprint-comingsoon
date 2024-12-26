import { useReducer } from "react";
import GeneralInformation from "../ui/generalInformation";
import ProgramDetails from "../ui/ProgramDetails";

const currentState = {
  generalInformation: true,
  programDetails: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "generalInformation":
      return { ...state, generalInformation: true, programDetails: false };
    case "programDetails":
      return { ...state, programDetails: true, generalInformation: false };
    default:
      return state;
  }
};

const Question = () => {
  const [{ generalInformation, programDetails }, dispatch] = useReducer(
    reducer,
    currentState
  );

  return (
    <div className="w-[80%] h-auto mt-[235px]  flex flex-col gap-[29px] ">
      <h2 className=" text-white text-[16px] font-semibold font-Montserrat">
        Frequently asked questions
      </h2>

      <div className="overflow-x-scroll scrollbar  scrollbar-none ">
        <div className=" xl:w-[1696px] w-[1096px] h-[36px] flex gap-[26px]  ">
          <button
            onClick={() => dispatch({ type: "generalInformation" })}
            className="  cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center"
          >
            General Information
          </button>
          <button
            onClick={() => dispatch({ type: "programDetails" })}
            className=" cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center"
          >
            Program Details
          </button>
          <button className=" cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Registration and Fees
          </button>
          <button className=" cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Career Support
          </button>
          <button className=" cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Learning Experience
          </button>
          <button className=" cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Technical Requirements
          </button>
          <button className=" cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center">
            Additional Questions
          </button>
        </div>
      </div>
      {/* Acordiong */}
      {generalInformation && <GeneralInformation />}
      {programDetails && <ProgramDetails />}
    </div>
  );
};

export default Question;
