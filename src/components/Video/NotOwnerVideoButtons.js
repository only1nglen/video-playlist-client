import React from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import Button from 'react-bootstrap/Button'

const NotOwnerVideoButtons = (props) => (
  <div>
    <YouTube videoId= {props.videoId} />
    <Link to="/videos">
      <Button variant="secondary">Back</Button>
    </Link>
  </div>
)

export default NotOwnerVideoButtons
