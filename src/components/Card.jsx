import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

const Card = ({ title, position, duration, responsiblity, CardColor, Icon, IconColor, ImageSrc }) => {
  return (
    <CardContainer $CardColor={CardColor}>
      <CardHeader>
        <LogoContainer>
          {Icon || ImageSrc ? (
            <ImageWrapper $bgColor={IconColor || theme.colors.grey20}>
              {typeof Icon === "function" ? (
                <Icon size={28} color={theme.colors.black} />
              ) : ImageSrc ? (
                <StyledImage src={ImageSrc} alt={title} />
              ) : null}
            </ImageWrapper>
          ) : null}
        </LogoContainer>

        <ContentWrapper>
          <TitlePosition>
            <Title>{title}</Title>
            {position && <Position>{position}</Position>}
          </TitlePosition>

          {duration && <Duration>{duration}</Duration>}
        </ContentWrapper>
      </CardHeader>

      <Responsibility>{responsiblity}</Responsibility>
    </CardContainer>
  );
};

export default Card;

// Styled Components – Mobile-First & Responsive
const CardContainer = styled.div`
  background-color: ${(props) => props.$CardColor || theme.colors.blue20};
  padding: 24px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.grey20};
  width: 100%;
  max-width: 1000px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
`;

const LogoContainer = styled.div`
  flex-shrink: 0;
`;

const ImageWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${(props) => props.$bgColor || theme.colors.grey20};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TitlePosition = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.black};
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Position = styled.p`
  margin: 4px 0 0;
  font-size: 15px;
  color: ${theme.colors.grey};
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Duration = styled.p`
  margin: 0;
  font-size: 15px;
  color: ${theme.colors.grey};
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
    align-self: flex-start;
    background: rgba(0, 0, 0, 0.05);
    padding: 4px 10px;
    border-radius: 8px;
  }
`;

const Responsibility = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: ${theme.colors.black};
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;