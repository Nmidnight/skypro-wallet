import styled from "styled-components";
import food from "../../assets/icon-food.svg";
export const MainFormcontainer = styled.form`
  max-width: 379px;
  border-radius: 30px;
  box-shadow: 0 20px 67px -12px rgba(0, 0, 0, 0.13);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
  padding: 32px 34px 32px 32px;
`;

export const MainFormTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #000;
  margin: 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 100%;
`;

export const ContentLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: #000;
`;

export const FormInput = styled.input`
  border: 0.5px solid #999;
  border-radius: 6px;
  padding: 12px;
  height: 39px;
  font-weight: 400;
  font-size: 12px;
  color: #000;
  width: 100%;
  ${({ $success }) =>
    $success &&
    `
    background-color: #f1ebfd;
    border-color: #7334ea;
  `}

  ${({ $errors }) =>
    $errors &&
    `
    background-color: #ffebeb;
    border-color: #f25050;
  `}
`;

export const CategoriesBox = styled.div`
  width: 277px;
  display: flex;
  row-gap: 6px;
  column-gap: 6px;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 30px;
  border: none;
  padding: 8px 20px;
  height: 31px;
  background-color: ${(props) => (props.selected ? "#f1ebfd" : "#f4f5f6")};
  color: ${(props) => (props.selected ? "#7334ea" : "#000")};
  font-weight: 400;
  font-size: 12px;
`;

export const FormButton = styled.button`
  border-radius: 6px;
  padding: 12px;
  width: 100%;
  height: 39px;
  background: #7334ea;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #fff;
  border: none;
  &:disabled {
    background-color: #999;
  }
`;
