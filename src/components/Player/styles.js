import styled from "styled-components";

import {
  textColor,
  textFontSize,
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
  nameTextWidth,
  scoreWidth,
  scorePadding,
  nameWrapperWidth,
  scoreTextWidth,
} from "../../colors";

export const PlayerWrapper = styled.li`
  display: flex;
  background-color: ${backgroundColor1};
  :hover {
    background-color: ${playerHover};
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: ${nameWrapperWidth};
  max-width: ${nameWrapperWidth};
`;

export const DeleteButton = styled.button`
  display: ${(props) => (props.visibility === true ? "block" : "none")};
  font-size: ${textFontSize};
  font-weight: bold;
  border: ${secondaryButtonBorder};
  background-color: ${secondaryBackgroundColor};
  border-radius: ${buttonRadius};
  color: ${secondaryTextColor};
  height: ${buttonSize};
  min-width: ${buttonSize};
  margin-left: ${nameTextMargin};

  :hover {
    background-color: ${secondaryButtonColor};
    color: ${secondaryTextHoverColor};
  }
`;

export const NameText = styled.p`
  font-size: ${textFontSize};
  font-weight: 500;
  color: ${textColor};
  margin-left: ${nameTextMargin};
  max-width: ${nameTextWidth};
  min-width: ${nameTextWidth};
`;

export const ScoreWrapper = styled.div`
  background-color: ${(props) =>
    props.color === 1 ? backgroundColor1 : backgroundColor2};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${scoreWidth};
  padding: ${(props) => (props.visibility === true ? scorePadding : "0")};
`;

export const MinusButton = styled.button`
  display: ${(props) => (props.visibility === true ? "block" : "none")};
  font-size: ${textFontSize};
  font-weight: bold;
  border: ${secondaryButtonBorder};
  background-color: ${secondaryBackgroundColor};
  color: ${secondaryTextColor};
  border-radius: ${buttonRadius};
  height: ${buttonSize};
  width: ${buttonSize};

  :hover {
    background-color: ${secondaryButtonColor};
    color: ${secondaryTextHoverColor};
  }
`;

export const PlusButton = styled.button`
  display: ${(props) => (props.visibility === true ? "block" : "none")};
  font-size: ${textFontSize};
  font-weight: bold;
  border: none;
  color: ${primaryButtonTextColor};
  background-color: ${primaryButtonColor};
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
