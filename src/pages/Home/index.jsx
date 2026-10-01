import { MdArrowDownward, MdFileDownload } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import resume from "/assets/Facundo_Luna_Back-End_Developer_Resume.pdf";
import { CanvasContainer, H1, H2, Hero, HeroButtons, HeroContainer } from "./styles";
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
        <HeroButtons
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            as={Link}
            href="#projects"
            to="projects"
            smooth={true}
            duration={500}
            offset={-40}
          >
            View my projects
            <MdArrowDownward />
          </Button>
          <Button
            as="a"
            href={resume}
            download="Facundo_Luna_Back-End_Developer_Resume.pdf"
          >
            Download CV
            <MdFileDownload />
          </Button>
        </HeroButtons>
      </HeroContainer>
    </Hero>
  );
};
