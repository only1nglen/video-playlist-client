import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class Video extends Component {
  constructor (props) {
    super(props)

    this.state = {
      video: null,
      deleted: false
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

    if (!video) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/videos', state: { msg: 'Video succesfully deleted!' } }
      } />
    }

    return (
      <div>
        <h4>{video.url}</h4>
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
