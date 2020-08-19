import React from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'

const OwnerVideoButtons = (props) => (
  <div>
    <YouTube videoId= {props.videoId} />
    <Link to="/videos">
      <button>Back to all videos</button>
    </Link>
    <button onClick={props.destroy}>Delete Video</button>
    <Link to={`/videos/${props.video._id}/edit`}>
      <button>Edit</button>
    </Link>
  </div>
)

export default OwnerVideoButtons
