import React from "react";
import DescriptionSection from "./components/DescriptionSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import WordleGame from "./components/WordleGame";

const Introduction = () => {
  return (
    <>
      <DescriptionSection />
      <ExperienceSection />
      {/* <ProjectSection /> */}
      <WordleGame />
    </>
  );
};

export default Introduction;
