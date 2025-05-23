import { Container } from "../../globalStyles";
import { Paragraph, ProjectsWrapper } from "./styles";
import { useInView } from "react-intersection-observer";
import { Section } from "../../common/Section";
import { Project } from "../../components/Project";
import { TitleSection } from "../../common/TitleSection";
import projectsData from "../../data/ProjectsData";

export const Projects = () => {
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  return (
    <Section ref={ref} id="projects">
      <Container>
        <TitleSection
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </TitleSection>
        <Paragraph
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          These are some of my latest works.
        </Paragraph>
        <ProjectsWrapper>
          {projectsData?.map((item) => (
            <Project
              key={item.id}
              id={item.id}
              logoImgPath={item.logoImgPath}
              name={item.name}
              description={item.description}
              techStack={item.techStack}
              url={item.url}
              repository={item.repository}
              position={item.position}
            />
          ))}
        </ProjectsWrapper>
      </Container>
    </Section>
  );
};
