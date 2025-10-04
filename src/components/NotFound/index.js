import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({isDark}) => (isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  padding: 24px;
  text-align: center;
`

const Image = styled.img`
  max-width: 280px;
  margin-bottom: 24px;
`

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`

const Message = styled.p`
  font-size: 18px;
  max-width: 400px;
`

const NotFound = ({isDark = false}) => {
  const imageUrl = isDark
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png' // Use dark theme image if available

  return (
    <Container data-testid="notFound" isDark={isDark}>
      <Image src={imageUrl} alt="not found" />
      <Heading>Page Not Found</Heading>
      <Message>
        We are sorry, the page you requested could not be found.
      </Message>
    </Container>
  )
}

export default NotFound
