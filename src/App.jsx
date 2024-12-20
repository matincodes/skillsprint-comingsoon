import Hero from "./components/hero/Hero";
import About from "./components/About";
import Nav from "./ui/Nav";
import Choose from "./components/Choose";
import CountDown from "./components/CountDown";
const App = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <Nav />
      <Hero />
      <About />
      <Choose/>
      <CountDown/>
    </div>
  );
};

export default App;
