import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { darkColor, grayColor, primaryColor } from "../../globalStyles";

export const Nav = styled.nav`
  background: ${({ hide }) => (hide ? "transparent" : darkColor)};
  height: 80px;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 9999;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 2.5%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  width: 100%;

  &:hover {
    border: none;
  }
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &.active {
    text-shadow: 0 0 20px ${primaryColor}, 0 0 15px ${primaryColor};
    border-bottom: 2px solid ${primaryColor};
  }

  &:hover {
    color: ${grayColor};
    transition: all 0.3s ease;
  }
`;
