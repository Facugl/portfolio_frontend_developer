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

export const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

export default GlobalStyle;
