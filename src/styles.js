import styled from "styled-components";

import {
  inputRadius,
  textFontSize,
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
  settingsWrapperPadding,
  optionWrapperPadding,
  numberInputWidth,
} from "./colors";

import AddPlayerImg from "./assets/add_player.svg";

export const Body = styled.div`
  background-color: ${bodyColor1};
  height: 100vh;
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0;
  @media only screen and (min-width: 992px) {
    margin: 0 auto;
    width: 45%;
  }
`;

export const PlayerList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NewPlayerWrapper = styled.div`
  display: ${(props) => (props.visibility === true ? "flex" : "none")};
  width: 96%;
  margin-left: 10px;
  /*justify-content: space-between;*/
`;

export const NewPlayerInputWrapper = styled.div`
  display: flex;
`;

export const NewPlayerInput = styled.input`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: ${(props) => (props.teamsEnabled === true ? "40%" : "100%")};
  margin-right: 10px;
`;

export const NewTeamInput = styled.input`
  display: ${(props) => (props.visibility === true ? "block" : "none")};
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: 40%;
  margin-right: 10px;
`;

export const AddPlayerButton = styled.button`
  font-size: ${textFontSize};
  border: none;
  color: ${primaryButtonTextColor};
  background-color: ${primaryButtonColor};
  background-image: url(${AddPlayerImg});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${buttonRadius};
  min-width: ${buttonSize};

  :hover {
    background-color: ${primaryButtonHoverColor};
  }
`;

export const Label = styled.label`
  font-size: ${textFontSize};
  color: ${textColor};
  font-weight: 500;
  margin: 10px 15px;
`;

export const OptionWrapper = styled.div`
  display: ${(props) => (props.visibility === true ? "flex" : "none")};
  align-items: center;
  padding: ${optionWrapperPadding};
  width: 100%;
`;

export const NumberInput = styled.input`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
  width: ${numberInputWidth};
`;

export const DropDownList = styled.select`
  font-family: ${textFontFamily};
  font-size: ${textFontSize};
  background-color: ${inputColor};
  color: ${inputTextColor};
  border: ${inputBorder};
  border-radius: ${inputRadius};
  padding: ${inputPadding};
`;

export const DropDownItem = styled.option``;

export const SettingsWrapper = styled.div`
  background-color: ${backgroundColor1};
  margin-top: ${sectionMargin};
  padding: ${settingsWrapperPadding};
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
    props.visibility === true
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
      props.visibility === true ? sliderEnabledColor : sliderDisabledColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) =>
      props.visibility === true ? "translateX(2.6em);" : ""};
  }
`;
