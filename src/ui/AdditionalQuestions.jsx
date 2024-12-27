import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import close from "../assets/icons/close.svg";
import open from "../assets/icons/open.svg";
const generalInformationData = [
  {
    ask: "How many hours per week do I need to commit?",
    ans:"The free introductory program requires 6–8 hours per week. The advanced program may require 10–12 hours per week, depending on the course."
  },
  {
    ask: "Can I switch courses after the program starts?",
    ans:"Switching courses is only allowed within the first week of the advanced program and is subject to availability."
  },
];
export default function  AdditionalQuestions() {
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
