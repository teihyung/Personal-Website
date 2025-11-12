import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Card = ({ title, position, duration, responsiblity, CardColor, Icon, IconColor }) => {
  return (
    <CardContainer $CardColor={CardColor}>
      <CardHeader>
        <LeftGroup>
          {Icon && (
            <ImageContainer width={"40px"} height={"40px"} $bgColor={IconColor || theme.colors.grey20}>
              <Icon size={30} color={theme.colors.bg} />
            </ImageContainer>
          )}

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
  border-radius: 15px;
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
  padding: 2px 0px;
`;

const ImageContainer = styled.div`
  width: ${(props) => props.width || "40px"};
  height: ${(props) => props.height || "40px"};
  border-radius: 5px;
  background-color: ${(props) => props.$bgColor || theme.colors.grey20};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.black};
`;

const Position = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: ${theme.colors.black};
  margin-left: 2px;
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
