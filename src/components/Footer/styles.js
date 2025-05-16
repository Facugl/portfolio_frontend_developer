import styled from "styled-components";
import { grayColor } from "../../globalStyles";

export const InfoWrapper = styled.div`
  color: ${grayColor};
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin: 5rem auto 1rem;
  gap: 2rem;
  padding: 0.5rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  z-index: 99;
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
  z-index: 99;
`;
