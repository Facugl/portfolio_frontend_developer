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
              I'm a Full-Stack developer with experience in building RESTful APIs and responsive web applications that prioritize an excellent user experience. I specialize in technologies like Java, Spring Boot, and React, focusing on quality, performance, and scalability. <br />
              I enjoy collaborating in agile teams using methodologies like SCRUM, leveraging tools like Trello and Slack to maintain clear communication and an efficient workflow. <br />
              I'm driven by tackling challenges, continuously learning, and delivering solutions that create real value for both the product and the team. My goal is to contribute to collective growth, combining technical skills with a proactive and collaborative attitude. 🐱‍👤
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
