import { Container } from "../../globalStyles";
import { useInView } from "react-intersection-observer";
import { techCategories, techStack } from "../../data/TechStackData";
import { contactData } from "../../data/ContactData";
import avatar from "/assets/images/avatar.png";
import resume from "/assets/Facundo_Luna_Back-End_Developer_Resume.pdf";
import { LinksSocialMedia } from "../../common/LinkSocialMedia/index";
import { SkillItem } from "../../components/Skill/index";
import { Experience } from "../../components/Experience";
import { Section } from "../../common/Section";
import { TitleSection } from "../../common/TitleSection";
import { reveal } from "../../utils/animations";
import {
  AvatarImg,
  AvatarWrapper,
  ButtonDownloadCV,
  ButtonsWrapper,
  ContentWrapper,
  GroupItems,
  ImageContainer,
  Img,
  InfoContainer,
  Paragraph,
  SkillGroups,
  SocialWrapper,
} from "./styles";
import { FaChess } from "react-icons/fa";

export const About = () => {
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  return (
    <Section ref={ref} id="about">
      <Container>
        <TitleSection
          {...reveal()}
        >
          About
        </TitleSection>
        <ContentWrapper>
          <ImageContainer
            {...reveal(0.2)}
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
            {...reveal(0.2)}
          >
            <Paragraph>
              I'm a backend developer based in Argentina, building REST APIs
              with Java and Spring Boot. I focus on what makes a backend
              reliable: clear domain logic, solid security, and automated tests
              that make every deploy predictable.
            </Paragraph>
            <Paragraph>
              When a feature needs it, I can also work on the frontend with
              React and TypeScript.
            </Paragraph>
            <Paragraph>
              I'm also studying for a Bachelor's Degree in Data Science, which
              pushes me toward data-driven backend systems. I'm open to remote
              roles and work in English at a professional level.
            </Paragraph>
            <Experience />
            <ButtonsWrapper>
              <SocialWrapper>
                {contactData?.map((item) => (
                  <LinksSocialMedia key={item.id} {...item} />
                ))}
              </SocialWrapper>
              <ButtonDownloadCV
                as="a"
                href={resume}
                download="Facundo_Luna_Back-End_Developer_Resume.pdf"
              >
                Download Resume
              </ButtonDownloadCV>
            </ButtonsWrapper>
          </InfoContainer>
        </ContentWrapper>
        <SkillGroups
          {...reveal(0.4)}
        >
          {techCategories.map((category) => {
            const skills = techStack.filter(
              (skill) => skill.category === category
            );
            const narrowCols =
              skills.length <= 3 ? skills.length : Math.ceil(skills.length / 2);
            return (
              <GroupItems key={category} $cols={narrowCols}>
                {skills.map((skill) => (
                  <SkillItem key={skill.id} {...skill} />
                ))}
              </GroupItems>
            );
          })}
        </SkillGroups>
      </Container>
    </Section>
  );
};
