import footerIcon from "../assets/icons/footerIcon.svg";
import logo from "../assets/icons/logo.svg";
import line from "../assets/icons/line.svg";
import textIcon from "../assets/icons/textIcon.svg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-[623px] mt-[151px] border-solid border-[1px] border-white">
      <div className="w-[80%] h-[425px] flex flex-col justify-between border-solid border-[1px] border-white">
        <div className="w-full h-[348px] flex flex-col gap-[40px]  border-solid border-[1px] border-white">
          <span className="flex items-center gap-[14px]">
            <img src={logo} />
            <img src={line} />
            <img src={textIcon} />
          </span>
        </div>
        {/* Divider */}
        <div className="border-solid border-[1px] border-darkWhite " />
        <p className="text-white">©2024 Thynkcity All rights reserved.</p>
      </div>
      <img src={footerIcon} />
    </div>
  );
};

export default Footer;

//border-solid border-[1px] border-white
