import { Container } from "../../globalStyles";
import { useInView } from "react-intersection-observer";
import { techStack } from "../../data/TechStackData";
import { contactData } from "../../data/ContactData";
import avatar from "/assets/images/avatar.png";
import resume from "/assets/Facundo_Luna_Full-Stack_Developer_Resume.pdf";
import { LinksSocialMedia } from "../../common/LinkSocialMedia/index";
import { SkillItem } from "../../components/Skill/index";
import { Section } from "../../common/Section";
import { TitleSection } from "../../common/TitleSection";
import {
  AvatarImg,
  AvatarWrapper,
  ButtonDownloadCV,
  ButtonsWrapper,
  Column,
  ContentWrapper,
  ImageContainer,
  Img,
  InfoContainer,
  Paragraph,
  SkillWrapper,
  SocialWrapper,
} from "./styles";
import { Link } from "../../common/Link";
import { FaChess } from "react-icons/fa";

export const About = () => {
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  return (
    <Section ref={ref} id="about">
      <Container>
        <TitleSection
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About
        </TitleSection>
        <ContentWrapper>
          <ImageContainer
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AvatarWrapper>
              <AvatarImg>
                <Img src={avatar} alt="Facundo Luna" />
                <p>
                  Let's play<br /> a game 😎 <FaChess />
                </p>
                <a
                  href="https://www.chess.com/member/gaston_bj"
                  title="Chess.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chess.com
                </a>
              </AvatarImg>
            </AvatarWrapper>
          </ImageContainer>
          <InfoContainer
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Paragraph>
              Soy un desarrollador Full-Stack con experiencia en la creación de APIs RESTful y aplicaciones web responsivas que priorizan una excelente experiencia de usuario. Me especializo en tecnologías como Java, Spring Boot y React, trabajando con enfoque en la calidad, el rendimiento y la escalabilidad.<br />
              Disfruto colaborar en equipos ágiles bajo metodologías como SCRUM, utilizando herramientas como Trello y Slack para mantener una comunicación clara y un flujo de trabajo eficiente.<br />
              Me motiva asumir desafíos, seguir aprendiendo constantemente y aportar soluciones que generen valor real tanto al producto como al equipo. Mi objetivo es contribuir al crecimiento colectivo, combinando habilidades técnicas con una actitud proactiva y colaborativa. 🐱‍👤
            </Paragraph>
            <ButtonsWrapper>
              <SocialWrapper>
                {contactData?.map((item) => (
                  <LinksSocialMedia key={item.id} {...item} />
                ))}
              </SocialWrapper>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={resume}
                download="Facundo_Luna_Full-Stack_Developer_Resume.pdf"
              >
                <ButtonDownloadCV type="button">
                  Download Resume
                </ButtonDownloadCV>
              </Link>
            </ButtonsWrapper>
          </InfoContainer>
        </ContentWrapper>
        <SkillWrapper
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Column>
            {techStack?.slice(0, 5).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
          <Column>
            {techStack?.slice(5, 9).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
          <Column>
            {techStack?.slice(9, 14).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
        </SkillWrapper>
      </Container>
    </Section>
  );
};
