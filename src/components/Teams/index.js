import React, { useState, useEffect } from "react";
import {
  TeamList,
  TeamWrapper,
  NameWrapper,
  ScoreWrapper,
  ScoreText,
} from "./styles";
import PlayerHeaders from "../PlayerHeaders";

function Teams({ players, isTeamsEnabled, amountOfScores }) {
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
    <TeamList isTeamsEnabled={isTeamsEnabled}>
      <PlayerHeaders amountOfScores={amountOfScores} hasTeams={true} />
      <tbody>
        {teams
          .sort((a, b) => (a.score1 < b.score1 ? 1 : -1))
          .map((team, index) => (
            <TeamWrapper key={team.name}>
              <NameWrapper>{team.name}</NameWrapper>
              <ScoreWrapper color={2}>{team.score1}</ScoreWrapper>
              {amountOfScores >= 2 && (
                <ScoreWrapper color={1}>{team.score2}</ScoreWrapper>
              )}
              {amountOfScores >= 3 && (
                <ScoreWrapper color={2}>{team.score3}</ScoreWrapper>
              )}
              {amountOfScores >= 4 && (
                <ScoreWrapper color={1}>{team.score4}</ScoreWrapper>
              )}
            </TeamWrapper>
          ))}
      </tbody>
    </TeamList>
  );
}
export default Teams;
