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
  border: 3px solid transparent;
  border-radius: 10px;
  transition: transform 0.2s, opacity 1.2s;
  overflow: hidden;

  background: ${darkColor};

  border-color: ${({ color }) =>
    color && !color.includes(",") ? color : primaryColor};

  ${({ color }) =>
    color &&
    color.includes(",") &&
    `
      border: none;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 3px solid transparent;
        border-radius: 10px;
        background: linear-gradient(45deg, ${color}) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: 1;
      }
    `}

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
    color: #fff;

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
