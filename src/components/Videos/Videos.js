import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
// const getVideoId = require('get-video-id')

class Videos extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: []
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/videos`,
      method: 'get'
    })
      .then(res => this.setState({ videos: res.data.videos }))
      .catch(console.error)
  }

  render () {
    const { videos } = this.state
    let videoList

    if (videos) {
      if (videos.length) {
        // console.log(videos)
        // console.log(videos[0].url)
        // const pic = getVideoId(videos[0].url).id
        // console.log(pic, 'pic')

        // convert each video's url into an id to use
        // const picId = videos.forEach(video => console.log(getVideoId(video.url).id))
        // console.log(picId)
        // assign that created id to each corresponding video
        // const something = videos.filter(video => getVideoId(video.url).id === picId) {
        //   let pic =
        // }

        videoList = videos.map(video => (
          <li key={video._id}>
            <Link to={`/videos/${video._id}`}>{video.url}</Link>
          </li>
        ))
      } else {
        videoList = 'No videos to display. Add some videos if you have an account.'
      }
    } else {
      videoList = 'Loading..'
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
