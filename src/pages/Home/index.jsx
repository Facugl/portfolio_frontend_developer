import { MdArrowDownward } from "react-icons/md";
import Navbar from "../../components/Navbar";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { Button } from "../../globalStyles";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  CanvasContainer,
  TextWrapper,
  H1,
  MainBg,
  Hero,
  HeroContainer,
  Span,
} from "./styles";

export const Home = () => {
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  return (
    <Hero ref={ref} id="home">
      <CanvasContainer className="canvas">
        <canvas className="connecting-dots"></canvas>
      </CanvasContainer>
      <HeroContainer>
        <H1
          initial={{ y: -50, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          Hi there 👋, I'm Facundo.
        </H1>
        <TextWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <Span>I'm a&nbsp;</Span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Front-End React Developer.")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </TextWrapper>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <Link to="projects">
            <Button type="button">
              Discovery my work
              <MdArrowDownward />
            </Button>
          </Link>
        </motion.div>
      </HeroContainer>
    </Hero>
  );
};
