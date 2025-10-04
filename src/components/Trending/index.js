import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {withRouter} from 'react-router-dom'

import {ThemeContext} from '../../context/ThemeContext'

import {
  Container,
  Sidebar,
  SidebarLink,
  Content,
  Heading,
  VideosList,
  VideoItem,
  Thumbnail,
  VideoDetails,
  VideoTitle,
  ChannelName,
  ViewsDate,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureMsg,
  RetryBtn,
} from './styledComponents'

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: 'INITIAL',
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: 'LOADING'})
    const jwtToken = Cookies.get('jwt_token')
    if (!jwtToken) {
      this.setState({apiStatus: 'FAILURE'})
      return
    }
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const trendingVideos = data.videos.map(video => ({
          id: video.id,
          title: video.title,
          thumbnailUrl: video.thumbnail_url,
          channelName: video.channel.name,
          channelProfileImage: video.channel.profile_image_url,
          viewCount: video.view_count,
          publishedAt: video.published_at,
        }))
        this.setState({trendingVideos, apiStatus: 'SUCCESS'})
      } else {
        this.setState({apiStatus: 'FAILURE'})
      }
    } catch {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  onRetry = () => this.getTrendingVideos()

  onClickVideo = id => {
    const {history} = this.props
    history.push(`/videos/${id}`)
  }

  renderLoader = () => {
    const {isDark} = this.context
    return (
      <div className="loader-container" data-testid="loader">
        <Loader
          type="ThreeDots"
          color={isDark ? '#ffffff' : '#0b69ff'}
          height={50}
          width={50}
        />
      </div>
    )
  }

  renderFailureView = () => {
    const {isDark} = this.context
    const failureImg = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-trending-failure-dark-theme-lg-output-v0.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-trending-failure-light-theme-lg-output-v0.png'
    return (
      <FailureContainer>
        <FailureImage src={failureImg} alt="failure view" />
        <FailureHeading isDark={isDark}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureMsg isDark={isDark}>
          We are having some trouble. Please try again.
        </FailureMsg>
        <RetryBtn onClick={this.onRetry}>Retry</RetryBtn>
      </FailureContainer>
    )
  }

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state
    const {isDark} = this.context
    return (
      <>
        <Heading isDark={isDark}>Trending</Heading>
        <VideosList>
          {trendingVideos.map(video => (
            <VideoItem
              key={video.id}
              isDark={isDark}
              onClick={() => this.onClickVideo(video.id)}
              data-testid="videoItem"
            >
              <Thumbnail src={video.thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <VideoTitle isDark={isDark}>{video.title}</VideoTitle>
                <ChannelName>{video.channelName}</ChannelName>
                <ViewsDate>
                  {video.viewCount} views • {video.publishedAt}
                </ViewsDate>
              </VideoDetails>
            </VideoItem>
          ))}
        </VideosList>
      </>
    )
  }

  render() {
    const {apiStatus} = this.state
    const {isDark} = this.context
    return (
      <Container data-testid="trending" isDark={isDark}>
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
            Saved Videos
          </SidebarLink>
        </Sidebar>
        <Content>
          {apiStatus === 'LOADING' && this.renderLoader()}
          {apiStatus === 'FAILURE' && this.renderFailureView()}
          {apiStatus === 'SUCCESS' && this.renderTrendingVideos()}
        </Content>
      </Container>
    )
  }
}

Trending.contextType = ThemeContext

export default withRouter(Trending)
