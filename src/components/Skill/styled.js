import styled from "styled-components";
import { darkColor, primaryColor } from "../../globalStyles";

export const Skill = styled.div`
  width: 120px;
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: double 3px transparent;
  border-image-slice: 1;
  border-width: 3px;
  background-image: ${({ color }) =>
    color
      ? `linear-gradient(${darkColor}, ${darkColor}), linear-gradient(45deg, ${color})`
      : primaryColor};
  border-radius: 10px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: transform 0.2s, opacity 1.2s;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 104px;
  }

  @media screen and (max-width: 480px) {
    width: 90px;
    height: 80px;
  }

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    z-index: 99;

    @media screen and (max-width: 768px) {
      font-size: 10px;
    }

    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }

  img {
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 99;
    border-radius: 5px;
  }
`;
