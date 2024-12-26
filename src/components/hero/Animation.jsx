import roller1 from "../../assets/icons/roller1.svg";
import roller2 from "../../assets/icons/roller2.svg";
import roller3 from "../../assets/icons/roller3.svg";
import roller4 from "../../assets/icons/roller4.svg";
import roller5 from "../../assets/icons/roller5.svg";
import roller6 from "../../assets/icons/roller6.svg";
import roller7 from "../../assets/icons/roller7.svg";
import roller8 from "../../assets/icons/roller8.svg";
import roller9 from "../../assets/icons/roller9.svg";
import roller10 from "../../assets/icons/roller10.svg";
import roller11 from "../../assets/icons/roller11.svg";
import roller12 from "../../assets/icons/roller12.svg";
import roller13 from "../../assets/icons/roller13.svg";
import roller14 from "../../assets/icons/roller14.svg";
import roller15 from "../../assets/icons/roller15.svg";
import roller16 from "../../assets/icons/roller16.svg";
import roller17 from "../../assets/icons/roller17.svg";
import roller18 from "../../assets/icons/roller18.svg";
import roller19 from "../../assets/icons/roller19.svg";
import roller20 from "../../assets/icons/roller20.svg";
import roller21 from "../../assets/icons/roller21.svg";
import roller22 from "../../assets/icons/roller22.svg";
import roller23 from "../../assets/icons/roller23.svg";
import roller24 from "../../assets/icons/roller24.svg";
import roller25 from "../../assets/icons/roller25.svg";
import useMeasure from "react-use-measure";
import { motion, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { animate } from "motion";

const icons = [
  {
    id: 1,
    src: roller1,
  },
  {
    id: 2,
    src: roller2,
  },
  {
    id: 3,
    src: roller3,
  },
  {
    id: 4,
    src: roller4,
  },
  {
    id: 5,
    src: roller5,
  },
  {
    id: 6,
    src: roller6,
  },
  {
    id: 7,
    src: roller7,
  },
  {
    id: 8,
    src: roller8,
  },
  {
    id: 9,
    src: roller9,
  },
  {
    id: 10,
    src: roller10,
  },
  {
    id: 11,
    src: roller11,
  },
  {
    id: 12,
    src: roller12,
  },
  {
    id: 13,
    src: roller13,
  },
  {
    id: 14,
    src: roller14,
  },
  {
    id: 15,
    src: roller15,
  },
  {
    id: 16,
    src: roller16,
  },
  {
    id: 17,
    src: roller17,
  },
  {
    id: 18,
    src: roller18,
  },
  {
    id: 19,
    src: roller19,
  },
  {
    id: 20,
    src: roller20,
  },
  {
    id: 21,
    src: roller21,
  },
  {
    id: 22,
    src: roller22,
  },
  {
    id: 23,
    src: roller23,
  },
  {
    id: 24,
    src: roller24,
  },
  {
    id: 25,
    src: roller25,
  },
];
const Animation = () => {
    // left animation

  let [left, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  useEffect(() => {
    let controls;
    const finalPosition = - width / 2 - 16;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);

  // right animation
  // let [ref, { width }] = useMeasure();
  const yTranslation = useMotionValue(  0);
  useEffect(() => {
    let controls;
    const finalPosition = width / 2 - 16;
    controls = animate(yTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 55,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [yTranslation, width]);
  return (
    <div className="  w-full h-[149px] overflow-hidden flex flex-col gap-[25px] ">
      <motion.div
        className="w-[5518px] h-[62px] flex gap-[16px]  "
        ref={left}
        style={{ x: xTranslation }}
      >
        {icons.map((items) => (
          <span
            key={items.id}
            className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"
          >
            <img src={items.src} />
          </span>
        ))}
         {icons.map((items) => (
          <span
            key={items.id}
            className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"
          >
            <img src={items.src} />
          </span>
        ))}
      </motion.div>
      <motion.div
        className="w-[5518px] h-[62px] flex gap-[16px] relative left-[-700%] xl:left-[-200%] "
        ref={left}
        style={{ x: yTranslation }}
      >
        {icons.map((items) => (
          <span
            key={items.id}
            className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"
          >
            <img src={items.src} />
          </span>
        ))}
         {icons.map((items) => (
          <span
            key={items.id}
            className="w-[67px] h-[62px] px-[15px] py-[14px] bg-semiBlack rounded-lg border-[1px] border-white border-solid"
          >
            <img src={items.src} />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Animation;
