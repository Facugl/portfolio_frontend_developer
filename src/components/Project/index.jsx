import { motion } from "framer-motion";

import {
  ProjectContainer,
  ProjectDesc,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  TechStack,
  TechImage,
  ButtonsWrapper,
  TechContainer,
  ButtonLiveApp,
  ButtonKnowMore,
  LinkButton,
} from "./styles";

export const Project = ({
  id,
  logoImgPath,
  name,
  description,
  techStack,
  url,
  repository,
  position,
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
        <ProjectTitle>{name} </ProjectTitle>
        <ProjectDesc>{description}</ProjectDesc>
        <TechStack>
          {techStack?.map((skill) => (
            <TechContainer key={skill.id}>
              <TechImage src={skill.url} alt={skill.name} title={skill.name} />
            </TechContainer>
          ))}
        </TechStack>
        <ButtonsWrapper>
          <LinkButton href={url} target="_blank" rel="noopener noreferrer">
            <ButtonLiveApp type="button">Live app</ButtonLiveApp>
          </LinkButton>
          <LinkButton
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonKnowMore type="button">Know more</ButtonKnowMore>
          </LinkButton>
        </ButtonsWrapper>
      </ProjectInfo>
    </ProjectContainer>
  );
};
