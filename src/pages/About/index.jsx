import { Container } from "../../globalStyles";
import { useInView } from "react-intersection-observer";
import { techStack } from "../../data/TechStackData";
import { contactData } from "../../data/ContactData";
import avatar from "/assets/images/avatar.png";
import resume from "/assets/Facundo_Luna_Back-End_Developer_Resume.pdf";
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
                  Let's play
                  <br /> a game 😎 <FaChess />
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
              I'm a backend developer based in Argentina, building REST APIs
              with Java and Spring Boot. I focus on what makes a backend
              reliable: clear domain logic, solid security, and automated tests
              that make every deploy predictable.
            </Paragraph>
            <Paragraph>
              I've collaborated remotely in agile teams through GitHub pull
              requests and Scrum, and I can work on the frontend with React and
              TypeScript when a feature needs it.
            </Paragraph>
            <Paragraph>
              I'm also studying for a Bachelor's Degree in Data Science, which
              pushes me toward data-driven backend systems. I'm open to remote
              roles and work in English at a professional level.
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
                download="Facundo_Luna_Back-End_Developer_Resume.pdf"
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
            {techStack?.slice(0, 6).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
          <Column>
            {techStack?.slice(6, 11).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
          <Column>
            {techStack?.slice(11, 16).map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </Column>
        </SkillWrapper>
      </Container>
    </Section>
  );
};
