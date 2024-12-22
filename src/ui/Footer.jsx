import footerIcon from "../assets/icons/footerIcon.svg";
import logo from "../assets/icons/logo.svg";
import line from "../assets/icons/line.svg";
import textIcon from "../assets/icons/textIcon.svg";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";
import linkedln from "../assets/icons/linkedln.svg";
import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/insta.svg";
import facebook from "../assets/icons/faceBook.svg";

const Footer = () => {
  return (
    <div className="bg-footerBg flex flex-col justify-between items-center w-full h-auto mt-[151px] ">
      <div className=" gap-[20px] xl:gap-[0px] my-[99px] w-[80%] h-auto flex flex-col justify-between ">
        <div className=" w-full h-auto flex flex-col gap-[40px]  ">
          <div className=" xl:flex-row flex flex-col gap-[20px] h-auto xl:items-center xl:flex xl:justify-between">
            <span className="flex items-center gap-[14px]">
              <img src={logo} />
              <img src={line} />
              <img src={textIcon} />
            </span>
            <ul className="xl:w-[500px] flex justify-between font-Inter text-white text-[13.5px]">
              <li>Home</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <span className="  xl:gap-[0px] gap-[20px] h-auto xl:items-center xl:flex-row flex flex-col justify-between w-full  ">
            {/* Contact */}
            <div className="  md:flex md:items-center xl:w-[50%]">
              <h2 className="font-Inter font-medium text-white text-[15.2px]">
                contact us :
              </h2>
              <div className=" md:w-[400px] md:justify-around w-full h-[50px] flex justify-between">
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
            </div>
            {/* Social link */}
            <div className=" xl:justify-between xl:w-[50%] w-full h-[64px] flex gap-[24px] flex-wrap ">
              <img src={linkedln} />
              <img src={twitter} />
              <img src={insta} />
              <img src={facebook} />
            </div>
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
