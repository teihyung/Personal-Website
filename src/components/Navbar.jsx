import { useState } from "react";
import styled from "styled-components";
import { BiMenu, BiX } from "react-icons/bi";
import { theme } from "../theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <Nav>
      <Inner>
        <Logo href="/">Chris Lee</Logo>

        {/* Desktop Menu */}
        <DesktopMenu>
          <MenuItem href="#home">Home</MenuItem>
          <MenuItem href="#experience">Experience</MenuItem>
          <MenuItem href="#projects">Projects</MenuItem>
          <MenuItem href="#contact">Contact</MenuItem>
        </DesktopMenu>

        {/* Mobile Hamburger */}
        <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <BiX size={32} /> : <BiMenu size={32} />}
        </HamburgerButton>
      </Inner>

      {/* Mobile Dropdown Menu */}
      <MobileDropdown $isOpen={isOpen}>
        <MobileMenuList>
          <MobileMenuItem href="#home" onClick={closeMenu}>Home</MobileMenuItem>
          <MobileMenuItem href="#experience" onClick={closeMenu}>Experience</MobileMenuItem>
          <MobileMenuItem href="#projects" onClick={closeMenu}>Projects</MobileMenuItem>
          <MobileMenuItem href="#contact" onClick={closeMenu}>Contact</MobileMenuItem>
        </MobileMenuList>
      </MobileDropdown>
    </Nav>
  );
}

// Styled Components (Updated)

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: ${theme.colors.bg};
  color: ${theme.colors.text};
  padding: 1rem ${theme.padding};
  font-weight: bold;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5vw;

  @media (max-width: 1100px) {
    padding: 0 4vw;
  }
`;

const Logo = styled.a`
  color: ${theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text};
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 1100px) {
    display: block;
  }
`;

// Dropdown Menu (appears below navbar)
const MobileDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.bg};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 999;

  ${({ $isOpen }) =>
    $isOpen &&
    `
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
`;

const MobileMenuList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 5vw;
  gap: 1rem;
`;

const MobileMenuItem = styled.a`
  color: ${theme.colors.text};
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(4px);
  }
`;