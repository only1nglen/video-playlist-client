import React from 'react'
import { Link } from 'react-router-dom'
import YouTube from 'react-youtube'
import Button from 'react-bootstrap/Button'

const OwnerVideoButtons = (props) => (
  <div>
    <YouTube videoId= {props.videoId} />
    <div className="btn-group mr-2">
      <Link to="/videos">
        <Button variant="secondary">Back</Button>
      </Link>
    </div>
    <div className="btn-group mr-2">
      <Link to={`/videos/${props.video._id}/edit`}>
        <Button variant="info">Edit</Button>
      </Link>
    </div>
    <div className="btn-group mr-2 ">
      <Button variant="danger" onClick={props.destroy}>Delete</Button>
    </div>
  </div>
)

export default OwnerVideoButtons
