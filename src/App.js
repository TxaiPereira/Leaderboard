import "./App.css";
import React, { useState } from "react";
import PlayerHeaders from "./components/PlayerHeaders";
import Teams from "./components/Teams";
import {
  Body,
  PlayerList,
  NewPlayerWrapper,
  NewPlayerInput,
  AddPlayerButton,
  SliderCheckbox,
  SliderLabel,
  Slider,
  OptionWrapper,
  Label,
  NumberInput,
  SettingsWrapper,
  NewTeamInput,
} from "./styles";

import {
  PlayerWrapper,
  NameWrapper,
  DeleteButton,
  NameText,
  ScoreWrapper,
  MinusButton,
  ScoreText,
  PlusButton,
} from "./components/Player/styles";

function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newTeamName, setTeamName] = useState("Team 1");
  const [isEditMode, toggleEditMode] = useState(true);
  const [amountOfScores, changeAmountOfScore] = useState(1);
  const [isTeamsEnabled, toggleTeams] = useState(true);

  // Adds new player with given name
  const addPlayer = () => {
    if (newPlayerName.length >= 1) {
      const newPlayerObj = {
        name: newPlayerName,
        team: newTeamName,
        placement: "",
        score1: 0,
        score2: 0,
        score3: 0,
        score4: 0,
      };
      setPlayers((players) => [...players, newPlayerObj]);
      setNewPlayerName("");
    }
  };

  // Increases given player score by 1
  const increaseScoreHandler = (player, index, scoreIndex) => {
    if (scoreIndex === 1) {
      player.score1 = player.score1 + 1;
    } else if (scoreIndex === 2) {
      player.score2 = player.score2 + 1;
    } else if (scoreIndex === 3) {
      player.score3 = player.score3 + 1;
    } else if (scoreIndex === 4) {
      player.score4 = player.score4 + 1;
    }

    const newPlayers = [...players];
    newPlayers[index] = player;
    placePlayers(newPlayers);
  };

  // Decreases given player score by 1
  const decreaseScoreHandler = (player, index, scoreIndex) => {
    if (scoreIndex === 1) {
      player.score1 = player.score1 - 1;
    } else if (scoreIndex === 2) {
      player.score2 = player.score2 - 1;
    } else if (scoreIndex === 3) {
      player.score3 = player.score3 - 1;
    } else if (scoreIndex === 4) {
      player.score4 = player.score4 - 1;
    }
    const newPlayers = [...players];
    newPlayers[index] = player;
    placePlayers(newPlayers);
  };

  // Deletes given player
  const deletePlayer = (player) => {
    const newPlayers = players.filter((p) => p !== player);
    placePlayers(newPlayers);
  };

  // Gives players a placement based on their score
  const placePlayers = (players) => {
    const highestScore = Math.max(...players.map((p) => p.score1));

    const noFirstPlayers = players.filter((p) => p.score1 !== highestScore);
    const secondHighestScore = Math.max(...noFirstPlayers.map((p) => p.score1));

    const noSecondPlayers = noFirstPlayers.filter(
      (p) => p.score1 !== secondHighestScore
    );
    const thirdHighestScore = Math.max(...noSecondPlayers.map((p) => p.score1));

    players.forEach((player) => {
      if (player.score1 === highestScore) {
        player.placement = "🥇";
      } else if (player.score1 === secondHighestScore) {
        player.placement = "🥈";
      } else if (player.score1 === thirdHighestScore) {
        player.placement = "🥉";
      } else {
        player.placement = "";
      }
    });

    setPlayers(players);
  };

  return (
    <Body>
      <PlayerList>
        <PlayerHeaders
          visibility={isEditMode}
          amountOfScores={amountOfScores}
        />
        {players
          .sort((a, b) => (a.score1 < b.score1 ? 1 : -1))
          .map((player, index) => (
            <PlayerWrapper>
              <NameWrapper>
                <DeleteButton
                  visibility={isEditMode}
                  onClick={() => deletePlayer(player, index)}
                >
                  X
                </DeleteButton>
                <NameText>
                  {player.placement} {player.name}
                  {isTeamsEnabled === true && " (" + player.team + ")"}
                </NameText>
              </NameWrapper>
              <ScoreWrapper color={2} visibility={isEditMode}>
                <MinusButton
                  visibility={isEditMode}
                  onClick={() => decreaseScoreHandler(player, index, 1)}
                >
                  -
                </MinusButton>
                <ScoreText editmode={isEditMode}>{player.score1}</ScoreText>
                <PlusButton
                  visibility={isEditMode}
                  onClick={() => increaseScoreHandler(player, index, 1)}
                >
                  +
                </PlusButton>
              </ScoreWrapper>
              {amountOfScores >= 2 && (
                <ScoreWrapper color={1}>
                  <MinusButton
                    visibility={isEditMode}
                    onClick={() => decreaseScoreHandler(player, index, 2)}
                  >
                    -
                  </MinusButton>
                  <ScoreText editmode={isEditMode}>{player.score2}</ScoreText>
                  <PlusButton
                    visibility={isEditMode}
                    onClick={() => increaseScoreHandler(player, index, 2)}
                  >
                    +
                  </PlusButton>
                </ScoreWrapper>
              )}
              {amountOfScores >= 3 && (
                <ScoreWrapper color={2}>
                  <MinusButton
                    visibility={isEditMode}
                    onClick={() => decreaseScoreHandler(player, index, 3)}
                  >
                    -
                  </MinusButton>
                  <ScoreText editmode={isEditMode}>{player.score3}</ScoreText>
                  <PlusButton
                    visibility={isEditMode}
                    onClick={() => increaseScoreHandler(player, index, 3)}
                  >
                    +
                  </PlusButton>
                </ScoreWrapper>
              )}
              {amountOfScores >= 4 && (
                <ScoreWrapper color={1}>
                  <MinusButton
                    visibility={isEditMode}
                    onClick={() => decreaseScoreHandler(player, index, 4)}
                  >
                    -
                  </MinusButton>
                  <ScoreText editmode={isEditMode}>{player.score4}</ScoreText>
                  <PlusButton
                    visibility={isEditMode}
                    onClick={() => increaseScoreHandler(player, index, 4)}
                  >
                    +
                  </PlusButton>
                </ScoreWrapper>
              )}
            </PlayerWrapper>
          ))}
      </PlayerList>

      <Teams
        players={players}
        isTeamsEnabled={isTeamsEnabled}
        amountOfScores={amountOfScores}
        editmode={isEditMode}
      />

      <SettingsWrapper editMode={isEditMode}>
        <NewPlayerWrapper visibility={isEditMode}>
          <NewPlayerInput
            maxLength={32}
            type="text"
            value={newPlayerName}
            placeholder="Player name"
            onChange={(e) => {
              setNewPlayerName(e.target.value);
            }}
            teamsEnabled={isTeamsEnabled}
          />
          <NewTeamInput
            visibility={isTeamsEnabled}
            maxLength={32}
            type="text"
            value={newTeamName}
            placeholder="Team name"
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
          />
          <AddPlayerButton onClick={addPlayer}>Add player</AddPlayerButton>
        </NewPlayerWrapper>

        <OptionWrapper visibility={true}>
          <Label>Edit Mode</Label>
          <SliderLabel>
            <SliderCheckbox
              type="checkbox"
              checked={isEditMode}
              onChange={() => toggleEditMode(!isEditMode)}
            />
            <Slider visibility={isEditMode} />
          </SliderLabel>
        </OptionWrapper>
        <OptionWrapper visibility={isEditMode}>
          <Label>Teams</Label>
          <SliderLabel>
            <SliderCheckbox
              type="checkbox"
              checked={isTeamsEnabled}
              onChange={() => toggleTeams(!isTeamsEnabled)}
            />
            <Slider visibility={isTeamsEnabled} />
          </SliderLabel>
        </OptionWrapper>

        <OptionWrapper visibility={isEditMode}>
          <Label>Amount of Scores</Label>
          <NumberInput
            onChange={(e) => changeAmountOfScore(e.target.value)}
            type="number"
            min="1"
            max="4"
            value={amountOfScores}
          />
        </OptionWrapper>
      </SettingsWrapper>
    </Body>
  );
}

export default App;
