import {Switch, Route, Redirect, useLocation} from 'react-router-dom'
import Cookies from 'js-cookie'

import {ThemeProvider} from './context/ThemeContext' // existing theme provider
import {SavedVideosProvider} from './context/SavedVideosContext' // import saved videos provider

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const jwtToken = Cookies.get('jwt_token')
  const location = useLocation()

  return (
    <ThemeProvider>
      <SavedVideosProvider>
        <>
          {jwtToken && location.pathname !== '/login' && <Header />}
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Route render={() => <Redirect to="/not-found" />} />
          </Switch>
        </>
      </SavedVideosProvider>
    </ThemeProvider>
  )
}

export default App
