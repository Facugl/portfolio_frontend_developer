import { Paragraph } from "./styles";
import { Container } from "../../globalStyles";
import { Section } from "../../common/Section";
import { useInView } from "react-intersection-observer";
import FormWithRef from "../../components/Form";
import { TitleSection } from "../../common/TitleSection";

export const Contact = () => {
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  return (
    <Section ref={ref} id="contact">
      <Container>
        <TitleSection
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </TitleSection>
        <Paragraph
          initial={{ opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          I would like to meet you and work together, write me and I will reply
          as soon as I can.
        </Paragraph>
        <FormWithRef />
      </Container>
    </Section>
  );
};
