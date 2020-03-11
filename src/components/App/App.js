import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Home from '../Home/Home'
import Videos from '../Videos/Videos'
import AddVideo from '../AddVideo/AddVideo'
import VideoEdit from '../VideoEdit/VideoEdit'
import Video from '../Video/Video'

// const API_KEY = AIzaSyCiVYBtFWbgu9qSgwgS2HnE1czimPBsuwI

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' component={Home}/>
          <Route exact path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute exact user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact user={user} path='/add-video' render={() => (
            <AddVideo msgAlert={this.msgAlert} user={user} />
          )} />
          <Route exact user={user} path='/videos' render={() => (
            <Videos msgAlert={this.msgAlert} user={user} />
          )} />
          <Route exact user={user} path='/videos/:id' render={({ match }) => (
            <Video user={user} msgAlert={this.msgAlert} match={match} />
          )} />
          <AuthenticatedRoute exact user={user} path='/videos/:id/edit' render={({ match }) => (
            <VideoEdit user={user} msgAlert={this.msgAlert} match={match} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
