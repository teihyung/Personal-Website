import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Button from "../../../components/Button";

const DescriptionSection = () => {
  return (
    <MainContainer>
      <WelcomeTextContainer>
        <p>Welcome to my Page</p>
      </WelcomeTextContainer>
      <Title>
        Hello, my name is <span>Chris</span>
      </Title>
      <SubTitle>Developer with 1 year of experience</SubTitle>
      <DescriptionText>
        I'm a passionate developer focused on creating innovative solutions and
        delivering high-quality code. My journey in software development has
        equipped me with diverse skills across multiple technologies and
        frameworks.
      </DescriptionText>

      <ButtonContainer>
        <Button buttonColor={theme.colors.blue} buttonText={"Learn More"}/>
        <Button buttonColor={theme.colors.grey} buttonText={"Contact Me"} />
    </ButtonContainer>
    </MainContainer>
    
  );
};

export default DescriptionSection;

const WelcomeTextContainer = styled.div`
  background-color: ${theme.colors.blue20};
  padding: 5px 10px;
  border-radius: 10px;
  align-self: flex-start;
  p {
    margin: 0;
    color: ${theme.colors.blue};
    font-size: 12px;
    font-weight: 600;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20vh 20vh;
  min-height: 40vh;
  width: 100%;
  gap: 10px;
  background-color: ${theme.colors.navy};
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${theme.colors.bg};
  letter-spacing: 0.5px;
  span {
    color: ${theme.colors.blue};
  }
`;

const SubTitle = styled.p`
  font-size: 20px;
  color: ${theme.colors.bg};
  margin-top: 10px;
  font-weight: 300;
`;

const DescriptionText = styled.p`
  font-size: 15px;
  color: ${theme.colors.grey};
  margin-top: 10px;
  max-width: 600px;
  letter-spacing: 0.2px;
  font-weight: 200;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
`;