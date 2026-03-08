import { MdArrowDownward } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { CanvasContainer, H1, H2, Hero, HeroContainer } from "./styles";
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
        <H2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Java Backend Developer specializing in Spring Boot and REST APIs.
        </H2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="projects" smooth={true} duration={500} offset={-40}>
            <Button type="button">
              View my projects
              <MdArrowDownward />
            </Button>
          </Link>
        </motion.div>
      </HeroContainer>
    </Hero>
  );
};
