import React from 'react';
import { InputDefault } from './Input.styled'; 
/* Импортируем именно InputDefault, как в стилях */

export const Input = ({ placeholder, type, value, onChange, isError, isSuccess, errorMsg }) => {
  return (
    <div style={{ width: '100%', marginBottom: isError ? '10px' : '0' }}>
      <InputDefault 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        $error={isError} 
        $active={isSuccess} 
      />
      {/* Если есть ошибка, выводим её под инпутом */}
      {isError && errorMsg && (
        <p style={{ 
          color: '#F25050', 
          fontSize: '10px', 
          textAlign: 'center', 
          marginTop: '4px',
          fontFamily: "'Montserrat', sans-serif" 
        }}>
          {errorMsg}
        </p>
      )}
    </div>
  );
};