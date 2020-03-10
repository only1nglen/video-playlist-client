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
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      // .then(res => console.log(res.data.videos))
      .then(res => this.setState({ videos: res.data.videos }))
      .catch(console.error)
  }

  render () {
    const videos = this.state.videos.map(video => (
      <li key={video._id}>
        <Link to={`/videos/${video._id}`}>random</Link>
      </li>
    ))

    return (
      <div>
        <h4>Videos</h4>
        <ul>
          {videos}
        </ul>
      </div>
    )
  }
}

export default Videos
