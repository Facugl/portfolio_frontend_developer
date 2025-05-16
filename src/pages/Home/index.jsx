import { MdArrowDownward } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  CanvasContainer,
  TextWrapper,
  H1,
  Hero,
  HeroContainer,
  Span,
} from "./styles";
import { Button } from "../../common/Button";

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
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi there 👋, I'm Facundo.
        </H1>
        <TextWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Span>I'm a&nbsp;</Span>
          <Typewriter
            onInit={(typewriter) => {
              const phrases = [
                "Front-End React Developer.",
                "Chess player.",
                "Back-End Java Developer.",
              ];

              phrases.forEach((phrase) => {
                typewriter
                  .typeString(phrase)
                  .pauseFor(1000)
                  .deleteAll();
              });

              typewriter.start();
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
          transition={{ duration: 0.5 }}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-40}
          >
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
