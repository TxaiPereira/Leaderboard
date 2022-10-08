import React, { useState } from "react";
import {
  PlayerHeaderWrapper,
  NameHeaderWrapper,
  NameHeaderText,
  ScoreNameWrapper,
  ScoreNameText,
  ScoreNamesWrapper,
} from "./styles";

function PlayerHeaders({ visibility, amountOfScores }) {
  const [scoreNames, setScoreNames] = useState([
    "Score1",
    "Score2",
    "Score3",
    "Score4",
  ]);
  let [nameText, setNameText] = useState("Players");

  // Changes the name of one of the scores that are being tracked
  const changeScoreName = (newScoreName, index) => {
    const newScoreNames = [...scoreNames];
    newScoreNames[index] = newScoreName;
    setScoreNames(newScoreNames);
  };

  return (
    <PlayerHeaderWrapper>
      <NameHeaderWrapper>
        <NameHeaderText>{nameText}</NameHeaderText>
      </NameHeaderWrapper>

      <ScoreNamesWrapper>
        <ScoreNameWrapper
          color={2}
          editmode={visibility}
          amountOfScores={amountOfScores}
        >
          <ScoreNameText>{scoreNames[0]}</ScoreNameText>
        </ScoreNameWrapper>

        {amountOfScores >= 2 && (
          <ScoreNameWrapper color={1} amountOfScores={amountOfScores}>
            <ScoreNameText>{scoreNames[1]}</ScoreNameText>
          </ScoreNameWrapper>
        )}
        {amountOfScores >= 3 && (
          <ScoreNameWrapper color={2} amountOfScores={amountOfScores}>
            <ScoreNameText>{scoreNames[2]}</ScoreNameText>
          </ScoreNameWrapper>
        )}
        {amountOfScores >= 4 && (
          <ScoreNameWrapper color={1} amountOfScores={amountOfScores}>
            <ScoreNameText>{scoreNames[3]}</ScoreNameText>
          </ScoreNameWrapper>
        )}
      </ScoreNamesWrapper>
    </PlayerHeaderWrapper>
  );
}

export default PlayerHeaders;
