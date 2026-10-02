import styled from "styled-components";
import { motion } from "framer-motion";
import { primaryColor } from "../../globalStyles";

export const EmailLink = styled.a`
  color: ${primaryColor};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Paragraph = styled(motion.p)`
  margin-top: 1rem;
  line-height: 1.7rem;
  text-align: center;
  position: relative;
  z-index: 9;
`;
