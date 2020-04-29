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
        // console.log(videos, 'inside render')
        // console.log(videos[0].url)
        // const pic = getVideoId(videos[0].url).id
        // console.log(pic, 'pic')

        // convert each video's url into an id to use
        // const videoId = videos.map(video =>
        //   getVideoId(video.url).id
        // )
        // console.log(videoId, 'is videoId')

        // have each youtube id go into a img src link

        videoList = videos.map(video => (
          <div key={video._id}>
            <Link to={`/videos/${video._id}`}> <img src={`https://i1.ytimg.com/vi/${getVideoId(video.url).id}/default.jpg`}/> </Link>
          </div>
        ))
      } else {
        videoList = 'No videos to display. Add some videos if you have an account.'
      }
    }

    return (
      <div>
        <h4>Videos</h4>
        <ul>
          {videoList}
        </ul>
      </div>
    )
  }
}

export default Videos
