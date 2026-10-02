import { ContactSection, EmailLink, Paragraph } from "./styles";
import { Container } from "../../globalStyles";
import FormWithRef from "../../components/Form";
import { TitleSection } from "../../common/TitleSection";
import { Footer } from "../../components/Footer";
import { reveal } from "../../utils/animations";

export const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <TitleSection {...reveal()}>Contact</TitleSection>
        <Paragraph {...reveal()}>
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
      <Footer />
    </ContactSection>
  );
};
