import { motion } from "framer-motion";
import styled from "styled-components";

export const TitleSection = styled(motion.h2)`
  font-size: clamp(2.3rem, 6vw, 3.5rem);
  text-align: center;
  position: relative;
  z-index: 9;
`;
