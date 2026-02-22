import styled from "styled-components";
import {
  gray,
  purpleBg,
  purpleBorder,
  redBg,
  redBorder,
} from "../../styles/colors";

export const InputDefault = styled.input`
  height: 39px;
  border:
    0,
    5px solid
      ${({ $error, $active }) =>
        $error ? redBorder : $active ? purpleBorder : gray};
  border-radius: 6px;
  background-color: ${({ $error, $active }) =>
    $error ? redBg : $active ? purpleBg : gray};
  font-weight: 400;
  font-size: 12px;
  color: #000;
`;
