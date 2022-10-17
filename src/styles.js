import styled from "styled-components";

import {
  inputRadius,
  textFontSize,
  textFontSize2,
  textColor,
  backgroundColor1,
  buttonRadius,
  primaryButtonColor,
  primaryButtonTextColor,
  primaryButtonHoverColor,
  inputColor,
  inputTextColor,
  sliderEnabledColor,
  sliderEnabledBackgroundColor,
  sliderDisabledColor,
  sliderDisbledBackgroundColor,
  textFontFamily,
  bodyColor1,
  inputBorder,
  inputPadding,
  buttonSize,
  sectionMargin,
} from "./colors";

import AddPlayerImg from "./assets/add_player.svg";

export const Body = styled.div`
  background-color: ${bodyColor1};
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  width: 100%;
  margin: 0;
  @media only screen and (min-width: 992px) {
    margin: 0 auto;
    width: 60%;
  }
`;

export const NewPlayerWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 5px 5px 10px;
`;

export const NewPlayerInputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const NewPlayerInput = styled.input`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: ${(props) => (props.teamsEnabled === true ? "46%" : "100%")};
  margin-right: 10px;

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const NewTeamInput = styled.input`
  display: ${(props) => (props.isTeamsEnabled === true ? "block" : "none")};
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: 46%;
  margin-right: 10px;

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const AddPlayerButton = styled.button`
  cursor: pointer;
  border: none;
  color: ${primaryButtonTextColor};
  background-color: ${primaryButtonColor};
  background-image: url(${AddPlayerImg});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${buttonRadius};
  min-width: ${buttonSize};
  margin-right: 20px;

  :hover {
    background-color: ${primaryButtonHoverColor};
  }
`;

export const Label = styled.label`
  font-size: ${textFontSize};
  color: ${textColor};
  font-weight: 500;

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const OptionWrapper = styled.div`
  display: ${(props) => (props.isEditMode === true ? "flex" : "none")};
  align-items: center;
  padding: 5px 0;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const ScoreOptionWrapper = styled.div`
  display: ${(props) => (props.isEditMode === true ? "flex" : "none")};
  align-items: left;
  padding: 5px 10px;
  flex-direction: column;

  @media only screen and (min-width: 560px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ScoreNameInput = styled.input`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: 13%;

  @media only screen and (min-width: 560px) {
    width: 53px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const NumberInput = styled.input`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: 86px;

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const DropDownList = styled.select`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: 120px;

  @media only screen and (max-width: 430px) {
    font-size: ${textFontSize2};
  }
`;

export const DropDownItem = styled.option``;

export const SettingsWrapper = styled.div`
  background-color: ${backgroundColor1};
  margin-top: ${sectionMargin};
  padding: 10px 0;
  width: 100%;
`;

// Source: https://codesandbox.io/s/custom-checkbox-and-radiobutton-with-react-and-styled-components-6h3st?from-embed=&file=/src/ToggleSwitch.js

export const SliderCheckbox = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

export const SliderLabel = styled.label`
  position: relative;
  font-size: 10px;
  width: 6em;
  height: 3.4em;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
}`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.isEditMode === true
      ? sliderEnabledBackgroundColor
      : sliderDisbledBackgroundColor};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 3.4em;

  :before {
    position: absolute;
    content: "";
    height: 2.6em;
    width: 2.6em;
    left: 0.4em;
    bottom: 0.4em;
    background-color: ${(props) =>
      props.isEditMode === true ? sliderEnabledColor : sliderDisabledColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) =>
      props.isEditMode === true ? "translateX(2.6em);" : ""};
  }
`;
