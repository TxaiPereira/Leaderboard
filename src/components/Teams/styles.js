import styled from "styled-components";

import {
  textFontSize,
  textColor,
  backgroundColor1,
  backgroundColor2,
  nameWrapperWidth,
  sectionMargin,
} from "../../colors";

export const TeamList = styled.table`
  display: ${(props) => (props.isTeamsEnabled === true ? "flex" : "none")};
  flex-direction: column;
  margin: 0;
  padding: 0;
  margin-top: ${sectionMargin};
  width: 100%;
  border: none;
  border-collapse: collapse;
  border-top-width: 0px;
  border-top-style: none;
`;

export const TeamWrapper = styled.tr`
  display: flex;
  background-color: ${backgroundColor1};
  width: 100%;
  justify-content: space-between;
  min-height: 60px;
`;

export const NameWrapper = styled.td`
  display: flex;
  align-items: center;
  font-weight: 500;
  width: ${nameWrapperWidth};
  font-size: ${textFontSize};
  color: ${textColor};
  width: ${nameWrapperWidth};
  overflow-wrap: anywhere;
  text-align: left;
  padding: 10px 0 10px 10px;
`;

export const ScoreWrapper = styled.td`
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
  font-size: ${textFontSize};
  color: ${textColor};
  text-align: center;
  background-color: ${backgroundColor1};

  :nth-child(2n) {
    background-color: ${backgroundColor2};
  }
`;
