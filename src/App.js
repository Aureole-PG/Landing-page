import Scroll from "./components/Scroll";
import About from "./sections/about";
import Contact from "./sections/contact";
import Features from "./sections/features";
import Footer from "./sections/footer";
import Main from "./sections/main";
import Media from "./sections/media";
import Questions from "./sections/questions";
import SecondFeatures from "./sections/secondFeatures";


function App() {
  return (
    <>
      <Scroll />
      <Main />
      <SecondFeatures />
      <Features />
      <Media />
      <About />
      <Questions />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
