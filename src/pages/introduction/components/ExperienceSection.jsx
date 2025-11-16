import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../../components/Card";
import { BiBuilding, BiSolidGraduation } from "react-icons/bi";
import TerrazeroLogo from "../../../assets/terrazerotech_logo.jpeg";
import COGLogo from "../../../assets/communityofguardians_logo.jpeg";
import AgoraArtLogo from "../../../assets/agoraart_logo.jpeg";
import BCITLogo from "../../../assets/bcit_logo.png";

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
        CardColor={theme.colors.purple20}
        responsiblity={
          "Developed and maintained user interfaces using React.js, ensuring responsive design and optimal performance across various devices."
        }
        ImageSrc={TerrazeroLogo}
        // IconColor={theme.colors.purple}
      />

      <Card
        title={"Community of Guardians"}
        position={"Full Stack Developer Intern"}
        duration={"Apr 2024 - May 2024"}
        CardColor={theme.colors.lightGreen20}
        responsiblity={
          "Collaborated on building web applications using MERN stack, enhancing user experience and implementing new features based on client requirements."
        }
        // Icon={BiBuilding}
        ImageSrc={COGLogo}
        // IconColor={theme.colors.lightGreen}
      />

      <Card
        title={"Agora Art Technologies"}
        position={"Full Stack Developer Intern"}
        duration={"Jan 2024 - Apr 2024"}
        CardColor={theme.colors.navy20}
        responsiblity={
          "Developed a functionality that resizes single or multiple user-uploaded images before sending them to the backend, and then forwards the user data to the ChatGPT API for generating image descriptions."
        }
        // Icon={BiBuilding}
        ImageSrc={AgoraArtLogo}
        IconColor={theme.colors.navy}
      />


      <Card
        title={"British Columbia Institute of Technology"}
        position={"Computer Systems Technology Diploma"}
        duration={"Sep 2022 - May 2024"}
        CardColor={theme.colors.blue20}
        responsiblity={
          "Gained comprehensive knowledge in computer systems, full stack programming, database management, preparing for a career in technology."
        }
        // Icon={BiSolidGraduation}
        ImageSrc={BCITLogo}
        IconColor={theme.colors.navy}
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
