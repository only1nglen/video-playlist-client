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
      method: 'get'
    })
      .then(res => this.setState({
        video: res.data.video,
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
    const { video, deleted, youtubeId } = this.state
    let videoDisplay

    if (deleted) {
      videoDisplay = <Redirect to={
        { pathname: '/videos' }
      } />
    } else if (video) {
      // console.log(this.props.user) // can get user, but cant access info like _id
      // console.log(video.owner) // works fine
      if (this.props.user !== null && this.props.user._id === video.owner) {
        videoDisplay =
         <div>
           <YouTube
             videoId= {youtubeId}
           />
           <Link to="/videos">Back to all videos</Link>
           <button onClick={this.destroy}>Delete Video</button>
           <Link to={`/videos/${this.props.match.params.id}/edit`}>
             <button>Edit</button>
           </Link>
         </div>
      } else if (this.props.user !== null && this.props.user._id !== video.owner) {
        videoDisplay =
      <div>
        <YouTube
          videoId= {youtubeId}
        />
        <Link to="/videos">Back to all videos</Link>
      </div>
      } else if (this.props.user === null) {
        videoDisplay =
      <div>
        <YouTube
          videoId= {youtubeId}
        />
        <Link to="/videos">Back to all videos</Link>
      </div>
      }
    } else {
      videoDisplay = <p>Loading...</p>
    }

    return (
      <div>
        {videoDisplay}
      </div>
    )
  }
}

export default Video
