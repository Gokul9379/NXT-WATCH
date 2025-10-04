import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({isDark}) => (isDark ? '#181818' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  font-family: 'Roboto', sans-serif;
`

export const LogoImage = styled.img`
  width: 130px;
  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  font-size: 18px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  padding: 6px 14px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
`

export const PopupContent = styled.div`
  background-color: ${({isDark}) => (isDark ? '#313131' : '#ffffff')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  padding: 24px;
  border-radius: 8px;
  width: 320px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`

export const PopupText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`

export const PopupButtons = styled.div`
  display: flex;
  justify-content: space-around;
`

export const PopupButton = styled.button`
  background-color: ${({confirm}) => (confirm ? '#4f46e5' : 'transparent')};
  border: ${({confirm, isDark}) =>
    confirm ? 'none' : `1px solid ${isDark ? '#ffffff' : '#000000'}`};
  color: ${({someCondition, anotherCondition, someOtherCondition}) => {
    if (someCondition) {
      if (anotherCondition) {
        return '#fff'
      }
      return '#000'
    }
    if (someOtherCondition) {
      return '#ccc'
    }
    return '#333'
  }};
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  min-width
`
