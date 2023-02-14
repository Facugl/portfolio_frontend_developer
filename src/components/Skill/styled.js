import styled from "styled-components";
import { darkColor, primaryColor } from "../../globalStyles";

export const Skill = styled.div`
  width: 7.5rem;
  height: 80px;
  border: 4px solid transparent;
  position: relative;
  background: ${darkColor};
  border-radius: 17px;
  background-clip: padding-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  @media screen and (max-width: 480px) {
    gap: 0.5rem;
  }

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 11px;

    @media screen and (max-width: 768px) {
      font-size: 10px;
    }

    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }

  &::before {
    content: "";
    background-image: ${({ color }) =>
      color ? `linear-gradient(45deg, ${color})` : primaryColor};
    position: absolute;
    margin: -3px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 1rem;
  }

  img {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 6.5rem;
  }

  @media screen and (max-width: 480px) {
    width: 90px;
    height: 80px;
  }
`;
