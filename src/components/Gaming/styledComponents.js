import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  background-color: ${({isDark}) => (isDark ? '#0f0f0f' : '#f9f9f9')};
  color: ${({isDark}) => (isDark ? '#ffffff' : '#000000')};
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  display: flex;
`

export const Sidebar = styled.nav`
  width: 250px;
  background-color: ${({isDark}) => (isDark ? '#212121' : '#ffffff')};
  padding: 16px;
`

export const SidebarLink = styled(Link)`
  display: block;
  margin: 12px 0;
  font-weight: 600;
  color: ${({isDark}) => (isDark ? '#e2e8f0' : '#1e293b')};
  text-decoration: none;
  &:hover {
    color: #4f46e5;
  }
`

export const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
`

export const Heading = styled.h1`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  margin-bottom: 24px;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`

export const VideoItem = styled.li`
  background-color: ${({isDark}) => (isDark ? '#212121' : '#fff')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
  cursor: pointer;
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`

export const VideoDetails = styled.div`
  padding: 12px;
`

export const VideoTitle = styled.p`
  font-weight: 600;
  margin: 0 0 8px 0;
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
`

export const ViewCount = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 0;
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

export const FailureMsg = styled.p`
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
