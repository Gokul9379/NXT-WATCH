import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({isDark}) => (isDark ? '#0f0f0f' : '#f9f9f9')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  padding: 20px;
`

export const PlayerWrapper = styled.div`
  max-width: 800px;
  margin: auto;
`

export const Title = styled.h2`
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  margin: 16px 0 8px 0;
`

export const InfoRow = styled.div`
  color: #64748b;
  font-size: 14px;
  margin-bottom: 12px;
`

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
`

export const Button = styled.button`
  border: none;
  background: none;
  color: ${({active}) => (active ? '#2563eb' : '#64748b')};
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`

export const ChannelImage = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`

export const ChannelDetails = styled.div`
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
`

export const Description = styled.p`
  color: ${({isDark}) => (isDark ? '#cbd5e1' : '#383838')};
  line-height: 1.4;
`

export const FailureContainer = styled.div`
  text-align: center;
  margin-top: 60px;
`

export const FailureImage = styled.img`
  width: 180px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
`

export const FailureMessage = styled.p`
  color: ${({isDark}) => (isDark ? '#fff' : '#64748b')};
  margin-bottom: 20px;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  cursor: pointer;
`
