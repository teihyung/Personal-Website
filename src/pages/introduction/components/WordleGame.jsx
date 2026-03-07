import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WordleGame = () => {
  const answer = "HELLO";

  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [guessedWord, setGuessedWord] = useState(
    Array(5).fill(Array(5).fill({ letter: "", color: "white" })),
  );

  const setBoxColor = (rowIndex, answer) => {
    setGuessedWord((prevGrid) => {
      const newGrid = [...prevGrid];
      const newRow = [...newGrid[rowIndex]];

      for (let i = 0; i < 5; i++) {
        if (newRow[i].letter === answer[i]) {
          newRow[i] = { ...newRow[i], color: "green" };
        } else if (answer.includes(newRow[i].letter)) {
          newRow[i] = { ...newRow[i], color: "yellow" };
        } else {
          newRow[i] = { ...newRow[i], color: "gray" };
        }
      }

      newGrid[rowIndex] = newRow;
      return newGrid;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (gameOver) return;
      if (currentRow === 5) return;

      // BACKSPACE
      if (key === "Backspace") {
        const newGrid = [...guessedWord];
        const newRow = [...newGrid[currentRow]];
        let newCol = currentCol;

        // move cursor back if needed
        if (newCol > 0 && newRow[newCol].letter === "") {
          newCol = newCol - 1;
        }

        newRow[newCol] = { ...newRow[newCol], letter: "" };
        newGrid[currentRow] = newRow;

        setGuessedWord(newGrid);
        setCurrentCol(newCol);
        return;
      }

      if (!/^[a-zA-Z]$/.test(key)) return;

      const newGrid = [...guessedWord];
      const newRow = [...newGrid[currentRow]];

      newRow[currentCol] = { letter: key.toUpperCase(), color: "white" };
      newGrid[currentRow] = newRow;

      setGuessedWord(newGrid);

      if (currentCol === 4) {
        const guess = newRow.map((cell) => cell.letter).join("");

        if (guess === answer.toUpperCase()) {
          setGameOver(true);
          console.log("Congratulations! You've guessed the word!");
        }

        setBoxColor(currentRow, answer.toUpperCase());
        setCurrentCol(0);
        setCurrentRow(currentRow + 1);
      } else {
        setCurrentCol(currentCol + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentRow, currentCol, guessedWord]);

  return (
    <GameContainer>
      <h2>Wordle Game</h2>
      <p>
        This is built for fun and practice React skill!{" "}
        {"(use keyboard to insert word)"}
      </p>

      <WordGrid>
        {guessedWord.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((cell, colIndex) => (
              <LetterBox key={colIndex} color={cell.color}>
                {cell.letter}
              </LetterBox>
            ))}
          </Row>
        ))}
      </WordGrid>
    </GameContainer>
  );
};

export default WordleGame;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vh 5vh;
  min-height: 40vh;
  width: 100%;
  gap: 40px;
`;

const WordGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6px;
`;

const LetterBox = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: ${(props) => props.color || "white"};
`;

const Row = styled.div`
  display: flex;
  gap: 6px;
`;
