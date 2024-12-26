import burger from "../assets/icons/burger.svg";
import logo from "../assets/icons/logo.svg";
import closeNav from "../assets/icons/closeNav.svg";
import { useState } from "react";
const data = ["Home", "About ", "Program highlights", "Waitlist", "FAQ"];
const Nav = () => {
  const [isOpen, setIsopen] = useState(false);
  function HandleOpen() {
    setIsopen(true);
  }
  function HandleClose() {
    setIsopen(false);
  }
  return (
    <>
      <nav className=" z-10 fixed w-full h-[54px] bg-lightDark flex items-center justify-between px-[25px]">
        <img src={logo} />
        <img
          onClick={HandleOpen}
          className="cursor-pointer  xl:hidden"
          src={burger}
          alt="burger"
        />
        <ul className=" font-normal text-lightGray font-Inter text-[16px] xl:flex hidden  gap-[84px]  ">
        {data.map((items, index) => (
              <li className="cursor-pointer" key={index}>
                {items}
              </li>
            ))}
        </ul>
      </nav>
      {isOpen && (
        <div className=" z-10 xl:hidden fixed  flex flex-col gap-[38px] w-full h-auto px-[25px] py-[11px] bg-lightDark">
          <div className=" w-full h-[32px] flex justify-end">
            <img
              onClick={HandleClose}
              className="cursor-pointer"
              src={closeNav}
            />
          </div>
          <ul className="flex flex-col gap-[38px] font-Inter font-medium text-[20px] text-white">
            {data.map((items, index) => (
              <li className="cursor-pointer" key={index}>
                {items}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
