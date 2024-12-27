import { useReducer } from "react";
import GeneralInformation from "../ui/generalInformation";
import ProgramDetails from "../ui/ProgramDetails";
import RegistrationandFees from "../ui/registrationandFees";
import CareerSupport from "../ui/CareerSupport";
import LearningExperience from "../ui/LearningExperience";
import TechnicalRequirements from "../ui/technicalRequirements";
import AdditionalQuestions from "../ui/AdditionalQuestions";

const currentState = {
  generalInformation: true,
  programDetails: false,
  registrationandFees: false,
  careerSupport: false,
  learningExperience: false,
  technicalRequirements: false,
  additionalQuestions: false,
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
        learningExperience: false,
        technicalRequirements: false,
        additionalQuestions: false,
      };
    case "programDetails":
      return {
        ...state,
        programDetails: true,
        generalInformation: false,
        careerSupport: false,
        registrationandFees: false,
        learningExperience: false,
        technicalRequirements: false,
        additionalQuestions: false,
      };
    case "registrationandFees":
      return {
        ...state,
        registrationandFees: true,
        programDetails: false,
        generalInformation: false,
        careerSupport: false,
        learningExperience: false,
        technicalRequirements: false,
        additionalQuestions: false,
      };
    case "careerSupport":
      return {
        ...state,
        careerSupport: true,
        registrationandFees: false,
        programDetails: false,
        generalInformation: false,
        learningExperience: false,
        technicalRequirements: false,
        additionalQuestions: false,
      };
    case "learningExperience":
      return {
        ...state,
        careerSupport: false,
        registrationandFees: false,
        programDetails: false,
        generalInformation: false,
        learningExperience: true,
        technicalRequirements: false,
        additionalQuestions: false,
      };
    case "technicalRequirements":
      return {
        ...state,
        careerSupport: false,
        registrationandFees: false,
        programDetails: false,
        generalInformation: false,
        learningExperience: false,
        technicalRequirements: true,
        additionalQuestions: false,
      };
    case "additionalQuestions":
      return {
        ...state,
        careerSupport: false,
        registrationandFees: false,
        programDetails: false,
        generalInformation: false,
        learningExperience: false,
        technicalRequirements: false,
        additionalQuestions: true,
      };
    default:
      return state;
  }
};

const Question = () => {
  const [
    {
      registrationandFees,
      careerSupport,
      generalInformation,
      learningExperience,
      programDetails,
      technicalRequirements,
      additionalQuestions,
    },
    dispatch,
  ] = useReducer(reducer, currentState);

  return (
    <div id="FAQ" className="w-[80%] h-auto mt-[235px]  flex flex-col gap-[29px] ">
      <h2 className=" text-white text-[16px] font-semibold font-Montserrat">
        Frequently asked questions
      </h2>

      <div className="overflow-x-scroll scrollbar  scrollbar-none ">
        <div className=" xl:w-[1696px] w-[1096px] h-[36px] flex gap-[26px]  ">
          <button
            onClick={() => dispatch({ type: "generalInformation" })}
            className={` ${
              generalInformation &&
              "bg-semiBlack rounded-full border-solid border-[1px] border-white"
            }  cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center`}
          >
            General Information
          </button>
          <button
            onClick={() => dispatch({ type: "programDetails" })}
            className={` ${
              programDetails &&
              "bg-semiBlack rounded-full border-solid border-[1px] border-white"
            }  cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center`}
          >
            Program Details
          </button>
          <button
            onClick={() => dispatch({ type: "registrationandFees" })}
            className={` ${
              registrationandFees &&
              "bg-semiBlack rounded-full border-solid border-[1px] border-white"
            }  cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center`}
          >
            Registration and Fees
          </button>
          <button
            onClick={() => dispatch({ type: "careerSupport" })}
            className={` ${
              careerSupport &&
              "bg-semiBlack rounded-full border-solid border-[1px] border-white"
            }  cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center`}
          >
            Career Support
          </button>
          <button
            onClick={() => dispatch({ type: "learningExperience" })}
            className={` ${
              learningExperience &&
              "bg-semiBlack rounded-full border-solid border-[1px] border-white"
            }  cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center`}
          >
            Learning Experience
          </button>
          <button
            onClick={() => dispatch({ type: "technicalRequirements" })}
            className={` ${
              technicalRequirements &&
              "bg-semiBlack rounded-full border-solid border-[1px] border-white"
            }  cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center`}
          >
            Technical Requirements
          </button>
          <button
            onClick={() => dispatch({ type: "additionalQuestions" })}
            className={` ${
              additionalQuestions &&
              "bg-semiBlack rounded-full border-solid border-[1px] border-white"
            }  cursor-pointer text-white font-Inter text-[10px] font-normal px-[19px] py-[14px] flex gap-[80px] items-center`}
          >
            Additional Questions
          </button>
        </div>
      </div>
      {/* Acordions */}
      {generalInformation && <GeneralInformation />}
      {programDetails && <ProgramDetails />}
      {registrationandFees && <RegistrationandFees />}
      {careerSupport && <CareerSupport />}
      {learningExperience && <LearningExperience />}
      {technicalRequirements && <TechnicalRequirements />}
      {additionalQuestions && <AdditionalQuestions />}
    </div>
  );
};

export default Question;
