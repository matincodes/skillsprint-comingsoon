import Hero from "./components/hero/Hero";
import About from "./components/About";
import Nav from "./ui/Nav";
const App = () => {
  return (
    <div className="flex flex-col items-center bg-black">
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default App;
