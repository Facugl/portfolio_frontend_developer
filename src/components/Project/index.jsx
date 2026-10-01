import {
  ProjectContainer,
  Highlights,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  TechStack,
  TechImage,
  ButtonsWrapper,
  TechContainer,
  ButtonLiveApp,
  ButtonKnowMore,
  DemoNote,
} from "./styles";

export const Project = ({
  id,
  logoImgPath,
  name,
  highlights,
  techStack,
  url,
  repository,
  position,
  coldStart,
}) => {
  return (
    <ProjectContainer
      key={id}
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <ProjectImage position={position} whileHover={{ scale: 1.1 }}>
        <img src={logoImgPath} alt={name} />
      </ProjectImage>
      <ProjectInfo position={position}>
        <ProjectTitle>{name}</ProjectTitle>
        <Highlights>
          {highlights?.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </Highlights>
        <TechStack>
          {techStack?.map((skill) => (
            <TechContainer key={skill.id}>
              <TechImage src={skill.url} alt={skill.name} title={skill.name} />
            </TechContainer>
          ))}
        </TechStack>
        <ButtonsWrapper>
          <ButtonLiveApp
            as="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </ButtonLiveApp>
          <ButtonKnowMore
            as="a"
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </ButtonKnowMore>
        </ButtonsWrapper>
        {coldStart && (
          <DemoNote>
            Free-tier hosting: the demo may take up to a minute to wake up.
          </DemoNote>
        )}
      </ProjectInfo>
    </ProjectContainer>
  );
};
