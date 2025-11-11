import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../../components/Card";

const ExperienceSection = () => {
  return (
    <ExperienceContainer>
      <Header>
        <Title>Experience</Title>
        <SubTitle>My Professional Journey and Education</SubTitle>
      </Header>

      <Card
        title={"Terrazero Technologies"}
        position={"Frontend Developer"}
        duration={"Mar 2025 - Sep 2025"}
        CardColor={theme.colors.blue20}
        responsiblity={
          "Developed and maintained user interfaces using React.js, ensuring responsive design and optimal performance across various devices."
        }
      />
    </ExperienceContainer>
  );
};

export default ExperienceSection;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vh 5vh;
  min-height: 40vh;
  width: 100%;
  gap: 10px;
`;

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
