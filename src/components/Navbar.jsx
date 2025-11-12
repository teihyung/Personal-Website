import styled from "styled-components";
import { theme } from "../theme";

export default function Navbar() {
  return (
    <Nav>
      <Inner>
        <Logo>Chris Lee</Logo>

        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Experience</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Inner>
    </Nav>
  );
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: ${theme.colors.bg};
  color: ${theme.colors.text};
  padding: 1rem ${theme.padding};
  font-weight: bold;
  z-index: 1000;
`;

const Inner = styled.div`
  display: flex;
  padding: 0 10vh;
  margin: 0 20px;
  justify-content: space-between;
`;

const Logo = styled.h3`
  color: ${theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Menu = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;
    align-items: center;
`;

const MenuItem = styled.p`
    margin: 0;
    padding: 0;
    cursor: pointer;
    font-size: 16px;
`;
