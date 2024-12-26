import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import close from "../assets/icons/close.svg";
import open from "../assets/icons/open.svg";
const generalInformationData = [
  {
    ask: "Will Skill Sprint help me get a job?",
    ans: "Yes, Skill Sprint provides comprehensive career support, including LinkedIn optimization, resume building, interview preparation, and mock interviews. Top-performing students will also be connected with internship and job opportunities.",
  },
  {
    ask: "What kind of internships can I expect?",
    ans: "Students may secure internships with local and international companies, particularly in startups and tech-driven organizations.",
  },
  {
    ask: "How do you select students for internships?",
    ans: "Internship eligibility is based on performance in the program, participation in live sessions, and successful completion of assignments and projects.",
  },
];
export default function CareerSupport() {
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
