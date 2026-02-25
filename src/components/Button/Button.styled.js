import styled from "styled-components";
import { gray, buttonMainColor } from "../../styles/colors";

export const ButtonDefault = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  color: #fff;
  border-radius: 8px;
  padding: 12px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  /* Если ошибка то кнопка серая */
  background-color: ${({ $disabled }) => ($disabled ? gray : buttonMainColor)};

  &:hover:not(:disabled) {
    /* Слегка заметный эффект при наведении */
    filter: brightness(1.05);
  }

  &:disabled {
    cursor: not-allowed;
    /* Убираем прозрачность, так как цвет меняется на серый по условию выше */
    opacity: 1; 
  }
`;