import "./App.css";
import React, { useState, useMemo } from "react";
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
  ScoreOptionWrapper,
  InputWrapper,
  Label,
  NumberInput,
  SettingsWrapper,
  NewTeamInput,
  NewPlayerInputWrapper,
  DropDownList,
  DropDownItem,
  ScoreNameInput,
} from "./styles";

import {
  PlayerList,
  EmptyMessageWrapper,
  EmptyMessage2,
  EmptyMessage1,
  MessageImg,
  PlayerItem,
  NameWrapper,
  DeleteButton,
  ScoreWrapper,
  MinusButton,
  ScoreText,
  PlusButton,
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
  const [isEditMode, toggleEditMode] = useState(false);
  const [amountOfScores, changeAmountOfScore] = useState(1);
  const [isTeamsEnabled, toggleTeams] = useState(true);
  const [isPlayerPopupVisible, setPlayerPopupVisible] = useState(false);
  const [sortedBy, setSortedBy] = useState(0);

  const newPlayerObj = {
    name: newPlayerName,
    team: newTeamName,
    placement: "",
    scores: [0, 0, 0, 0],
  };
  const [scoreNames, setScoreNames] = useState(["A", "B", "C", "D"]);

  const [selectedPlayer, setSelectedPlayer] = useState(newPlayerObj);

  // Adds new player with given name
  const addPlayer = () => {
    if (newPlayerName.length >= 1) {
      setPlayers((players) => [...players, newPlayerObj]);
      setNewPlayerName("");
    }
  };

  // Increases given player score by 1
  const increaseScoreHandler = (player, scoreIndex) => {
    player.scores[scoreIndex] = player.scores[scoreIndex] + 1;

    const index = players.findIndex((p) => p.name === player.name);

    const newPlayers = [...players];
    newPlayers[index] = player;
    placePlayers(newPlayers);
  };

  // Decreases given player score by 1
  const decreaseScoreHandler = (player, scoreIndex) => {
    player.scores[scoreIndex] = player.scores[scoreIndex] - 1;

    const index = players.findIndex((p) => p.name === player.name);

    const newPlayers = [...players];
    newPlayers[index] = player;
    placePlayers(newPlayers);
  };

  // Deletes given player
  const deletePlayer = (player) => {
    const newPlayers = players.filter((p) => p !== player);
    setPlayerPopupVisible(false);
    setPlayers(newPlayers);
  };

  // Gives players a placement based on their score1
  const placePlayers = (players) => {
    players = sortPlayers(players);

    const highestScore = Math.max(...players.map((p) => p.scores[sortedBy]));

    const noFirstPlayers = players.filter(
      (p) => p.scores[sortedBy] !== highestScore
    );
    const secondHighestScore = Math.max(
      ...noFirstPlayers.map((p) => p.scores[sortedBy])
    );

    const noSecondPlayers = noFirstPlayers.filter(
      (p) => p.scores[sortedBy] !== secondHighestScore
    );
    const thirdHighestScore = Math.max(
      ...noSecondPlayers.map((p) => p.scores[sortedBy])
    );

    players.forEach((player) => {
      if (player.scores[sortedBy] === highestScore) {
        player.placement = "🥇";
      } else if (player.scores[sortedBy] === secondHighestScore) {
        player.placement = "🥈";
      } else if (player.scores[sortedBy] === thirdHighestScore) {
        player.placement = "🥉";
      } else {
        player.placement = "";
      }
    });

    setPlayers(players);
  };

  const sortedByHandler = (sortedBy) => {
    setSortedBy(sortedBy);
  };

  // Sorts players by selected score
  const sortPlayers = (players) => {
    players.sort((a, b) => (a.scores[sortedBy] < b.scores[sortedBy] ? 1 : -1));
    return players;
  };

  useMemo(() => {
    sortPlayers(players);
    sortedByHandler(sortedBy);
  }, [players, sortedBy]);

  // Shows player popup
  const popupPlayer = (player) => {
    setSelectedPlayer(player);
    setPlayerPopupVisible(true);
  };

  // Change score name
  const editScoreName = (newScoreName, index) => {
    if (newScoreName.length !== 0) {
      const newScoreNames = [...scoreNames];
      newScoreNames[index] = newScoreName;
      setScoreNames(newScoreNames);
    }
  };

  return (
    <Body>
      <PlayerPopUpWrapper isPlayerPopupVisible={isPlayerPopupVisible}>
        <PlayerPopUp isPlayerPopupVisible={isPlayerPopupVisible}>
          <H1>
            {selectedPlayer.name} <TeamName>({selectedPlayer.team})</TeamName>
          </H1>
          <PopupScoreWrapper color={2}>
            <PopupScoreText>
              {scoreNames[0] + ": "} {selectedPlayer.scores[0]}
            </PopupScoreText>
            <ButtonsWrapper>
              <MinusButton
                onClick={() => decreaseScoreHandler(selectedPlayer, 0)}
              />
              <PlusButton
                onClick={() => increaseScoreHandler(selectedPlayer, 0)}
              />
            </ButtonsWrapper>
          </PopupScoreWrapper>
          <PopupScoreWrapper color={1}>
            <PopupScoreText>
              {scoreNames[1] + ": "} {selectedPlayer.scores[1]}
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
          <PopupScoreWrapper color={2}>
            <PopupScoreText>
              {scoreNames[2] + ": "} {selectedPlayer.scores[2]}
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
          <PopupScoreWrapper color={1}>
            <PopupScoreText>
              {scoreNames[3] + ": "} {selectedPlayer.scores[3]}
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
        scoreNames={scoreNames}
      />

      <PlayerList>
        <PlayerHeaders
          amountOfScores={amountOfScores}
          hasTeams={false}
          scoreNames={scoreNames}
        />
        <tbody>
          {players.map((player, index) => (
            <PlayerItem
              key={player.name}
              onClick={() => popupPlayer(player, index)}
            >
              <NameWrapper>
                {player.placement} {player.name}
                {isTeamsEnabled === true && " (" + player.team + ")"}
              </NameWrapper>

              <ScoreWrapper color={2}>
                <ScoreText>{player.scores[0]}</ScoreText>
              </ScoreWrapper>
              {amountOfScores >= 2 && (
                <ScoreWrapper color={1}>
                  <ScoreText>{player.scores[1]}</ScoreText>
                </ScoreWrapper>
              )}
              {amountOfScores >= 3 && (
                <ScoreWrapper color={2}>
                  <ScoreText>{player.scores[2]}</ScoreText>
                </ScoreWrapper>
              )}
              {amountOfScores >= 4 && (
                <ScoreWrapper color={1}>
                  <ScoreText>{player.scores[3]}</ScoreText>
                </ScoreWrapper>
              )}
            </PlayerItem>
          ))}
        </tbody>
      </PlayerList>

      {players.length === 0 && (
        <EmptyMessageWrapper>
          <MessageImg />
          <EmptyMessage1>No players yet!</EmptyMessage1>
          <EmptyMessage2>Add players to fill this list.</EmptyMessage2>
        </EmptyMessageWrapper>
      )}

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
              isTeamsEnabled={isTeamsEnabled}
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

        <OptionWrapper isEditMode={true}>
          <Label>Toggle Edit Mode</Label>
          <SliderLabel>
            <SliderCheckbox
              type="checkbox"
              checked={isEditMode}
              onChange={() => toggleEditMode(!isEditMode)}
            />
            <Slider isEditMode={isEditMode} />
          </SliderLabel>
        </OptionWrapper>
        <OptionWrapper isEditMode={isEditMode}>
          <Label>Toggle Teams</Label>
          <SliderLabel>
            <SliderCheckbox
              type="checkbox"
              checked={isTeamsEnabled}
              onChange={() => toggleTeams(!isTeamsEnabled)}
            />
            <Slider isEditMode={isTeamsEnabled} />
          </SliderLabel>
        </OptionWrapper>

        <OptionWrapper isEditMode={isEditMode}>
          <Label>Amount of Scores</Label>
          <NumberInput
            onChange={(e) => changeAmountOfScore(e.target.value)}
            type="number"
            min="1"
            max="4"
            value={amountOfScores}
          />
        </OptionWrapper>

        <OptionWrapper isEditMode={isEditMode}>
          <Label>Sort by</Label>
          <DropDownList
            onChange={(e) => {
              sortedByHandler(e.target.value);
              placePlayers(players);
            }}
          >
            <DropDownItem value="0">{scoreNames[0]}</DropDownItem>
            <DropDownItem value="1">{scoreNames[1]}</DropDownItem>
            <DropDownItem value="2">{scoreNames[2]}</DropDownItem>
            <DropDownItem value="3">{scoreNames[3]}</DropDownItem>
          </DropDownList>
        </OptionWrapper>
        <ScoreOptionWrapper isEditMode={isEditMode}>
          <Label>Score Names </Label>
          <InputWrapper>
            <ScoreNameInput
              placeholder="A"
              onChange={(e) => editScoreName(e.target.value, 0)}
              maxLength={3}
            />
            <ScoreNameInput
              placeholder="B"
              onChange={(e) => editScoreName(e.target.value, 1)}
              maxLength={3}
            />
            <ScoreNameInput
              placeholder="C"
              onChange={(e) => editScoreName(e.target.value, 2)}
              maxLength={3}
            />
            <ScoreNameInput
              placeholder="D"
              onChange={(e) => editScoreName(e.target.value, 3)}
              maxLength={3}
            />
          </InputWrapper>
        </ScoreOptionWrapper>
      </SettingsWrapper>
    </Body>
  );
}

export default App;
