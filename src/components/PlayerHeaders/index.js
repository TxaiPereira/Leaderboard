import React, { useState } from "react";
import {
  PlayerHeaderWrapper,
  NameHeaderWrapper,
  NameHeaderInput,
  NameHeaderText,
  ScoreNameWrapper,
  ScoreNameInput,
  ScoreNameText,
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
        <NameHeaderInput
          visibility={visibility}
          maxLength={32}
          type="text"
          placeholder="Examples: Players, Participants"
          onChange={(e) => setNameText(e.target.value)}
        />
        <NameHeaderText visibility={visibility}>{nameText}</NameHeaderText>
      </NameHeaderWrapper>

      <ScoreNameWrapper color={2} editmode={visibility}>
        <ScoreNameInput
          visibility={visibility}
          maxLength={10}
          type="text"
          placeholder="Score 1"
          onChange={(e) => changeScoreName(e.target.value, 0)}
        />
        <ScoreNameText visibility={visibility}>{scoreNames[0]}</ScoreNameText>
      </ScoreNameWrapper>

      {amountOfScores >= 2 && (
        <ScoreNameWrapper color={1}>
          <ScoreNameInput
            visibility={visibility}
            maxLength={10}
            type="text"
            placeholder="Score 2"
            onChange={(e) => changeScoreName(e.target.value, 1)}
          />
          <ScoreNameText visibility={visibility}>{scoreNames[1]}</ScoreNameText>
        </ScoreNameWrapper>
      )}
      {amountOfScores >= 3 && (
        <ScoreNameWrapper color={2}>
          <ScoreNameInput
            visibility={visibility}
            maxLength={10}
            type="text"
            placeholder="Score 3"
            onChange={(e) => changeScoreName(e.target.value, 2)}
          />
          <ScoreNameText visibility={visibility}>{scoreNames[2]}</ScoreNameText>
        </ScoreNameWrapper>
      )}
      {amountOfScores >= 4 && (
        <ScoreNameWrapper color={1}>
          <ScoreNameInput
            visibility={visibility}
            maxLength={10}
            type="text"
            placeholder="Score 4"
            onChange={(e) => changeScoreName(e.target.value, 3)}
          />
          <ScoreNameText visibility={visibility}>{scoreNames[3]}</ScoreNameText>
        </ScoreNameWrapper>
      )}
    </PlayerHeaderWrapper>
  );
}

export default PlayerHeaders;
