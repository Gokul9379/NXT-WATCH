import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {ThemeContext} from '../../context/ThemeContext'
import {SavedVideosContext} from '../../context/SavedVideosContext'

import {
  Container,
  Sidebar,
  SidebarLink,
  Content,
  VideosList,
  VideoItem,
  Thumbnail,
  VideoDetails,
  VideoTitle,
  ChannelName,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosMessage,
} from './styledComponents'

const SavedVideos = () => {
  const history = useHistory()
  const {isDark} = useContext(ThemeContext)
  const {savedVideos} = useContext(SavedVideosContext)

  const onClickVideo = id => {
    history.push(`/videos/${id}`)
  }

  const renderNoSavedVideosView = () => (
    <NoVideosContainer>
      <NoVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-light-theme-lg-output-v0.png"
        alt="no saved videos"
      />
      <NoVideosHeading isDark={isDark}>No saved videos found</NoVideosHeading>
      <NoVideosMessage isDark={isDark}>
        You can save your videos while watching them.
      </NoVideosMessage>
    </NoVideosContainer>
  )

  const renderSavedVideosList = () => (
    <VideosList>
      {savedVideos.map(video => (
        <VideoItem
          key={video.id}
          isDark={isDark}
          onClick={() => onClickVideo(video.id)}
          data-testid="videoItem"
        >
          <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
          <VideoDetails>
            <VideoTitle isDark={isDark}>{video.title}</VideoTitle>
            <ChannelName>{video.channelName}</ChannelName>
          </VideoDetails>
        </VideoItem>
      ))}
    </VideosList>
  )

  return (
    <Container data-testid="savedVideos" isDark={isDark}>
      <Sidebar isDark={isDark}>
        <SidebarLink isDark={isDark} to="/">
          Home
        </SidebarLink>
        <SidebarLink isDark={isDark} to="/trending">
          Trending
        </SidebarLink>
        <SidebarLink isDark={isDark} to="/gaming">
          Gaming
        </SidebarLink>
        <SidebarLink isDark={isDark} to="/saved-videos">
          Saved videos
        </SidebarLink>
      </Sidebar>
      <Content>
        {savedVideos.length === 0
          ? renderNoSavedVideosView()
          : renderSavedVideosList()}
      </Content>
    </Container>
  )
}

export default SavedVideos
