import React from 'react'
// import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const VideoForm = ({ video, handleSubmit, handleChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>

    <Form.Group controlId="url">
      <Form.Label>Enter a YouTube URL</Form.Label>
      <Form.Control
        required
        type="text"
        name="url"
        value={video.url}
        placeholder="Enter URL"
        onChange={handleChange} />
    </Form.Group>

    <div className="btn-group mr-2">
      <Button
        variant="primary"
        type="submit">
        Submit
      </Button>
    </div>

    <div className="btn-group mr-2">
      <Button
        variant="danger">
          Cancel
      </Button>
    </div>

  </Form>
)

export default VideoForm
