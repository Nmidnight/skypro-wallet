import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonDefault } from "../components/Button/Button.styled";
import { Input } from "../components/Input/Input";
import { signupUser } from '../services/AuthApi';
import { Link, useNavigate } from 'react-router-dom';
import { notify } from "../utils/notify"; // ДОБАВИЛИ ИМПОРТ

const PageWrapper = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#F5F5F5',
  padding: '20px'
});

const FormContainer = styled("form")({
  width: '360px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '50px 40px',
  borderRadius: '30px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  backgroundColor: '#fff',
  textAlign: 'center'
});

const Title = styled("h1")({
  fontSize: '24px',
  fontWeight: '700',
  marginBottom: '20px',
  fontFamily: "'Montserrat', sans-serif",
  color: '#000'
});

const ErrorMessage = styled("p")({
  color: "#FF4D4D",
  fontSize: "12px",
  fontFamily: "'Montserrat', sans-serif",
  margin: "0 0 10px 0",
  textAlign: "center",
  lineHeight: "140%"
});

const FooterText = styled("p")({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '12px',
  lineHeight: '150%',
  textAlign: 'center',
  color: '#999',
  marginTop: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '160px',
  '& a': {
    color: '#999',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'block',
    marginTop: '4px',
    borderBottom: '1px solid #999',
    width: 'fit-content',
    margin: '4px auto 0',
    paddingBottom: '1px'
  }
});

export function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState(null);

  const isNameValid = name.length > 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;

  const nameError = name.length > 0 && !isNameValid;
  const emailError = email.length > 0 && !isEmailValid;
  const passwordError = password.length > 0 && !isPasswordValid;

  const isFormValid = isNameValid && isEmailValid && isPasswordValid;

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError(null);

    if (!isFormValid) {
      notify.warn("Пожалуйста, заполните все поля корректно");
      return;
    }

    const user = {
      login: email,
      name,
      password,
    };

    try {
      await signupUser(user);
      notify.success("Регистрация прошла успешно!");
      navigate("/signin");
    } catch (err) {
      const errorMsg = err?.response?.data?.error || "Ошибка регистрации";
      console.log(err?.response?.data?.error);
      setServerError(errorMsg);
      notify.error(errorMsg);
    }
  }

  return (
    <PageWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Регистрация</Title>

        <Input
          type="text"
          placeholder="Ева Иванова"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (serverError) setServerError(null);
          }}
          isSuccess={isNameValid}
          isError={nameError}
          errorMsg="Имя слишком короткое"
        />

        <Input
          type="email"
          placeholder="ivanovaeva@mail.ru"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (serverError) setServerError(null);
          }}
          isSuccess={isEmailValid}
          isError={emailError}
          errorMsg="Введите корректный email"
        />

        <Input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (serverError) setServerError(null);
          }}
          isSuccess={isPasswordValid}
          isError={passwordError}
          errorMsg="Упс! Введенные данные некорректны."
        />

        {serverError && <ErrorMessage>{serverError}</ErrorMessage>}

        <ButtonDefault
          type="submit"
          style={{ marginTop: '20px' }}
          disabled={!isFormValid}
          $disabled={!isFormValid}
        >
          Зарегистрироваться
        </ButtonDefault>

        <FooterText>
          Уже есть аккаунт? <Link to="/signin">Войдите здесь</Link>
        </FooterText>
      </FormContainer>
    </PageWrapper>
  );
}