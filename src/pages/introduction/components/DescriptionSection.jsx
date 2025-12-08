import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Button from "../../../components/Button";

const DescriptionSection = () => {
  return (
    <MainContainer>
      <DescriptionContainer>
        <WelcomeTextContainer>
          <p>Welcome to my Page</p>
        </WelcomeTextContainer>

        <Title>
          Hello, my name is <span>Chris</span>
        </Title>

        <SubTitle>Developer with 1 year of experience</SubTitle>

        <DescriptionText>
          I'm a passionate developer focused on creating innovative solutions
          and delivering high-quality code. My journey in software development
          has equipped me with diverse skills across multiple technologies and
          frameworks.
        </DescriptionText>

        <ButtonContainer>
          <Button buttonColor={theme.colors.blue} buttonText="Learn More" />
          <Button buttonColor={theme.colors.grey} buttonText="Contact Me" />
        </ButtonContainer>
      </DescriptionContainer>
    </MainContainer>
  );
};

export default DescriptionSection;


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.navy};
  padding: 0 5vh;
`;

const WelcomeTextContainer = styled.div`
  background-color: ${theme.colors.blue20};
  padding: 6px 12px;
  border-radius: 10px;
  align-self: flex-start;

  p {
    margin: 0;
    color: ${theme.colors.blue};
    font-size: 12px; // Small badge — stays fixed
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20vh 24px; 
  gap: 16px;

  @media (max-width: 1100px) {
    padding: 15vh 24px;
  }

  @media (max-width: 600px) {
    padding: 12vh 16px;
    gap: 12px;
    min-height: 60vh;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${theme.colors.bg};
  letter-spacing: 0.5px;
  line-height: 1.1;

  span {
    color: ${theme.colors.blue};
  }

  @media (max-width: 600px) {
    font-size: 36px;
  }

  @media (max-width: 400px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.p`
  font-size: 24px;
  color: ${theme.colors.bg};
  margin: 8px 0;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const DescriptionText = styled.p`
  font-size: 17px;
  color: ${theme.colors.grey};
  line-height: 1.7;
  max-width: 620px;
  font-weight: 300;
  letter-spacing: 0.3px;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 1.65;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 12px;
    margin-top: 20px;
  }
`;
