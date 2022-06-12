import Scroll from "./components/Scroll";
import About from "./sections/about";
import Contact from "./sections/contact";
import Features from "./sections/features";
import Home from "./sections/home";
import Media from "./sections/media";
import Questions from "./sections/questions";
import WeDo from "./sections/weDo";


function App() {
  return (
    <>
      <Scroll />
      <Home />
      <WeDo />
      <Features />
      <Media />
      <About />
      <Questions />
      <Contact />

    </>
  );
}

export default App;
