import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import close from "../assets/icons/close.svg";
import open from "../assets/icons/open.svg";
const generalInformationData = [
  {
    ask: "What if I miss a live class?",
    ans:"Don’t worry! All live classes are recorded and uploaded to your personalized dashboard for easy access."
  },
  {
    ask: "How do you ensure accountability during the program?",
    ans:"We pair students with accountability partners, set deadlines for assignments and quizzes, and provide reminders via the dashboard calendar."
  },
  {
    ask: "Can I contact instructors if I have questions?",
    ans:"Yes, you can reach out to instructors during live classes or through designated communication channels provided in the program."
  },
];
export default function  LearningExperience() {
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
