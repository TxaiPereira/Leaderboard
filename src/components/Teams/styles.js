import styled from "styled-components";

import {
  textFontSize,
  textColor,
  backgroundColor1,
  backgroundColor2,
  playerHover,
} from "../../colors";

export const TeamList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const TeamWrapper = styled.li`
  display: ${(props) => (props.visibility === true ? "flex" : "none")};
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

export const NameText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  margin: 30px 10px 0 0;
  width: ${(props) => (props.editmode == true ? "665px" : "596px")};
`;

export const ScoreWrapper = styled.div`
  background-color: ${(props) =>
    props.color === 1 ? backgroundColor1 : backgroundColor2};
  display: flex;
  padding: 0 7.5px;
  height: 100%;
`;

export const ScoreText = styled.p`
  font-size: ${textFontSize};
  color: ${textColor};
  padding: 0 10px;
  width ${(props) => (props.editmode === true ? "40px" : "160px")};
  text-align: center;
  margin-top: 30px;
`;
