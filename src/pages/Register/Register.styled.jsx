import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GooseContainer = styled.div`
  position: absolute;
  left: 49px;
  bottom: 0px;
`;

export const ContainerRegisterForm = styled.div`
  height: 100vh;
  background-color: #ddebf8;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 480px;
  padding: 40px;
  margin: 0 auto;
  border-radius: 8px;
  margin-bottom: 24px;

  position: relative;
`;

export const ContainerLogInBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const RegisterInput = styled.input`
  width: 400px;
  border-radius: 8px;
  height: 54px;
  border: 1px solid #dce3e5;
  padding: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #dce3e5;
  }
  :-ms-input-placeholder {
    color: #dce3e5;
  }
`;
export const Registerlabel = styled.label`
  &:nth-child(7) {
    margin-bottom: 48px;
  }

  &:nth-child(-n + 5) {
    margin-bottom: 18px;
  }
`;
export const RegisterTitle = styled.h1`
  color: #3e85f3;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;
`;
export const RegisterNameOfInput = styled.span`
  color: #111111;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const RegisterSubmitBtn = styled.button`
  font-size: 18px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;

  background-color: #3e85f3;
  border: none;
  border-radius: 16px;
  height: 56px;
  width: 100%;

  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`;

export const LogInBtn = styled(NavLink)`
  border: none;
  cursor: pointer;
  position: relative;
`;

export const LogInBtnText = styled.span`
  font-size: 18px;
  color: #3e85f3;

  &:after {
    content: ' ';
    background: #3e85f3;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 20px;
    left: 0px;
  }
`;
