import styled from "styled-components";
import { gray, buttonMainColor } from "../../styles/colors";

export const ButtonDefault = styled.button`
  height: 39px;
  color: #fff;
  border-radius: 6px;
  padding: 12px;
  font-weight: 600;
  font-size: 12px;

  background-color: ${({ $disabled }) => ($disabled ? gray : buttonMainColor)};
`;
