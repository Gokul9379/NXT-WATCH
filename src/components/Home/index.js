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
  Banner,
  CloseBtn,
  BannerLogo,
  BannerText,
  BannerBtn,
  SearchContainer,
  SearchInput,
  SearchBtn,
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
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosMsg,
} from './styledComponents'

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    apiStatus: 'INITIAL',
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: 'LOADING'})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        if (data.videos.length === 0) {
          this.setState({apiStatus: 'EMPTY', videosList: []})
        } else {
          const videos = data.videos.map(video => ({
            id: video.id,
            title: video.title,
            thumbnailUrl: video.thumbnail_url,
            channelName: video.channel.name,
            channelProfileImage: video.channel.profile_image_url,
            viewCount: video.view_count,
            publishedAt: video.published_at,
          }))
          this.setState({videosList: videos, apiStatus: 'SUCCESS'})
        }
      } else {
        this.setState({apiStatus: 'FAILURE'})
      }
    } catch {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => this.getVideos()

  onRetry = () => this.getVideos()

  onClickVideo = id => {
    const {history} = this.props
    history.push(`/videos/${id}`)
  }

  onCloseBanner = () => this.setState({showBanner: false})

  renderBanner = () => {
    const {isDark} = this.context
    const {showBanner} = this.state
    if (!showBanner) return null

    return (
      <Banner data-testid="banner" isDark={isDark}>
        <CloseBtn
          data-testid="close"
          onClick={this.onCloseBanner}
          isDark={isDark}
        >
          &times;
        </CloseBtn>
        <BannerLogo
          src={
            isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
          alt="nxt watch logo"
        />
        <BannerText isDark={isDark}>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerText>
        <BannerBtn>GET IT NOW</BannerBtn>
      </Banner>
    )
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </div>
  )

  renderFailureView = () => {
    const {isDark} = this.context
    const failureImg = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-home-failure-dark-theme-lg-output-v0.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-home-failure-light-theme-lg-output-v0.png'
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

  renderNoVideosView = () => {
    const {isDark} = this.context
    return (
      <NoVideosContainer>
        <NoVideosImage
          src={
            isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-videos-dark-theme-lg-output-v0.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'
          }
          alt="no videos"
        />
        <NoVideosHeading isDark={isDark}>
          No Search results found
        </NoVideosHeading>
        <NoVideosMsg isDark={isDark}>
          Try different key words or remove search filter
        </NoVideosMsg>
        <RetryBtn onClick={this.onRetry}>Retry</RetryBtn>
      </NoVideosContainer>
    )
  }

  renderVideosList = () => {
    const {videosList} = this.state
    const {isDark} = this.context
    return (
      <VideosList>
        {videosList.map(video => (
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
    )
  }

  render() {
    const {apiStatus, searchInput} = this.state
    const {isDark} = this.context

    return (
      <Container data-testid="home" isDark={isDark}>
        <Sidebar isDark={isDark}>
          <SidebarLink as="a" href="/" isDark={isDark}>
            Home
          </SidebarLink>
          <SidebarLink as="a" href="/trending" isDark={isDark}>
            Trending
          </SidebarLink>
          <SidebarLink as="a" href="/gaming" isDark={isDark}>
            Gaming
          </SidebarLink>
          <SidebarLink as="a" href="/saved-videos" isDark={isDark}>
            Saved videos
          </SidebarLink>
          <p>CONTACT US</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
            width="32"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
            width="32"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
            width="32"
          />
          <p>Enjoy! Now to see your channels and recommendations!</p>
        </Sidebar>
        <Content>
          {this.renderBanner()}
          <SearchContainer>
            <SearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              isDark={isDark}
            />
            <SearchBtn data-testid="searchButton" onClick={this.onClickSearch}>
              Search
            </SearchBtn>
          </SearchContainer>
          {apiStatus === 'LOADING' && this.renderLoader()}
          {apiStatus === 'FAILURE' && this.renderFailureView()}
          {apiStatus === 'EMPTY' && this.renderNoVideosView()}
          {apiStatus === 'SUCCESS' && this.renderVideosList()}
        </Content>
      </Container>
    )
  }
}

Home.contextType = ThemeContext

export default withRouter(Home)
