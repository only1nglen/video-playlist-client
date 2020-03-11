import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

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
        videoList = videos.map(video => (
          <li key={video._id}>
            <Link to={`/videos/${video._id}`}>random</Link>
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
