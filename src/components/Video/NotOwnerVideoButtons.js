import React from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'

const NotOwnerVideoButtons = (props) => (
  <div>
    <YouTube videoId= {props.videoId} />
    <Link to="/videos">
      <button>Back to all videos</button>
    </Link>
  </div>
)

export default NotOwnerVideoButtons
