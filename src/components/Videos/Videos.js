import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
const getVideoId = require('get-video-id')

class Videos extends Component {
  constructor () {
    super()

    this.state = {
      videos: []
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/videos`,
      method: 'get'
    })
      .then(res => this.setState({
        videos: res.data.videos
      }))
      .catch(console.error)
  }

  render () {
    const { videos } = this.state
    let videoList

    if (videos) {
      if (videos.length) {
        videoList = videos.map(video => (
          <div key={video._id}>
            <Link to={`/videos/${video._id}`}>
              <img className='video-thumb' src={`https://i1.ytimg.com/vi/${getVideoId(video.url).id}/default.jpg`}/>
            </Link>
          </div>
        ))
      } else {
        videoList = 'Loading...'
      }
    }

    return (
      <div>
        <h4 className='title-videos'>Video Collection</h4>
        <div className='video-collection'>
          {videoList}
        </div>
      </div>
    )
  }
}

export default Videos
