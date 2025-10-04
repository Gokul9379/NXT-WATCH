import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({isDark}) => (isDark ? '#181818' : '#f9f9f9')};
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  display: flex;

  @media (max-width: 575px) {
    flex-direction: column;
  }
`

export const Sidebar = styled.nav`
  width: 250px;
  padding: 16px;
  background-color: ${({isDark}) => (isDark ? '#212121' : '#fff')};
  display: flex;
  flex-direction: column;

  @media (max-width: 575px) {
    width: 100%;
    padding: 12px 10px;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const SidebarLink = styled.a`
  display: block;
  margin: 12px 0;
  color: ${({isDark}) => (isDark ? '#e2e8f0' : '#1e293b')};
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #4f46e5;
  }

  @media (max-width: 575px) {
    margin: 0;
    font-size: 14px;
  }
`

export const Content = styled.main`
  flex-grow: 1;
  padding: 20px;

  @media (max-width: 575px) {
    padding: 12px 10px;
  }
`

export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  color: #fff;
  position: relative;

  @media (max-width: 575px) {
    padding: 12px 16px;
    margin-bottom: 16px;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 575px) {
    right: 10px;
    top: 10px;
    font-size: 18px;
  }
`

export const BannerLogo = styled.img`
  width: 140px;
  margin-bottom: 15px;

  @media (max-width: 575px) {
    width: 110px;
    margin-bottom: 10px;
  }
`

export const BannerText = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  max-width: 400px;

  @media (max-width: 575px) {
    font-size: 14px;
    max-width: none;
    margin-bottom: 12px;
  }
`

export const BannerBtn = styled.button`
  background-color: #4f46e5;
  border: none;
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 575px) {
    padding: 8px 20px;
    font-size: 14px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 575px) {
    margin-bottom: 12px;
  }
`

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #94a3b8;
  border-radius: 5px 0 0 5px;
  background-color: ${({isDark}) => (isDark ? '#313131' : '#fff')};
  color: ${({isDark}) => (isDark ? '#f1f5f9' : '#000')};
  outline: none;
  font-size: 16px;

  @media (max-width: 575px) {
    font-size: 14px;
  }
`

export const SearchBtn = styled.button`
  background-color: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 575px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 18px;

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`

export const VideoItem = styled.li`
  cursor: pointer;
  background-color: ${({isDark}) => (isDark ? '#212121' : '#fff')};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;

  @media (max-width: 575px) {
    height: 120px;
  }
`

export const VideoDetails = styled.div`
  padding: 10px;
`

export const VideoTitle = styled.p`
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
  font-size: 16px;

  @media (max-width: 575px) {
    font-size: 14px;
  }
`

export const ChannelName = styled.p`
  margin: 0 0 5px 0;
  font-size: 14px;
  color: #64748b;

  @media (max-width: 575px) {
    font-size: 12px;
  }
`

export const ViewsDate = styled.p`
  margin: 0;
  font-size: 12px;
  color: #64748b;
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

export const NoVideosContainer = styled.div`
  text-align: center;
  margin-top: 60px;
`

export const NoVideosImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
`

export const NoVideosHeading = styled.h1`
  color: ${({isDark}) => (isDark ? '#fff' : '#000')};
`

export const NoVideosMsg = styled.p`
  color: ${({isDark}) => (isDark ? '#fff' : '#64748b')};
`
