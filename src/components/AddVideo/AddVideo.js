import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import VideoForm from '../VideoForm/VideoForm'

// const getVideoId = require('get-video-id')

class AddVideo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      video: {
        url: ''
      },
      addedVideoId: null
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedVideo = Object.assign(this.state.video, updatedField)

    this.setState({ video: editedVideo })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/videos`,
      method: 'POST',
      data: { video: this.state.video },
      headers: {
        Authorization: `Bearer ${this.props.user.token}`
      }
    })
      .then(res => this.setState({ addedVideoId: res.data.video._id }))
      .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { addedVideoId, video } = this.state

    if (addedVideoId) {
      return <Redirect to={`/videos/${addedVideoId}`} />
    }

    return (
      <div>
        <VideoForm
          video={video}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/videos"
        />
      </div>
    )
  }
}

export default AddVideo
