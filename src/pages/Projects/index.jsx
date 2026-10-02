import { Container } from "../../globalStyles";
import { Paragraph, ProjectsWrapper } from "./styles";
import { useInView } from "react-intersection-observer";
import { Section } from "../../common/Section";
import { Project } from "../../components/Project";
import { TitleSection } from "../../common/TitleSection";
import projectsData from "../../data/ProjectsData";
import { reveal } from "../../utils/animations";

export const Projects = () => {
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  return (
    <Section ref={ref} id="projects">
      <Container>
        <TitleSection
          {...reveal()}
        >
          Projects
        </TitleSection>
        <Paragraph
          {...reveal()}
        >
          Backend-focused projects: REST APIs built with Spring Boot, secured
          with Spring Security, backed by automated tests and shipped through
          CI/CD.
        </Paragraph>
        <ProjectsWrapper>
          {projectsData?.map((item) => (
            <Project key={item.id} {...item} />
          ))}
        </ProjectsWrapper>
      </Container>
    </Section>
  );
};
