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
  scoreWidth,
  nameWrapperWidth,
  barInputWidth,
  nameTextMargin,
  barInputMargin,
} from "../../colors";

export const PlayerHeaderWrapper = styled.li`
  display: flex;
  background-color: ${barBackgroundColor1};
  height: ${barHeight};
`;

export const NameHeaderWrapper = styled.div`
  display: ${(props) => (props.visibility === false ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  min-width: ${nameWrapperWidth};
  max-width: ${nameWrapperWidth};
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
  min-width: 550px;
  margin-left: 70px;
`;

export const NameHeaderText = styled.label`
  visibility: ${(props) => (props.visibility === false ? "visible" : "hidden")};
  font-size: ${textFontSize};
  color: ${barTextColor};
  display: block;
  display: block;
  font-weight: bold;
  max-width: ${nameTextWidth};
  margin-left: ${nameTextMargin};
`;

export const ScoreNameWrapper = styled.div`
  background-color: ${(props) =>
    props.color === 1 ? barBackgroundColor1 : barBackgroundColor2};
  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${scoreWidth};
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
  visibility: ${(props) => (props.visibility === false ? "visible" : "hidden")};
  font-size: ${textFontSize};
  color: ${barTextColor};
  display: block;
  font-weight: bold;
  text-align: center;
  margin: auto;
`;
