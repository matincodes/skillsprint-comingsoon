import Hero from "./components/hero/Hero";
import About from "./components/About";
import Nav from "./ui/Nav";
import Choose from "./components/Choose";
import CountDown from "./components/CountDown";
import Question from "./components/Question";
import Footer from "./ui/Footer";
const App = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <Nav />
      <Hero />
      <About />
      <Choose/>
      <CountDown/>
      <Question/>
      <Footer/>
    </div>
  );
};

export default App;
