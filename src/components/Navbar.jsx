import styled from "styled-components";
import { theme } from "../theme";

export default function Navbar() {
  return (
    <Nav>
      <Inner>My Personal Website</Inner>
    </Nav>
  );
  
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: ${theme.colors.navBg};
  color: ${theme.colors.navText};
  padding: 1rem ${theme.padding};
  font-weight: bold;
  z-index: 1000;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;