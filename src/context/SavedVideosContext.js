import {createContext, useState, useEffect} from 'react'

export const SavedVideosContext = createContext()

export const SavedVideosProvider = ({children}) => {
  const [savedVideos, setSavedVideos] = useState(() => {
    const saved = localStorage.getItem('savedVideos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos))
  }, [savedVideos])

  const addVideo = video => {
    setSavedVideos(prev => {
      if (prev.some(v => v.id === video.id)) return prev
      return [...prev, video]
    })
  }

  const removeVideo = id => {
    setSavedVideos(prev => prev.filter(video => video.id !== id))
  }

  const isVideoSaved = id => savedVideos.some(video => video.id === id)

  return (
    <SavedVideosContext.Provider
      value={{savedVideos, addVideo, removeVideo, isVideoSaved}}
    >
      {children}
    </SavedVideosContext.Provider>
  )
}
