import styled from "styled-components";

import {
  textFontSize,
  textColor,
  backgroundColor1,
  backgroundColor2,
  playerHover,
  nameTextMargin,
  nameTextWidth,
  scoreWidth,
  nameWrapperWidth,
  sectionMarginTop,
} from "../../colors";

export const TeamList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: ${sectionMarginTop};
`;

export const TeamWrapper = styled.li`
  display: ${(props) => (props.visibility === true ? "flex" : "none")};
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

export const NameText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  min-width: ${nameTextWidth};
  margin-left: ${nameTextMargin};
`;

export const ScoreWrapper = styled.div`
  background-color: ${(props) =>
    props.color === 1 ? backgroundColor1 : backgroundColor2};
  display: flex;
  width: ${scoreWidth};
  justify-content: center;
  align-items: center;
`;

export const ScoreText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  text-align: center;
`;
