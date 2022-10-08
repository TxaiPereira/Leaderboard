import "./App.css";
import React, { useState, useEffect } from "react";
import PlayerHeaders from "./components/PlayerHeaders";
import Teams from "./components/Teams";
import {
  Body,
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
  NewPlayerInputWrapper,
  DropDownList,
  DropDownItem,
} from "./styles";

import {
  PlayerList,
  EmptyMessageWrapper,
  EmptyMessage2,
  EmptyMessage1,
  MessageImg,
  PlayerItem,
  PlayerButton,
  NameWrapper,
  DeleteButton,
  NameText,
  ScoreWrapper,
  MinusButton,
  ScoreText,
  PlusButton,
  ScoresWrapper,
  PlayerPopUpWrapper,
  SaveButton,
  PlayerPopUp,
  PopupScoreWrapper,
  ButtonsWrapper,
  PopupScoreText,
  H1,
  TeamName,
} from "./components/Player/styles";

function App() {
  // useStates
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newTeamName, setTeamName] = useState("Team 1");
  const [isEditMode, toggleEditMode] = useState(true);
  const [amountOfScores, changeAmountOfScore] = useState(1);
  const [isTeamsEnabled, toggleTeams] = useState(true);
  const [isPlayerPopupVisible, setPlayerPopupVisible] = useState(false);

  const newPlayerObj = {
    name: newPlayerName,
    team: newTeamName,
    placement: "",
    score1: 0,
    score2: 0,
    score3: 0,
    score4: 0,
  };

  const [selectedPlayer, setSelectedPlayer] = useState(newPlayerObj);
  const [sortedBy, setSortedBy] = useState("score1");

  // Adds new player with given name
  const addPlayer = () => {
    if (newPlayerName.length >= 1) {
      setPlayers((players) => [...players, newPlayerObj]);
      setNewPlayerName("");
    }
  };

  // Increases given player score by 1
  const increaseScoreHandler = (player, scoreIndex) => {
    if (scoreIndex === 1) {
      player.score1 = player.score1 + 1;
    } else if (scoreIndex === 2) {
      player.score2 = player.score2 + 1;
    } else if (scoreIndex === 3) {
      player.score3 = player.score3 + 1;
    } else if (scoreIndex === 4) {
      player.score4 = player.score4 + 1;
    }

    const index = players.findIndex((p) => p.name === player.name);

    const newPlayers = [...players];
    newPlayers[index] = player;
    placePlayers(newPlayers);
  };

  // Decreases given player score by 1
  const decreaseScoreHandler = (player, scoreIndex) => {
    if (scoreIndex === 1) {
      player.score1 = player.score1 - 1;
    } else if (scoreIndex === 2) {
      player.score2 = player.score2 - 1;
    } else if (scoreIndex === 3) {
      player.score3 = player.score3 - 1;
    } else if (scoreIndex === 4) {
      player.score4 = player.score4 - 1;
    }

    const index = players.findIndex((p) => p.name === player.name);

    const newPlayers = [...players];
    newPlayers[index] = player;
    placePlayers(newPlayers);
  };

  // Deletes given player
  const deletePlayer = (player) => {
    const newPlayers = players.filter((p) => p !== player);
    placePlayers(newPlayers);
    setPlayerPopupVisible(false);
  };

  // Gives players a placement based on their score1
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

    players = sortPlayers(players);

    setPlayers(players);
  };

  // Sorts players by selected score
  const sortPlayers = (players) => {
    if (sortedBy === "score1") {
      players.sort((a, b) => (a.score1 < b.score1 ? 1 : -1));
    } else if (sortedBy === "score2") {
      players.sort((a, b) => (a.score2 < b.score2 ? 1 : -1));
    } else if (sortedBy === "score3") {
      players.sort((a, b) => (a.score3 < b.score3 ? 1 : -1));
    } else if (sortedBy === "score4") {
      players.sort((a, b) => (a.score4 < b.score4 ? 1 : -1));
    }
    return players;
  };

  // Shows player popup
  const popupPlayer = (player) => {
    setSelectedPlayer(player);
    setPlayerPopupVisible(true);
  };

  return (
    <Body>
      <PlayerPopUpWrapper visibility={isPlayerPopupVisible}>
        <PlayerPopUp visibility={isPlayerPopupVisible}>
          <H1>
            {selectedPlayer.name} <TeamName>({selectedPlayer.team})</TeamName>
          </H1>
          <PopupScoreWrapper color={2}>
            <PopupScoreText>
              {"Score1: "} {selectedPlayer.score1}
            </PopupScoreText>
            <ButtonsWrapper>
              <MinusButton
                onClick={() => decreaseScoreHandler(selectedPlayer, 1)}
              />
              <PlusButton
                onClick={() => increaseScoreHandler(selectedPlayer, 1)}
              />
            </ButtonsWrapper>
          </PopupScoreWrapper>
          <PopupScoreWrapper color={1}>
            <PopupScoreText>
              {"Score2: "} {selectedPlayer.score2}
            </PopupScoreText>
            <ButtonsWrapper>
              <MinusButton
                onClick={() => decreaseScoreHandler(selectedPlayer, 2)}
              />
              <PlusButton
                onClick={() => increaseScoreHandler(selectedPlayer, 2)}
              />
            </ButtonsWrapper>
          </PopupScoreWrapper>
          <PopupScoreWrapper color={2}>
            <PopupScoreText>
              {"Score3: "} {selectedPlayer.score3}
            </PopupScoreText>
            <ButtonsWrapper>
              <MinusButton
                onClick={() => decreaseScoreHandler(selectedPlayer, 3)}
              />
              <PlusButton
                onClick={() => increaseScoreHandler(selectedPlayer, 3)}
              />
            </ButtonsWrapper>
          </PopupScoreWrapper>
          <PopupScoreWrapper color={1}>
            <PopupScoreText>
              {"Score4: "} {selectedPlayer.score4}
            </PopupScoreText>
            <ButtonsWrapper>
              <MinusButton
                onClick={() => decreaseScoreHandler(selectedPlayer, 4)}
              />
              <PlusButton
                onClick={() => increaseScoreHandler(selectedPlayer, 4)}
              />
            </ButtonsWrapper>
          </PopupScoreWrapper>
          <SaveButton onClick={() => setPlayerPopupVisible(false)}>
            Save
          </SaveButton>
          <DeleteButton onClick={() => deletePlayer(selectedPlayer)}>
            Delete
          </DeleteButton>
        </PlayerPopUp>
      </PlayerPopUpWrapper>

      <Teams
        players={players}
        isTeamsEnabled={isTeamsEnabled}
        amountOfScores={amountOfScores}
        editmode={isEditMode}
      />

      <PlayerList>
        <PlayerHeaders
          visibility={isEditMode}
          amountOfScores={amountOfScores}
        />
        {players.length === 0 && (
          <EmptyMessageWrapper>
            <MessageImg />
            <EmptyMessage1>No players yet!</EmptyMessage1>
            <EmptyMessage2>Add players to fill this list.</EmptyMessage2>
          </EmptyMessageWrapper>
        )}
        {players.map((player, index) => (
          <PlayerItem>
            <PlayerButton onClick={() => popupPlayer(player, index)}>
              <NameWrapper>
                <NameText>
                  {player.placement} {player.name}
                  {isTeamsEnabled === true && " (" + player.team + ")"}
                </NameText>
              </NameWrapper>
              <ScoresWrapper>
                <ScoreWrapper color={2}>
                  <ScoreText>{player.score1}</ScoreText>
                </ScoreWrapper>
                {amountOfScores >= 2 && (
                  <ScoreWrapper color={1}>
                    <ScoreText>{player.score2}</ScoreText>
                  </ScoreWrapper>
                )}
                {amountOfScores >= 3 && (
                  <ScoreWrapper color={2}>
                    <ScoreText>{player.score3}</ScoreText>
                  </ScoreWrapper>
                )}
                {amountOfScores >= 4 && (
                  <ScoreWrapper color={1}>
                    <ScoreText>{player.score4}</ScoreText>
                  </ScoreWrapper>
                )}
              </ScoresWrapper>
            </PlayerButton>
          </PlayerItem>
        ))}
      </PlayerList>

      <SettingsWrapper editMode={isEditMode}>
        <NewPlayerWrapper>
          <NewPlayerInputWrapper>
            <NewPlayerInput
              maxLength={12}
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
              maxLength={12}
              type="text"
              value={newTeamName}
              placeholder="Team name"
              onChange={(e) => {
                setTeamName(e.target.value);
              }}
            />
          </NewPlayerInputWrapper>
          <AddPlayerButton onClick={addPlayer} />
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

        <OptionWrapper visibility={isEditMode}>
          <Label>Sort by</Label>
          <DropDownList
            onChange={(e) => {
              setSortedBy(e.target.value);
              placePlayers(players);
            }}
          >
            <DropDownItem value="score1">Score1</DropDownItem>
            <DropDownItem value="score2">Score2</DropDownItem>
            <DropDownItem value="score3">Score3</DropDownItem>
            <DropDownItem value="score4">Score4</DropDownItem>
          </DropDownList>
        </OptionWrapper>
      </SettingsWrapper>
    </Body>
  );
}

export default App;
