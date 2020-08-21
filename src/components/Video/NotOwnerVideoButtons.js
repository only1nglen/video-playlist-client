import React from 'react'
import { Link } from 'react-router-dom'
// import YouTube from 'react-youtube'
import Button from 'react-bootstrap/Button'

const NotOwnerVideoButtons = (props) => (
  <div>
    <div className="video-box">
      <div className="video-player">
        <iframe src={`https://www.youtube.com/embed/${props.videoId}`}
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
    </div>
    <div className="btn-group mr-2">
      <Link to="/videos">
        <Button variant="secondary">Back</Button>
      </Link>
    </div>
  </div>
)

export default NotOwnerVideoButtons
