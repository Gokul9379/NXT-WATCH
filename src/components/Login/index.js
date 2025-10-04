import {Component} from 'react'
import Cookies from 'js-cookie'
import {ThemeProvider} from 'styled-components'
import {
  LoginContainer,
  FormWrapper,
  Logo,
  StyledInput,
  Label,
  CheckboxWrapper,
  Button,
  ErrorMessage,
  ThemeToggleButton,
} from './styledComponents'

const themes = {
  light: {
    background: '#f9f9f9',
    logo:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
    inputBackground: '#fff',
    color: '#000',
  },
  dark: {
    background: '#181818',
    logo:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
    inputBackground: '#313131',
    color: '#fff',
  },
}

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    isDarkTheme: false,
  }

  onChangeUsername = e => this.setState({username: e.target.value})

  onChangePassword = e => this.setState({password: e.target.value})

  onToggleShowPassword = e => this.setState({showPassword: e.target.checked})

  onThemeToggle = () =>
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
    })
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {username, password, showPassword, errorMsg, isDarkTheme} = this.state
    const themeProps = isDarkTheme ? themes.dark : themes.light
    return (
      <ThemeProvider theme={themeProps}>
        <LoginContainer data-testid="login">
          <FormWrapper onSubmit={this.onSubmitLogin}>
            <Logo src={themeProps.logo} alt="website logo" />
            <ThemeToggleButton
              type="button"
              onClick={this.onThemeToggle}
              data-testid="theme"
            >
              Toggle Theme
            </ThemeToggleButton>

            <Label htmlFor="username">Username</Label>
            <StyledInput
              id="username"
              value={username}
              onChange={this.onChangeUsername}
              theme={themeProps}
              placeholder="Username"
            />

            <Label htmlFor="password">Password</Label>
            <StyledInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={this.onChangePassword}
              theme={themeProps}
              placeholder="Password"
            />

            <CheckboxWrapper>
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={this.onToggleShowPassword}
              />
              <label htmlFor="showPassword">Show Password</label>
            </CheckboxWrapper>

            <Button type="submit">Login</Button>

            {errorMsg && (
              <ErrorMessage data-testid="errorMsg">{errorMsg}</ErrorMessage>
            )}
          </FormWrapper>
        </LoginContainer>
      </ThemeProvider>
    )
  }
}

export default Login
