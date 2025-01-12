import Hero from "./components/hero/Hero";
import About from "./components/About";
import Nav from "./ui/Nav";
import Choose from "./components/Choose";
import CountDown from "./components/CountDown";
import Question from "./components/Question";
import Footer from "./ui/Footer";
import RegistrationForm from "./components/RegistrationForm";
import { Element } from "react-scroll";
const App = () => {

  
  return (
    <div className="flex flex-col items-center bg-black">
      <Nav  />
      <Hero section/>
      <About />
      <Choose/>
      <CountDown targetDate="2025-03-01T00:00:00"/>
      <Element name="register">
          <RegistrationForm />
      </Element>
      <Question/>
      <Footer/>
    </div>
  );
};

export default App;
