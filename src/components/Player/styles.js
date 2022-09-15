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
} from "../../colors";

export const PlayerWrapper = styled.li`
  display: flex;
  padding-left: 15px;
  background-color: ${backgroundColor1};
  max-width: 700px;
  height: 75px;
  justify-content: space-between;
  :hover {
    background-color: ${playerHover};
  }
`;

export const NameWrapper = styled.div`
  display: flex;
`;

export const DeleteButton = styled.button`
  display: ${(props) => (props.visibility === true ? "block" : "none")};

  font-size: ${textFontSize};
  font-weight: bold;
  border: ${secondaryButtonBorder};
  background-color: ${secondaryBackgroundColor};
  width: 60px;
  height: 60px;
  border-radius: ${buttonRadius};
  color: ${secondaryTextColor};
  margin: 7.5px 10px 0 0;

  :hover {
    background-color: ${secondaryButtonColor};
    color: ${secondaryTextHoverColor};
  }
`;

export const NameText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  margin: 30px 10px 0 0;
  width: 596px;
`;

export const ScoreWrapper = styled.div`
  background-color: ${(props) =>
    props.color === 1 ? backgroundColor1 : backgroundColor2};
  display: flex;
  padding: 0 7.5px;
  height: 100%;
`;

export const MinusButton = styled.button`
  display: ${(props) => (props.visibility === true ? "block" : "none")};
  font-size: ${textFontSize};
  font-weight: bold;
  border: ${secondaryButtonBorder};
  background-color: ${secondaryBackgroundColor};
  width: 60px;
  color: ${secondaryTextColor};
  border-radius: ${buttonRadius};
  margin: 7.5px 0;

  :hover {
    background-color: ${secondaryButtonColor};
    color: ${secondaryTextHoverColor};
  }
`;

export const PlusButton = styled.button`
  display: ${(props) => (props.visibility === true ? "block" : "none")};
  font-size: ${textFontSize};
  font-weight: bold;
  width: 60px;
  border: none;
  color: ${primaryButtonTextColor};
  background-color: ${primaryButtonColor};
  border-radius: ${buttonRadius};
  margin: 7.5px 0;

  :hover {
    background-color: ${primaryButtonHoverColor};
  }
`;

export const ScoreText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  padding: 0 10px;
  width ${(props) => (props.editmode === true ? "40px" : "160px")};
  text-align: center;
  margin-top: 30px;
`;
