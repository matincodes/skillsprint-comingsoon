import { useReducer } from "react";
import GeneralInformation from "../ui/generalInformation";
import ProgramDetails from "../ui/ProgramDetails";
import RegistrationandFees from "../ui/registrationandFees";
import CareerSupport from "../ui/CareerSupport";

const currentState = {
  generalInformation: true,
  programDetails: false,
  registrationandFees: false,
  careerSupport: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "generalInformation":
      return {
        ...state,
        generalInformation: true,
        programDetails: false,
        careerSupport: false,
        registrationandFees: false,
      };
    case "programDetails":
      return {
        ...state,
        programDetails: true,
        generalInformation: false,
        careerSupport: false,
        registrationandFees: false,
      };
    case "registrationandFees":
      return {
        ...state,
        registrationandFees: true,
        programDetails: false,
        generalInformation: false,
        careerSupport: false,
      };
    case "careerSupport":
      return {
        ...state,
        careerSupport: true,
        registrationandFees: false,
        programDetails: false,
        generalInformation: false,
      };
    default:
      return state;
  }
};

const Question = () => {
  const [
    { registrationandFees, careerSupport, generalInformation, programDetails },
    dispatch,
  ] = useReducer(reducer, currentState);

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
          <button
            onClick={() => dispatch({ type: "registrationandFees" })}
            className=" cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center"
          >
            Registration and Fees
          </button>
          <button
            onClick={() => dispatch({ type: "careerSupport" })}
            className=" cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center"
          >
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
      {registrationandFees && <RegistrationandFees />}
      {careerSupport && <CareerSupport />}
    </div>
  );
};

export default Question;
