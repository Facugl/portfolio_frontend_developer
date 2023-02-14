import { contactData } from "../../data/ContactData";
import { Container } from "../../globalStyles";
import { InfoWrapper, SocialWrapper, Copyright } from "./styles";
import { LinksSocialMedia } from "../../common/LinkSocialMedia/index";

export const Footer = () => {
  const age = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <InfoWrapper>
          <SocialWrapper>
            {contactData?.map((item) => (
              <LinksSocialMedia key={item.id} {...item} />
            ))}
          </SocialWrapper>
          <Copyright>
            Copyright &copy; {age} Facundo Luna. All rights reserved.
          </Copyright>
        </InfoWrapper>
      </Container>
    </footer>
  );
};
