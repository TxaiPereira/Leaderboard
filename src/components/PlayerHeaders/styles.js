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
  nameWrapperWidth,
} from "../../colors";

export const PlayerHeaderWrapper = styled.thead`
  display: flex;
`;

export const PlayerHeaderRow = styled.tr`
  display: flex;
  background-color: ${barBackgroundColor1};
  height: 60px;
  justify-content: space-between;
  flex-direction: reverse-row;
  width: 100%;
  text-align: left;
`;

export const NameHeaderWrapper = styled.th`
  display: flex;
  align-items: center;
  width: ${nameWrapperWidth};
  padding: 10px 0 10px 10px;
`;

export const NameHeaderInput = styled.input`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${barInputColor};
  color: ${barInputTextColor};
  border: none;
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  min-width: 100%;
  margin: 0 10px;
`;

export const NameHeaderText = styled.label`
  font-size: ${textFontSize};
  color: ${barTextColor};
  display: block;
  font-weight: bold;
  max-width: 270px;
  width: 100%;
`;

export const ScoreNameWrapper = styled.th`
  background-color: ${(props) =>
    props.color === 1 ? barBackgroundColor1 : barBackgroundColor2};
  display: flex;
  width: 25%;
`;

export const ScoreNameInput = styled.input`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${barInputColor};
  color: ${barInputTextColor};
  border: none;
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: 128px;
  margin: 10px;
`;

export const ScoreNameText = styled.label`
  font-size: ${textFontSize};
  color: ${barTextColor};
  display: block;
  font-weight: bold;
  text-align: center;
  margin: auto;
`;
