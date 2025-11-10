// src/components/Layout.tsx
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Wrapper>
      <Navbar />
      <Main>
        <Outlet />   {/* ← page content goes here */}
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.bg};
`;

const Main = styled.main`
  flex: 1;
//   padding: 5vh;
  box-sizing: border-box;
`;