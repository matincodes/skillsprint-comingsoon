import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import close from "../assets/icons/close.svg";
import open from "../assets/icons/open.svg";
const generalInformationData = [
  {
    ask: "What is Skill Sprint?",
    ans: "Skill Sprint is a comprehensive tech education program by Thynkcity designed to equip individuals with in-demand tech and non-tech skills. It starts with a free one-month introductory program and offers an advanced paid program with career mentorship, hands-on projects, and pathways to internships and job opportunities.",
  },
  {
    ask: "  Who can join Skill Sprint?",
    ans: "Anyone eager to learn tech or non-tech skills is welcome to join. No prior experience is required, and the program is designed to accommodate beginners and career switchers.",
  },
  {
    ask: "When does the program start?",
    ans: "The free one-month introductory program begins on March 1, 2025. The paid advanced program will commence immediately after the free program ends",
  },
  {
    ask: "Is Skill Sprint only for tech skills?",
    ans: "No, Skill Sprint also offers non-tech skills like Digital Marketing, SEO & Technical Writing, and Project Management to ensure participants can pursue diverse career opportunities.",
  },
];
export default function GeneralInformation() {
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
