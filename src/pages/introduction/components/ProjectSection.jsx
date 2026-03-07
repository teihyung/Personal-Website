import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

const ProjectSection = () => {
  return (
    <>
        <ProjectContainer>
            <Header>
                <Title>Projects</Title>
                <SubTitle>Some of my personal and collaborative works</SubTitle>
            </Header>
        </ProjectContainer>
    </>
  );
};

export default ProjectSection;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.black};
  letter-spacing: 0.5px;
`;

const SubTitle = styled.p`
  font-size: 15px;
  color: ${theme.colors.black};
  margin-top: 10px;
  font-weight: 300;
`;

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh 5vh;
    min-height: 40vh;
    width: 100%;
    gap: 40px;
`;