import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className='homepage'>
    <Link to="/videos">
      <Image src="https://i.imgur.com/tJhGQaX.png" alt="home-bg" fluid />
    </Link>
  </div>
)

export default Home
