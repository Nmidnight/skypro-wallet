import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonDefault } from "../components/Button/Button.styled";
import { Input } from "../components/Input/Input";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext/useAuth';
import { signinUser } from '../services/AuthApi';

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

const FooterText = styled("p")({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: '12px',
  lineHeight: '150%',
  textAlign: 'center',
  color: '#999',
  marginTop: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '180px',
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

export function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = password.length >= 8;

  // Кнопка блокируется, если есть ошибка (ввели неверно)
  const emailError = email.length > 0 && !isEmailValid;
  const passwordError = password.length > 0 && !isPasswordValid;
  const isButtonDisabled = emailError || passwordError;

  const { authLogin } = useAuth();

  async function handleSignIn(e) {
    e.preventDefault();

    try {

      const data = await signinUser({ login: email, password });
      authLogin(data)
      navigate("/");


    }
    catch (err) {
      console.error(err.response.data.error);
    }
  }
  return (
    <PageWrapper>
      <FormContainer onSubmit={(e) => handleSignIn(e)}>
        <Title>Вход</Title>

        <Input
          type="email"
          placeholder="ivanovaeva@mail.ru"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isSuccess={isEmailValid}
          isError={emailError}
          errorMsg="Введите корректный email"
        />

        <Input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isSuccess={isPasswordValid}
          isError={passwordError}
          errorMsg="Упс! Введенные вами данные некорректны. Введите данные корректно и повторите попытку."
        />

        <ButtonDefault
          type="submit"
          style={{ marginTop: '20px' }}
          disabled={isButtonDisabled}  // Блокирует клик
          $disabled={isButtonDisabled} // МЕНЯЕТ ЦВЕТ НА СЕРЫЙ
        >
          Войти
        </ButtonDefault>

        <FooterText>
          Нужно зарегистрироваться?
          <Link to="/signup">Регистрируйтесь здесь</Link>
        </FooterText>
      </FormContainer>
    </PageWrapper>
  );
}
