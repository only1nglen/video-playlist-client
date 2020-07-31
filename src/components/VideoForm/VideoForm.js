import React from 'react'
import { Link } from 'react-router-dom'

const VideoForm = ({ video, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <input
      placeholder="Video URL"
      value={video.url}
      name="url"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default VideoForm
