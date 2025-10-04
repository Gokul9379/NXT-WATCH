import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  background-color: ${({isDark}) => (isDark ? '#181818' : '#f9f9f9')};
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
  text-decoration: none;
  font-weight: 600;
  color: ${({isDark}) => (isDark ? '#e2e8f0' : '#1e293b')};
  &:hover {
    color: #4f46e5;
  }
`

export const Content = styled.main`
  flex-grow: 1;
  padding: 20px;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`

export const VideoItem = styled.li`
  background-color: ${({isDark}) => (isDark ? '#212121' : '#fff')};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
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

export const ChannelName = styled.p`
  font-size: 14px;
  margin: 0;
  color: #64748b;
`

export const NoVideosContainer = styled.div`
  text-align: center;
  margin-top: 60px;
`

export const NoVideosImage = styled.img`
  max-width: 240px;
  margin-bottom: 16px;
`

export const NoVideosHeading = styled.h1`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
`

export const NoVideosMessage = styled.p`
  color: ${({isDark}) => (isDark ? '#fff' : '#64748b')};
`
