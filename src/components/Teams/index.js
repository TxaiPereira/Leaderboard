import React, { useState, useEffect } from "react";
import { TeamList, TeamWrapper, NameWrapper, ScoreWrapper } from "./styles";
import PlayerHeaders from "../PlayerHeaders";

function Teams({ players, isTeamsEnabled, amountOfScores, scoreNames }) {
  const [teams, setTeams] = useState([]);

  const countTeamScores = () => {
    let tempTeams = [];
    players.forEach((player) => {
      if (!tempTeams.filter((t) => t.name === player.team).length > 0) {
        // If the players team doesnt exist yet, add it
        tempTeams.push({
          name: player.team,
          scores: player.scores,
        });
      } else if (tempTeams.filter((t) => t.name === player.team).length > 0) {
        // If the players team does exist yet, add their score to the team
        tempTeams = tempTeams.map((team) =>
          team.name === player.team
            ? {
                ...team,
                scores: [
                  team.scores[0] + player.scores[0],
                  team.scores[1] + player.scores[1],
                  team.scores[2] + player.scores[2],
                  team.scores[3] + player.scores[3],
                ],
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
      <PlayerHeaders
        amountOfScores={amountOfScores}
        hasTeams={true}
        scoreNames={scoreNames}
      />
      <tbody>
        {teams
          .sort((a, b) => (a.scores[0] < b.scores[0] ? 1 : -1))
          .map((team) => (
            <TeamWrapper key={team.name}>
              <NameWrapper>{team.name}</NameWrapper>
              <ScoreWrapper color={2}>{team.scores[0]}</ScoreWrapper>
              {amountOfScores >= 2 && (
                <ScoreWrapper color={1}>{team.scores[1]}</ScoreWrapper>
              )}
              {amountOfScores >= 3 && (
                <ScoreWrapper color={2}>{team.scores[2]}</ScoreWrapper>
              )}
              {amountOfScores >= 4 && (
                <ScoreWrapper color={1}>{team.scores[3]}</ScoreWrapper>
              )}
            </TeamWrapper>
          ))}
      </tbody>
    </TeamList>
  );
}
export default Teams;
