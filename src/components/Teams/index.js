import React, { useState, useEffect } from "react";
import {
  TeamList,
  TeamWrapper,
  NameWrapper,
  NameText,
  ScoreWrapper,
  ScoreText,
  ScoresWrapper,
} from "./styles";

function Teams({ players, isTeamsEnabled, amountOfScores, editmode }) {
  const [teams, setTeams] = useState([]);

  const countTeamScores = () => {
    let tempTeams = [];
    players.forEach((player) => {
      if (!tempTeams.filter((t) => t.name === player.team).length > 0) {
        tempTeams.push({
          name: player.team,
          score1: player.score1,
          score2: player.score2,
          score3: player.score3,
          score4: player.score4,
        });
      } else if (tempTeams.filter((t) => t.name === player.team).length > 0) {
        tempTeams = tempTeams.map((team) =>
          team.name === player.team
            ? {
                ...team,
                score1: team.score1 + player.score1,
                score2: team.score2 + player.score2,
                score3: team.score3 + player.score3,
                score4: team.score4 + player.score4,
              }
            : team
        );
      }
    });
    setTeams(tempTeams);
  };

  useEffect(() => {
    countTeamScores();
  }, [JSON.stringify(players)]);

  return (
    <TeamList>
      {teams
        .sort((a, b) => (a.score1 < b.score1 ? 1 : -1))
        .map((team, index) => (
          <TeamWrapper visibility={isTeamsEnabled}>
            <NameWrapper>
              <NameText editmode={editmode}>{team.name}</NameText>
            </NameWrapper>
            <ScoresWrapper>
              <ScoreWrapper color={2}>
                <ScoreText editmode={false}>{team.score1}</ScoreText>
              </ScoreWrapper>
              {amountOfScores >= 2 && (
                <ScoreWrapper color={1}>
                  <ScoreText editmode={false}>{team.score2}</ScoreText>
                </ScoreWrapper>
              )}
              {amountOfScores >= 3 && (
                <ScoreWrapper color={2}>
                  <ScoreText editmode={false}>{team.score3}</ScoreText>
                </ScoreWrapper>
              )}
              {amountOfScores >= 4 && (
                <ScoreWrapper color={1}>
                  <ScoreText editmode={false}>{team.score4}</ScoreText>
                </ScoreWrapper>
              )}
            </ScoresWrapper>
          </TeamWrapper>
        ))}
    </TeamList>
  );
}
export default Teams;
