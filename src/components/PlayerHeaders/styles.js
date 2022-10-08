import styled from "styled-components";
import {
  inputRadius,
  textFontSize,
  textFontFamily,
  barBackgroundColor1,
  barBackgroundColor2,
  barInputColor,
  barInputTextColor,
  barTextColor,
  inputPadding,
  nameTextWidth,
  barHeight,
  barInputWidth,
  nameTextMargin,
  barInputMargin,
  nameHeaderInputWidth,
} from "../../colors";

export const PlayerHeaderWrapper = styled.tr`
  display: flex;
  background-color: ${barBackgroundColor1};
  height: ${barHeight};
  justify-content: space-between;
  flex-direction: reverse-row;
  width: 100%;
  text-align: left;
`;

export const NameHeaderWrapper = styled.th`
  display: ${(props) => (props.visibility === false ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  width: 40%;
`;

export const NameHeaderInput = styled.input`
  display: ${(props) => (props.visibility === true ? "" : "none")};
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${barInputColor};
  color: ${barInputTextColor};
  border: none;
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  min-width: ${nameHeaderInputWidth};
  margin: 0 10px;
`;

export const NameHeaderText = styled.label`
  font-size: ${textFontSize};
  color: ${barTextColor};
  display: block;
  font-weight: bold;
  max-width: ${nameTextWidth};
  margin-left: ${nameTextMargin};
  width: 100%;
`;

export const ScoreNamesWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 60%;
`;

export const ScoreNameWrapper = styled.th`
  background-color: ${(props) =>
    props.color === 1 ? barBackgroundColor1 : barBackgroundColor2};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  overflow-wrap: anywhere;
`;

export const ScoreNameInput = styled.input`
  display: ${(props) => (props.visibility === true ? "block" : "none")};
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${barInputColor};
  color: ${barInputTextColor};
  border: none;
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: ${barInputWidth};
  margin: ${barInputMargin};
`;

export const ScoreNameText = styled.label`
  font-size: ${textFontSize};
  color: ${barTextColor};
  display: block;
  font-weight: bold;
  text-align: center;
  margin: auto;
`;
