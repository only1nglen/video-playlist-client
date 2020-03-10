import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import YouTube from 'react-youtube'

import axios from 'axios'
import apiUrl from '../../apiConfig'
const getVideoId = require('get-video-id')

class Video extends Component {
  constructor (props) {
    super(props)

    this.state = {
      video: null,
      deleted: false,
      youtubeId: null
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/videos/${this.props.match.params.id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ video: res.data.video }))
      // .then(res => this.setState({
      //   youtubeId: JSON.stringify(getVideoId(res.data.video.url).id)
      // }))
      .catch(console.error)

    axios({
      url: `${apiUrl}/videos/${this.props.match.params.id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      // .then(res => this.setState({ video: res.data.video }))
      .then(res => this.setState({
        youtubeId: getVideoId(res.data.video.url).id
      }))
      .catch(console.error)
  }

  destroy = () => {
    axios({
      url: `${apiUrl}/videos/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { video, deleted } = this.state

    if (video) {
      const youtubeId = JSON.stringify(getVideoId(video.url).id)
      console.log(youtubeId)
      // return youtubeId
    }

    if (!video) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/videos' }
      } />
    }

    return (
      <div>
        <YouTube
          videoId= {this.state.youtubeId}
        />
        <button onClick={this.destroy}>Delete Video</button>
        <Link to={`/videos/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/videos">Back to all videos</Link>
      </div>
    )
  }
}

export default Video
