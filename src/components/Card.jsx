import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import imageSrc from "../assets/react.svg";

const Card = ({ title, position, duration, responsiblity, CardColor }) => {
  return (
    <CardContainer $CardColor={CardColor}>
      <CardHeader>
        <LeftGroup>
          <ImageContainer src={imageSrc} alt="Company Logo" />
          <TitlePositionContainer>
            <Title>{title}</Title>
            <Position>{position}</Position>
          </TitlePositionContainer>
        </LeftGroup>

        <Duration>{duration}</Duration>
      </CardHeader>
      <Responsibility>{responsiblity}</Responsibility>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  background-color: ${(props) => props.$CardColor || theme.colors.blue20};
  padding: 20px 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 1200px;
  border: 1px solid ${theme.colors.grey20};
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LeftGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const TitlePositionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.img`
  width: 40px;
  height: 40px;
  // margin-right: 10px;
`;
const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.black};
  margin-bottom: 5px;
`;

const Position = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: ${theme.colors.black};
  margin-bottom: 5px;
`;

const Duration = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.colors.grey};
  margin-bottom: 10px;
`;

const Responsibility = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: ${theme.colors.black};
  // margin-left: 20px;
`;
