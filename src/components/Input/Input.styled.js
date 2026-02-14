import styled from "styled-components";
import { gray, purpleBg, purpleBorder, redBg, redBorder } from "../../styles/colors";

export const InputDefault = styled.input`
  width: 100%;
  height: 39px;
  box-sizing: border-box;
  padding: 0 16px;
  
  /* здесь была очепятка 0,5 исправил на точку */
  border: 0.5px solid ${({ $error, $active }) => 
    $error ? redBorder : $active ? purpleBorder : gray};
  
  border-radius: 6px;
  
  background-color: ${({ $error, $active }) =>
    $error ? redBg : $active ? purpleBg : '#FFFFFF'}; 
  
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #000;
  outline: none;
  transition: all 0.2s ease;

  /* Убираем голубой оттенок фона инпута в Chrome */
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #000;
    box-shadow: inset 0 0 0 50px ${({ $error, $active }) => 
      $error ? redBg : $active ? purpleBg : '#FFFFFF'} !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: #000;
    opacity: 0.4;
  }

  &:focus {
    border-color: ${({ $error }) => $error ? redBorder : purpleBorder};
    /* При фокусе тоже проверяем, чтобы фон оставался правильным */
    background-color: ${({ $error, $active }) => 
      $error ? redBg : $active ? purpleBg : '#FFFFFF'};
  }
`;