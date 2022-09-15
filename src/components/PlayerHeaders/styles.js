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
} from "../../colors";

export const PlayerHeaderWrapper = styled.li`
  display: flex;
  padding-left: 15px;
  background-color: ${barBackgroundColor1};
  max-width: 700px;
  height: 75px;
  justify-content: space-between;
`;

export const NameHeaderWrapper = styled.div`
  display: ${(props) => (props.visibility === false ? "visible" : "hidden")};
  padding: 7.5px 9px 0 0;
`;

export const NameHeaderInput = styled.input`
  display: ${(props) => (props.visibility === true ? "" : "none")};
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${barInputColor};
  color: ${barInputTextColor};
  border: none;
  min-width: 575px;
  border-radius: ${inputRadius};
  padding: 0 11px;
  height: 60px;
  margin-left: 70px;
`;

export const NameHeaderText = styled.label`
  visibility: ${(props) => (props.visibility === false ? "visible" : "hidden")};
  font-size: ${textFontSize};
  color: ${barTextColor};
  display: block;
  margin-top: 20px;
  width: 597px;
  display: block;
  font-weight: bold;
`;

export const ScoreNameWrapper = styled.div`
  background-color: ${(props) =>
    props.color === 1 ? barBackgroundColor1 : barBackgroundColor2};
  height: 100%;
  min-width: 195px;
`;

export const ScoreNameInput = styled.input`
  display: ${(props) => (props.visibility === true ? "" : "none")};
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${barInputColor};
  color: ${barInputTextColor};
  border: none;
  width: 158px;
  border-radius: ${inputRadius};
  padding: 0 11px;
  height: 60px;
  margin: 7.5px 7.5px 0 7.5px;
`;

export const ScoreNameText = styled.label`
  visibility: ${(props) => (props.visibility === false ? "visible" : "hidden")};
  font-size: ${textFontSize};
  color: ${barTextColor};
  margin-top: 28px;
  display: block;
  font-weight: bold;
  text-align: center;
`;
