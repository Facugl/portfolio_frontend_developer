import styled from "styled-components";
import { motion } from "framer-motion";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Paragraph = styled(motion.p)`
  text-align: center;
  margin-top: 1rem;
  position: relative;
  z-index: 9;
`;

export const ProjectsWrapper = styled.div`
  margin: 5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7rem;

  @media screen and (max-width: 768px) {
    margin: 2.5rem 0;
    gap: 5rem;
  }

  @media screen and (max-width: 640px) {
    margin: 2rem 0;
  }

  @media screen and (max-width: 400px) {
    margin: 3.5rem 0;
  }
`;
