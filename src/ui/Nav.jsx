import burger from "../assets/icons/burger.svg";
import logo from "../assets/icons/logo.svg";
const Nav = () => {
  return (
    <nav className="w-full h-[54px] bg-lightDark flex items-center justify-between px-[25px]">
      <img src={logo} />
      <img src={burger} alt="burger" />
    </nav>
  );
};

export default Nav;
