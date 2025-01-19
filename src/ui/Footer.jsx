import logo from "../assets/icons/logo.svg";
import line from "../assets/icons/line.svg";
import textIcon from "../assets/icons/textIcon.svg";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";
import linkedln from "../assets/icons/linkedln.svg";
import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/insta.svg";
import facebook from "../assets/icons/faceBook.svg";
import divider from "../assets/icons/divider.svg";
import deskfootericon from "../assets/icons/deskfooterlogo.svg"

const Footer = () => {
  return (
    <div className=" flex flex-col justify-end items-center bg-footerBg mt-[151px] h-auto w-full ">
      <div className="w-[80%] py-[77px] h-auto ">
        <div className=" xl:flex-row xl:justify-between xl:items-center xl:gap-[0px] gap-[40px] flex flex-col   w-full h-auto ">
          <span className="flex items-center gap-[14px]">
            <img src={logo} />
            <img src={line} />
            <img src={textIcon} />
          </span>
          <ul className="xl:w-[500px] justify-between w-auto flex  font-Inter text-white text-[13.5px]">
            <li>Home</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="w-full flex flex-col gap-12 h-auto ">
          <img src={divider} />
          <div className="xl:flex-row xl:gap-[0px] gap-[69px] w-full flex justify-between flex-col">
            <div className=" w-auto flex flex-wrap gap-[33px]">
              <h2 className="font-Inter font-medium text-white text-[15.2px]">
                contact us :
              </h2>
              <span className="flex gap-2 items-center">
                <img src={phone} />
                <p className="font-Inter text-[13.5px] font-normal text-white">
                  +234 902 523 0287
                </p>
              </span>
              <span className="flex gap-2 items-center">
                <img src={email} />
                <p className="font-Inter text-[13.5px] font-normal text-white">
                  build@thynkcity.com
                </p>
              </span>
            </div>
            <div className="  w-auto flex flex-wrap gap-[20px]">
              <img src={linkedln} />
              <img src={twitter} />
              <img src={insta} />
              <img src={facebook} />
            </div>
          </div>
          <p className="text-white">©2024 Thynkcity All rights reserved.</p>
        </div>
      </div>
      <div className="w-[80%]">
        <img src={deskfootericon}/>
      </div>
    </div>
  );
};

export default Footer;

