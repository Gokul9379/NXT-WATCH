import {useState, useEffect, useContext} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {ThemeContext} from '../../context/ThemeContext'
import {SavedVideosContext} from '../../context/SavedVideosContext'

import {
  Container,
  PlayerWrapper,
  Title,
  InfoRow,
  ButtonsGroup,
  Button,
  ChannelContainer,
  ChannelImage,
  ChannelDetails,
  Description,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureMessage,
  RetryBtn,
} from './styledComponents'

const VideoItemDetails = props => {
  const {isDark} = useContext(ThemeContext)
  const {addVideo, removeVideo, isVideoSaved} = useContext(SavedVideosContext)

  const {
    match: {
      params: {id: videoId},
    },
  } = props

  const [videoDetails, setVideoDetails] = useState(null)
  const [apiStatus, setApiStatus] = useState('INITIAL')

  const fetchVideoDetails = async () => {
    setApiStatus('LOADING')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${videoId}`

    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const video = data.video_details
        const formattedVideo = {
          id: video.id,
          title: video.title,
          videoUrl: video.video_url,
          thumbnailUrl: video.thumbnail_url,
          channelName: video.channel.name,
          channelProfileImage: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
          viewCount: video.view_count,
          publishedAt: video.published_at,
          description: video.description,
        }
        setVideoDetails(formattedVideo)
        setApiStatus('SUCCESS')
      } else {
        setApiStatus('FAILURE')
      }
    } catch {
      setApiStatus('FAILURE')
    }
  }

  useEffect(() => {
    fetchVideoDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId])

  const onRetry = () => {
    fetchVideoDetails()
  }

  const onClickSave = () => {
    if (!videoDetails) return

    if (isVideoSaved(videoDetails.id)) {
      removeVideo(videoDetails.id)
    } else {
      addVideo(videoDetails)
    }
  }

  if (apiStatus === 'LOADING') {
    return (
      <Container data-testid="videoItemDetails" isDark={isDark}>
        <div className="loader-container" data-testid="loader">
          <Loader
            type="ThreeDots"
            color={isDark ? '#ffffff' : '#0b69ff'}
            height={50}
            width={50}
          />
        </div>
      </Container>
    )
  }

  if (apiStatus === 'FAILURE') {
    const failureImg = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-video-item-details-failure-dark-theme-lg-output-v0.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-video-item-details-failure-light-theme-lg-output-v0.png'

    return (
      <Container data-testid="videoItemDetails" isDark={isDark}>
        <FailureContainer>
          <FailureImage src={failureImg} alt="failure view" />
          <FailureHeading>Oops! Something Went Wrong</FailureHeading>
          <FailureMessage>
            We are having some trouble. Please try again.
          </FailureMessage>
          <RetryBtn onClick={onRetry}>Retry</RetryBtn>
        </FailureContainer>
      </Container>
    )
  }

  if (apiStatus === 'SUCCESS' && videoDetails) {
    const saved = isVideoSaved(videoDetails.id)

    return (
      <Container data-testid="videoItemDetails" isDark={isDark}>
        <PlayerWrapper>
          <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
        </PlayerWrapper>
        <Title isDark={isDark}>{videoDetails.title}</Title>
        <InfoRow>
          {videoDetails.viewCount} views • {videoDetails.publishedAt}
        </InfoRow>
        <ButtonsGroup>
          <Button active={false}>👍 Like</Button>
          <Button active={false}>👎 Dislike</Button>
          <Button active={saved} onClick={onClickSave}>
            {saved ? 'Saved' : 'Save'}
          </Button>
        </ButtonsGroup>
        <hr />
        <ChannelContainer>
          <ChannelImage
            src={videoDetails.channelProfileImage}
            alt="channel logo"
          />
          <ChannelDetails isDark={isDark}>
            <p>{videoDetails.channelName}</p>
            <p>{videoDetails.subscriberCount} subscribers</p>
          </ChannelDetails>
        </ChannelContainer>
        <Description isDark={isDark}>{videoDetails.description}</Description>
      </Container>
    )
  }

  return null
}

export default withRouter(VideoItemDetails)
