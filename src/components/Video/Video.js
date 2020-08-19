import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import YouTube from 'react-youtube'

import axios from 'axios'
import apiUrl from '../../apiConfig'
import NotOwnerVideoButtons from './NotOwnerVideoButtons'
import OwnerVideoButtons from './OwnerVideoButtons'
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
      videoDisplay =
        <Redirect to={{ pathname: '/videos' }} />
    } else if (video) {
      if (this.props.user !== null && this.props.user._id === video.owner) {
        videoDisplay =
         <div>
           <OwnerVideoButtons destroy ={this.destroy} video= {video} videoId= {youtubeId} />
         </div>
      } else if (this.props.user !== null && this.props.user._id !== video.owner) {
        videoDisplay =
      <div>
        <NotOwnerVideoButtons video= {video} videoId= {youtubeId}/>
      </div>
      } else if (this.props.user === null) {
        videoDisplay =
      <div>
        <NotOwnerVideoButtons video= {video} videoId= {youtubeId}/>
      </div>
      }
    } else {
      videoDisplay = <p>Loading...</p>
    }

    return (
      <div className='individual-video'>
        {videoDisplay}
      </div>
    )
  }
}

export default Video
