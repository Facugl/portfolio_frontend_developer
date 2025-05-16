import canvasDotsBg from "./utils/bgCanvas";
import canvasDots from "./utils/heroCanvas";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { CanvasContainer, MainBg } from "./pages/Home/styles";
import { useInView } from "react-intersection-observer";
import { ToastContainer } from "react-toastify";

window.onload = function () {
  canvasDotsBg();
  canvasDots();
};

function App() {
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });
  return (
    <>
      <GlobalStyle />
      <Home />
      <Navbar hide={inView} />
      <MainBg>
        <CanvasContainer>
          <canvas className="canvas-2"></canvas>
        </CanvasContainer>
      </MainBg>
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
