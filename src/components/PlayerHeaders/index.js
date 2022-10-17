import React, { useState } from "react";
import {
  PlayerHeaderWrapper,
  PlayerHeaderRow,
  NameHeaderWrapper,
  NameHeaderText,
  ScoreNameWrapper,
  ScoreNameText,
} from "./styles";

function PlayerHeaders({ amountOfScores, hasTeams }) {
  let nameText = hasTeams === false ? "Players" : "Teams";
  const scoreNames = ["Score1", "Score2", "Score3", "Score4"];

  return (
    <PlayerHeaderWrapper>
      <PlayerHeaderRow>
        <NameHeaderWrapper>
          <NameHeaderText>{nameText}</NameHeaderText>
        </NameHeaderWrapper>

        <ScoreNameWrapper color={2} amountOfScores={amountOfScores}>
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
      </PlayerHeaderRow>
    </PlayerHeaderWrapper>
  );
}

export default PlayerHeaders;
