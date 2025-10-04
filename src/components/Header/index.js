import {useContext} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {
  HeaderContainer,
  LogoImage,
  ButtonsContainer,
  IconButton,
  LogoutButton,
  PopupContent,
  PopupText,
  PopupButtons,
  PopupButton,
} from './styledComponents'

import {ThemeContext} from '../../context/ThemeContext'

const Header = props => {
  const {isDark, toggleTheme} = useContext(ThemeContext)

  const logoSrc = isDark
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const onConfirmLogout = closePopup => {
    Cookies.remove('jwt_token')
    closePopup()
    const {history} = props
    history.replace('/login')
  }

  return (
    <HeaderContainer isDark={isDark}>
      <Link to="/">
        <LogoImage src={logoSrc} alt="website logo" />
      </Link>
      <ButtonsContainer>
        <IconButton
          onClick={toggleTheme}
          data-testid="theme"
          isDark={isDark}
          aria-label="Toggle Theme"
        >
          {isDark ? '🌞' : '🌙'}
        </IconButton>

        <Popup
          modal
          nested
          trigger={
            <LogoutButton isDark={isDark} type="button">
              Logout
            </LogoutButton>
          }
          className="popup-content"
        >
          {close => (
            <PopupContent isDark={isDark} data-testid="logoutPopup">
              <PopupText>Are you sure, you want to logout?</PopupText>
              <PopupButtons>
                <PopupButton
                  type="button"
                  onClick={() => close()}
                  isDark={isDark}
                >
                  Cancel
                </PopupButton>
                <PopupButton
                  type="button"
                  confirm
                  onClick={() => onConfirmLogout(close)}
                  isDark={isDark}
                >
                  Confirm
                </PopupButton>
              </PopupButtons>
            </PopupContent>
          )}
        </Popup>
      </ButtonsContainer>
    </HeaderContainer>
  )
}

export default withRouter(Header)
