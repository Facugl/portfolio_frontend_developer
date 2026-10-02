import { EmailLink, Paragraph } from "./styles";
import { Container } from "../../globalStyles";
import { Section } from "../../common/Section";
import { useInView } from "react-intersection-observer";
import FormWithRef from "../../components/Form";
import { TitleSection } from "../../common/TitleSection";
import { reveal } from "../../utils/animations";

export const Contact = () => {
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  return (
    <Section ref={ref} id="contact">
      <Container>
        <TitleSection
          {...reveal()}
        >
          Contact
        </TitleSection>
        <Paragraph
          {...reveal()}
        >
          Interested in working together or discussing an opportunity? Feel free
          to reach out.
          <br />
          Email me at{" "}
          <EmailLink href="mailto:facundolunaok@gmail.com">
            facundolunaok@gmail.com
          </EmailLink>{" "}
          or use the form below.
        </Paragraph>
        <FormWithRef />
      </Container>
    </Section>
  );
};
