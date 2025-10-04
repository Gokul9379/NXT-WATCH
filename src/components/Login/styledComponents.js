import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${({theme}) => theme.background};
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.color};
  padding: 20px;
`

export const FormWrapper = styled.form`
  background-color: ${({theme}) => theme.background};
  padding: 32px 24px;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 576px) {
    padding: 16px 12px;
    max-width: 100%;
  }
`

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 24px;

  @media screen and (max-width: 576px) {
    width: 120px;
    margin-bottom: 20px;
  }
`

export const StyledInput = styled.input`
  background-color: ${({theme}) => theme.inputBackground};
  color: ${({theme}) => theme.color};
  border: 1px solid #cbd5e1;
  margin: 8px 0 16px 0;
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    outline-color: #3b82f6;
  }
`

export const Label = styled.label`
  width: 100%;
  font-size: 14px;
  margin-bottom: 4px;
`

export const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  input[type='checkbox'] {
    margin-right: 8px;
    width: 18px;
    height: 18px;
  }

  label {
    font-size: 14px;
  }
`

export const Button = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 0;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: 12px;
  width: 100%;
  text-align: center;
`

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({theme}) => theme.color};
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 24px;
  text-decoration: underline;

  &:hover {
    opacity: 0.8;
  }
`
