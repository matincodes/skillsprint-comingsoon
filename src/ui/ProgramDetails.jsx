import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import close from "../assets/icons/close.svg";
import open from "../assets/icons/open.svg";
const programDetailsData = [
  {
    ask: "What courses are included in the program?",
    ans: "The program covers a wide range of tech and non-tech skills, including:",
    ansOflist: [
      "Frontend Development",
      "Backend Development (Node.js, Django)",
      "Data Analytics",
      "Artificial Intelligence & Machine Learning",
      "UI/UX Design",
      "Mobile Development (React Native)",
      "Digital Marketing",
      "SEO & Technical Writing",
      "Project Management",
    ],
  },
  {
    ask: "What is the duration of the program?",
    ans: "The introductory program lasts one month, while the advanced paid program ranges from 6 to 15 months, depending on the course.",
  },
  {
    ask: "How are the classes delivered?",
    ans: "Classes are conducted live online, with recordings available on a personalized dashboard. This ensures students have flexibility while staying on track with deadlines for assignments and quizzes.",
  },
  {
    ask: "Will I get a certificate after completing the program?",
    ans: "Yes, students who complete the program will receive certificates of completion, which can be added to their resumes or LinkedIn profiles.",
  },
];
export default function ProgramDetails() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-[32px] ">
      {programDetailsData.map((items, index) => (
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
            {items.ansOflist && items.ansOflist.length > 0 && (
              <ul className="px-[39px] list-disc ">
                {items.ansOflist.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
