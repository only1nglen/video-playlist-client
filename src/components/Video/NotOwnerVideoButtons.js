import React from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import Button from 'react-bootstrap/Button'

const NotOwnerVideoButtons = (props) => (
  <div>
    <div>
      <YouTube videoId={props.videoId} />
    </div>
    <div className="btn-group mr-2">
      <Link to="/videos">
        <Button variant="secondary">Back</Button>
      </Link>
    </div>
  </div>
)

export default NotOwnerVideoButtons
