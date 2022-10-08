import styled, { keyframes, css } from "styled-components";

import {
  textColor,
  textFontSize,
  textFontFamily,
  buttonRadius,
  backgroundColor1,
  backgroundColor2,
  primaryButtonColor,
  primaryButtonTextColor,
  primaryButtonHoverColor,
  secondaryButtonColor,
  secondaryTextColor,
  secondaryTextHoverColor,
  secondaryBackgroundColor,
  playerHover,
  secondaryButtonBorder,
  buttonSize,
  nameTextMargin,
  scoreTextWidth,
  shadowColor,
} from "../../colors";

import PlusImg from "./assets/plus.svg";
import MinusImg from "./assets/minus.svg";
import MinusImg2 from "./assets/minus2.svg";
import standingImg from "./assets/standing.svg";

export const PlayerList = styled.table`
  margin: 0;
  padding: 0;
  border: none;
  border-collapse: collapse;
  border-top-width: 0px;
  border-top-style: none;
`;

export const EmptyMessageWrapper = styled.tr`
  background-color: ${backgroundColor1};
  color: ${textColor};
  text-align: center;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyMessage1 = styled.p`
  margin: 5px 0;
  font-weight: bold;
  font-size: 1.5em;
`;

export const EmptyMessage2 = styled.p`
  margin: 5px 0;
`;

export const MessageImg = styled.div`
  background-image: url(${standingImg});
  min-height: 100px;
  width: 120px;
  border: none;
`;

export const PlayerItem = styled.tr``;

export const PlayerButton = styled.button`
  padding: 0;
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  border: none;
  display: flex;
  background-color: ${backgroundColor1};
  justify-content: space-between;
  flex-direction: reverse-row;
  :hover {
    background-color: ${playerHover};
  }
  width: 100%;
  height: 60px;
`;

export const NameWrapper = styled.td`
  display: flex;
  align-items: center;
  width: 40%;
`;

export const NameText = styled.p`
  font-size: ${textFontSize};
  font-weight: 500;
  color: ${textColor};
  margin-left: ${nameTextMargin};
  overflow-wrap: anywhere;
  text-align: left;
`;

export const ScoresWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-end;
`;

export const ScoreWrapper = styled.td`
  background-color: ${(props) =>
    props.color === 1 ? backgroundColor1 : backgroundColor2};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

export const MinusButton = styled.button`
  display: block;
  font-size: ${textFontSize};
  font-weight: bold;
  border: ${secondaryButtonBorder};
  background-color: ${secondaryBackgroundColor};
  background-image: url(${MinusImg});
  background-repeat: no-repeat;
  background-position: center;
  color: ${secondaryTextColor};
  border-radius: ${buttonRadius};
  height: ${buttonSize};
  width: ${buttonSize};

  :hover {
    background-color: ${secondaryButtonColor};
    color: ${secondaryTextHoverColor};
    background-image: url(${MinusImg2});
  }
`;

export const PlusButton = styled.button`
  display: block;
  font-size: ${textFontSize};
  font-weight: bold;
  border: none;
  color: ${primaryButtonTextColor};
  background-color: ${primaryButtonColor};
  background-image: url(${PlusImg});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${buttonRadius};
  height: ${buttonSize};
  width: ${buttonSize};

  :hover {
    background-color: ${primaryButtonHoverColor};
  }
`;

export const ScoreText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  text-align: center;
  width: ${scoreTextWidth};
`;

export const PlayerPopUpWrapper = styled.div`
  position: absolute;
  display: ${(props) => (props.visibility === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 2;
  width: 100%;
  align-self: center;
`;

export const slideInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const PlayerPopUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 90vh;
  background-color: ${backgroundColor1};
  border-radius: 20px;
  box-shadow: 0 0 10px ${shadowColor};
  animation: ${(props) =>
    props.visibility &&
    css`
      ${slideInTop} 0.3s ease-in
    `};
  };

  @media only screen and (min-width: 992px) {
    width: 50%;
    height: 66vh;
  }
`;

export const H1 = styled.h1`
  color: ${textColor};
  text-align: center;
`;

export const SaveButton = styled.button`
  font-size: ${textFontSize};
  font-family: ${textFontFamily};
  font-weight: 500;
  border: none;
  color: ${primaryButtonTextColor};
  background-color: ${primaryButtonColor};
  border-radius: ${buttonRadius};
  width: 90%;
  height: ${buttonSize};
  margin: 15px 0;

  :hover {
    background-color: ${primaryButtonHoverColor};
  }
`;

export const DeleteButton = styled.button`
  display: block;
  font-size: ${textFontSize};
  font-weight: bold;
  border: ${secondaryButtonBorder};
  background-color: ${secondaryBackgroundColor};
  color: ${secondaryTextColor};
  border-radius: ${buttonRadius};
  height: ${buttonSize};
  width: 90%;

  :hover {
    background-color: ${secondaryButtonColor};
    color: ${secondaryTextHoverColor};
  }
`;

export const PopupScoreWrapper = styled.div`
  background-color: ${(props) =>
    props.color === 1 ? backgroundColor1 : backgroundColor2};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 10px 0;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  margin-right: 10px;
`;

export const PopupScoreText = styled.p`
  font-size: ${textFontSize};
  font-weight: bold;
  color: ${textColor};
  text-align: center;
  width: 60%;
`;
