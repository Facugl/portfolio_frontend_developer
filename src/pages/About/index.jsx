import { Container } from "../../globalStyles";
import { useInView } from "react-intersection-observer";
import { techStack } from "../../data/TechStackData";
import { contactData } from "../../data/ContactData";
import avatar from "/assets/images/avatar.png";
import cv from "/assets/FacundoLuna_FrontEnd-Developer_CV.pdf";
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
                <h2>
                  Facundo Luna <br />
                  <span>Front-End Developer</span>
                </h2>
                <a
                  href="https://www.linkedin.com/in/facundoluna/"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire me
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
              Determined and productive web developer with a passion for
              creative solutions. Proficient in HTML, CSS and JavaScript.
              Dedicated to learning additional technologies and coding languages
              (currently enrolled in a Java course). Looking for an entry-level
              position at a great company to be a hard-working asset in any
              team, to learn, grow and develop long-term. 🐱‍👤
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
                href={cv}
                download="FacundoLuna_FrontEnd-Developer_CV.pdf"
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
            {techStack?.slice(0, 3).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
          <Column>
            {techStack?.slice(3, 7).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
          <Column>
            {techStack?.slice(7, 10).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
        </SkillWrapper>
      </Container>
    </Section>
  );
};
