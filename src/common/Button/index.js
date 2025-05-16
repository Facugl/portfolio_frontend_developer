import styled from "styled-components";
import { darkColor, primaryColor } from "../../globalStyles";

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: space nowrap;
  padding: 12px 24px;
  font-weight: 600;
  color: ${primaryColor};
  font-size: 1rem;
  border: none;
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
    width: calc(100% + 4px);
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
