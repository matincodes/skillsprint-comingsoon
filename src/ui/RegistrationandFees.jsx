import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import close from "../assets/icons/close.svg";
import open from "../assets/icons/open.svg";
const generalInformationData = [
  {
    ask: "Is the main program paid?",
    ans: "Yes, while the one-month introductory program is free, the main program is a paid advanced course that offers in-depth training, mentorship, and career support.",
  },
  {
    ask: "What are the costs of the advanced program?",
    ans: "The advanced program ranges from ₦50,000 to ₦150,000, depending on the course.",
  },
  {
    ask: "Can I pay in installments?",
    ans: "Yes, we offer flexible installment plans, allowing you to make monthly payments during the course duration. This ensures the program remains accessible to everyone.",
  },
  {
    ask: "Is financial aid or scholarships available?",
    ans: "Yes, scholarships are available for top-performing students from the free introductory program and individuals who meet specific criteria.",
  },
  {
    ask: "Why is the program paid when there are free courses online?",
    ans: "Unlike free online courses, Skill Sprint offers live interactive classes, mentorship, hands-on projects, and career services like resume building, LinkedIn optimization, and job placements. These added benefits ensure you’re job-ready and provide more value for your investment.",
  },
];
export default function RegistrationandFees() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-[32px] ">
      {generalInformationData.map((items, index) => (
        <Accordion
          key={index}
          className="!bg-lightDark !text-white px-[19px] py-[6px]"
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? <img src={open} /> : <img src={close} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              className=" font-Inter font-medium text-[16px]"
              component="span"
            >
              {items.ask}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="!bg-black rounded-sm">
            <Typography className="px-[19px] py-[26px] font-Inter font-normal text-[16px]">
              {items.ans}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
