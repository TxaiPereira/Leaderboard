import styled, { keyframes, css } from "styled-components";

import {
  textColor,
  textFontSize,
  textFontSize2,
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
  shadowColor,
  nameWrapperWidth,
  sectionMargin,
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
  margin-top: ${sectionMargin};
`;

export const EmptyMessageWrapper = styled.div`
  background-color: ${backgroundColor1};
  color: ${textColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
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

export const PlayerItem = styled.tr`
  cursor: pointer;
  cursor: pointer;
  padding: 0;
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  border: none;
  display: flex;
  background-color: ${backgroundColor1};
  justify-content: space-between;
  flex-direction: reverse-row;
  width: 100%;
  min-height: 60px;

  :hover {
    background-color: ${playerHover};

    td {
      background-color: ${playerHover};
    }
  }

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const NameWrapper = styled.td`
  display: flex;
  align-items: center;
  width: ${nameWrapperWidth};
  font-size: ${textFontSize};
  font-weight: 500;
  color: ${textColor};
  overflow-wrap: anywhere;
  text-align: left;
  padding: 10px 0 10px 10px;

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const ScoreWrapper = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  :nth-child(2n) {
    background-color: ${backgroundColor2};
  }
`;

export const MinusButton = styled.button`
  cursor: pointer;
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

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const PlusButton = styled.button`
  cursor: pointer;
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

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const ScoreText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  text-align: center;
  width: 40px;

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const PlayerPopUpWrapper = styled.div`
  position: absolute;
  display: ${(props) =>
    props.isPlayerPopupVisible === true ? "flex" : "none"};
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
  padding: 5% 0;
  background-color: ${backgroundColor1};
  border-radius: 20px;
  box-shadow: 0 0 10px ${shadowColor};
  animation: ${(props) =>
    props.isPlayerPopupVisible &&
    css`
      ${slideInTop} 0.3s ease-in
    `};
  };

  @media only screen and (min-width: 992px) {
    width: 50%;
    padding: 3% 0;
  }
`;

export const H1 = styled.h1`
  color: ${textColor};
  font-size: 1.2em;
  text-align: center;
  margin: 0px;
`;

export const TeamName = styled.span`
  display: block;
  margin-bottom: 20px;
`;

export const SaveButton = styled.button`
  cursor: pointer;
  font-size: ${textFontSize};
  font-family: ${textFontFamily};
  font-weight: 500;
  border: none;
  color: ${primaryButtonTextColor};
  background-color: ${primaryButtonColor};
  border-radius: ${buttonRadius};
  width: 90%;
  min-height: ${buttonSize};
  margin: 15px 0;

  :hover {
    background-color: ${primaryButtonHoverColor};
  }

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  display: block;
  font-size: ${textFontSize};
  font-weight: bold;
  border: ${secondaryButtonBorder};
  background-color: ${secondaryBackgroundColor};
  color: ${secondaryTextColor};
  border-radius: ${buttonRadius};
  min-height: ${buttonSize};
  width: 90%;

  :hover {
    background-color: ${secondaryButtonColor};
    color: ${secondaryTextHoverColor};
  }

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
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

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;
