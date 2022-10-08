import styled from "styled-components";

import {
  textFontSize,
  textColor,
  backgroundColor1,
  backgroundColor2,
  playerHover,
  nameTextMargin,
  nameWrapperWidth,
  sectionMargin,
} from "../../colors";

export const TeamList = styled.table`
  margin: 0;
  padding: 0;
  margin: ${sectionMargin} 0;
  width: 100%;
  border: none;
  border-collapse: collapse;
  border-top-width: 0px;
  border-top-style: none;
`;

export const TeamWrapper = styled.tr`
  display: ${(props) => (props.visibility === true ? "flex" : "none")};
  background-color: ${backgroundColor1};
  :hover {
    background-color: ${playerHover};
  }
  width: 100%;
  justify-content: space-between;
`;

export const NameWrapper = styled.td`
  display: flex;
  align-items: center;
  min-width: ${nameWrapperWidth};
  max-width: ${nameWrapperWidth};
  font-weight: 500;
  width: 40%;
`;

export const NameText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  margin-left: ${nameTextMargin};
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
  width: 25%;
  justify-content: center;
  align-items: center;
`;

export const ScoreText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  text-align: center;
`;
