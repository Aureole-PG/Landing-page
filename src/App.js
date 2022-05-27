import Nav from "./components/Nav";
import Scroll from "./components/Scroll";
import About from "./sections/about";
import Aditional from "./sections/aditional";
import Contact from "./sections/contact";
import Features from "./sections/features";
import Footer from "./sections/footer";
import Main from "./sections/main";
import Media from "./sections/media";
import Questions from "./sections/questions";


function App() {
  return (
    <>
      {/* <Nav /> */}
      <Scroll />
      <Main />
      <Features />
      <Media />
      <About />
      <Questions />
      <Aditional />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
