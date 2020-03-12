// import React, { useState, useEffect, Fragment } from 'react'
// import { Link, Redirect } from 'react-router-dom'
// import YouTube from 'react-youtube'
//
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
//
// const getVideoId = require('get-video-id')
//
// const Video = props => {
//   const [video, setVideo] = useState(null)
//   const [deleted, setDeleted] = useState(false)
//   const [youtubeId, setYoutubeId] = useState(null)
//
//   useEffect(() => {
//     axios({
//       url: `${apiUrl}/videos/${props.match.params.id}`,
//       method: 'GET'
//     })
//       .then(res => setVideo(res.data.video))
//       .catch(console.error)
//   }, [])
//
//   useEffect(() => {
//     axios({
//       url: `${apiUrl}/videos/${props.match.params.id}`,
//       method: 'GET'
//     })
//       .then(res => setYoutubeId(getVideoId(res.data.video.url).id))
//       .catch(console.error)
//   }, [])
//
//   const destroy = () => {
//     axios({
//       url: `${apiUrl}/videos/${this.props.match.params.id}`,
//       method: 'DELETE',
//       headers: {
//         Authorization: `Bearer ${this.props.user.token}`
//       }
//     })
//       .then(() => setDeleted(true))
//       .catch(console.error)
//   }
//
//   // if (props.user._id === state.videos.owner ) {
//   //       setIsOwner === true
//   //     } else {
//   //       setIsOwner === false
//   //     }
//
//   const videoOwner = (
//     <Fragment>
//       <button onClick={destroy}>Delete Video</button>
//       <Link to={`/videos/${props.match.params.id}/edit`}>
//         <button>Edit</button>
//       </Link>
//     </Fragment>
//   )
//
//   const allUsers = (
//     <Fragment>
//       <YouTube
//         videoId= {youtubeId}
//       />
//       <Link to="/videos">Back to all videos</Link>
//     </Fragment>
//   )
//
//   let videoDisplay
//
//   if (deleted) {
//     videoDisplay = <Redirect to={
//       { pathname: '/videos' }
//     } />
//   } if (video) {
//     if (this.props.user._id === video.owner) {
//       <div>
//         {videoOwner}
//       </div>
//   } if (!this.props.user._id === video.owner) {
//     <div>
//       {allUsers}
//     </div>
//   } else {
//     videoDisplay = <p>Loading...</p>
//   }
//
//   return (
//     <div>
//       {videoDisplay}
//     </div>
//   )
// }
//
// export default Video
