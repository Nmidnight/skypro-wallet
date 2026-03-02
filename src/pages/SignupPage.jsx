import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonDefault } from "../components/Button/Button.styled";
import { Input } from "../components/Input/Input";


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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Состояние для ошибки от "сервера"
  const [serverError, setServerError] = useState(null);

  // Валидация полей
  const isNameValid = name.length > 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;

  const nameError = name.length > 0 && !isNameValid;
  const emailError = email.length > 0 && !isEmailValid;
  const passwordError = password.length > 0 && !isPasswordValid;

  // Кнопка заблокирована, если есть ошибки или поля пустые
  const isButtonDisabled = nameError || emailError || passwordError || !name || !email || !password;

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerError(null); // Сбрасываем старую ошибку перед проверкой

    if (!isButtonDisabled) {
      console.log("Отправка данных на регистрацию:", { name, email, password });

      // Имитация базы данных существующих пользователей для проверки правки
      const existingEmails = ['admin@mail.ru', 'ivanovaeva@mail.ru'];
      
      if (existingEmails.includes(email.toLowerCase())) {
        // ПРАВКА: Вывод сообщения, если пользователь уже есть
        setServerError("Пользователь с таким именем или Эл.почтой уже зарегистрирован");
      } else {
        alert("Регистрация прошла успешно!");
        // Здесь в будущем будет переход: navigate('/signin');
      }
    }
  };

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

        {/* Вывод серверной ошибки над кнопкой */}
        {serverError && <ErrorMessage>{serverError}</ErrorMessage>}

        <ButtonDefault 
          type="submit" 
          style={{ marginTop: '10px' }}
          disabled={isButtonDisabled}
          $disabled={isButtonDisabled}
        >
          Зарегистрироваться
        </ButtonDefault>

        <FooterText>
          Уже есть аккаунт? <a href="/signin">Войдите здесь</a>
        </FooterText>
      </FormContainer>
    </PageWrapper>
  );
}