import styled from "styled-components";
import { Container, darkColor, primaryColor } from "../../globalStyles";
import { motion } from "framer-motion";

export const Hero = styled.main`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 999;
`;

export const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: ${darkColor};
  overflow: hidden;

  canvas.connecting-dots {
    height: 100%;
    width: 100%;
  }
`;

export const TextWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  .Typewriter__wrapper {
    font-size: clamp(1rem, 5vw, 3em);
    letter-spacing: 2px;
    margin: 2rem 0 3rem;
    color: ${primaryColor};
`;

export const H1 = styled(motion.h1)`
  font-size: clamp(1rem, 5vw, 3em);
  font-weight: normal;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  font-size: clamp(1rem, 5vw, 3em);
  letter-spacing: 2px;
  color: #fff;
`;

export const MainBg = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
`;
