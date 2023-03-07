import { useState } from "react";
import { navbarData } from "../../data/NavbarData";
import { Container } from "../../globalStyles";
import { Nav, NavMenu, NavLinks, NavItem } from "./styles";

const Navbar = ({ hide }) => {
  const [show, setShow] = useState(false);

  return (
    <Nav hide={hide}>
      {!hide && (
        <NavMenu hide={hide} show={show}>
          {navbarData?.map((el, index) => (
            <NavItem key={index}>
              <NavLinks
                spy={true}
                duration={500}
                smooth={true}
                exact="true"
                offset={-79}
                onClick={() => setShow(false)}
                to={el.to}
              >
                {el.text}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      )}
    </Nav>
  );
};

export default Navbar;
