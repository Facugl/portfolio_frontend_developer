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
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  letter-spacing: 1px;
  transition: color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: ${primaryColor};
    z-index: -1;
    clip-path: inset(50% 0 50% 0);
    transition: clip-path 0.6s ease;
  }

  &:hover {
    color: ${darkColor};
  }

  &:hover:before {
    clip-path: inset(0 0 0 0);
  }

  &:disabled {
    opacity: 0.35;
    pointer-events: none;
  }
`;
