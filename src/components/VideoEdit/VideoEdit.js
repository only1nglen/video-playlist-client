import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import VideoForm from '../VideoForm/VideoForm'

class VideoEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      video: {
        url: ''
      },
      updated: false
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

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedMovie = Object.assign(this.state.video, updatedField)

    this.setState({ video: editedMovie })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/videos/${this.props.match.params.id}`,
      method: 'PATCH',
      data: { video: this.state.video },
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { video, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={`/videos/${this.props.match.params.id}`} />
    }

    return (
      <div>
        <VideoForm
          video={video}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/videos/${this.props.match.params.id}`}
        />
      </div>
    )
  }
}

export default VideoEdit
