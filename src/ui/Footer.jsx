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
    // <div className="bg-footerBg flex flex-col justify-between items-center w-full h-auto mt-[151px] ">
    //   <div className=" gap-[20px] xl:gap-[0px] my-[99px] w-[80%] h-auto flex flex-col justify-between ">
    //     <div className=" w-full h-auto flex flex-col gap-[40px]  ">
    //       <div className=" xl:flex-row flex flex-col gap-[20px] h-auto xl:items-center xl:flex xl:justify-between">
    //         <span className="flex items-center gap-[14px]">
    //           <img src={logo} />
    //           <img src={line} />
    //           <img src={textIcon} />
    //         </span>
    //         <ul className="xl:w-[500px] flex justify-between font-Inter text-white text-[13.5px]">
    //           <li>Home</li>
    //           <li>About Us</li>
    //           <li>Careers</li>
    //           <li>Blog</li>
    //         </ul>
    //       </div>
    //       <span className="  xl:gap-[0px] gap-[20px] h-auto xl:items-center xl:flex-row flex flex-col justify-between w-full  ">
    //         {/* Contact */}
    //         <div className="  md:flex md:items-center xl:w-[50%]">
    //           <h2 className="font-Inter font-medium text-white text-[15.2px]">
    //             contact us :
    //           </h2>
    //           <div className=" md:w-[400px] md:justify-around w-full h-[50px] flex justify-between">
    //             <span className="flex gap-2 items-center">
    //               <img src={phone} />
    //               <p className="font-Inter text-[13.5px] font-normal text-white">
    //                 +234 902 523 0287
    //               </p>
    //             </span>
    //             <span className="flex gap-2 items-center">
    //               <img src={email} />
    //               <p className="font-Inter text-[13.5px] font-normal text-white">
    //                 build@thynkcity.com
    //               </p>
    //             </span>
    //           </div>
    //         </div>
    //         {/* Social link */}
    //         <div className=" xl:justify-between xl:w-[50%] w-full h-[64px] flex gap-[24px] flex-wrap ">
    //           <img src={linkedln} />
    //           <img src={twitter} />
    //           <img src={insta} />
    //           <img src={facebook} />
    //         </div>
    //       </span>
    //     </div>
    //     {/* Divider */}
    //     <div className="border-solid border-[1px] border-darkWhite " />
    //     <p className="text-white">©2024 Thynkcity All rights reserved.</p>
    //   </div>
    //   <img src={footerIcon} />
    // </div>
  );
};

export default Footer;

//
