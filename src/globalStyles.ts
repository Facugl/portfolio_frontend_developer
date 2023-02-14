import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

export const darkColor = "#0F1013";
export const darkAlphaColor = "#A5A5A517";
export const primaryColor = "#3EA6FF";
export const grayColor = "#FFFFFFB8";
export const violetColor = "#A64AEE";
export const greenColor = "#387D5C";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }


  body {
    background-color: ${darkColor};
    overflow-x: hidden;
  }

  h1, h2, h3 {
    color: #fff;
  }

  p {
    color: ${grayColor}
  }
`;

export const TitleSection = styled(motion.h2)`
  font-size: clamp(2.3rem, 6vw, 3.5rem);
  text-align: center;
`;

export const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

export const Link = styled(motion.a)`
  text-decoration: none;
  font-size: 2rem;
  color: #e8eddf;
  cursor: pointer;
  z-index: 99;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: space nowrap;
  padding: 12px 24px;
  font-weight: 600;
  color: ${primaryColor};
  font-size: 1rem;
  outline: none;
  border: 2px solid ${primaryColor};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  letter-spacing: 1px;

  &:before {
    content: "";
    background: ${primaryColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
  }

  &:hover:before {
    height: 200%;
  }

  &:hover {
    z-index: 1;
    color: ${darkColor};
  }

  &:disabled {
    opacity: 0.35;
    pointer-events: none;
  }
`;

export default GlobalStyle;
