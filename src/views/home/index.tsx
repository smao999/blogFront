import React, { memo } from 'react'
import './index.scss'

const Home = memo(() => {
  return (
    <div>
      <div className='home-banner'>
        <div className='banner-text'>
          <span>XQS-Blog</span>
          <p>只要朝着一个方向努力，一切都会变得得心应手</p>
          <div><button>Enter Blog</button></div>
        </div>
      </div>
      <div className='content'></div>
    </div>
  )
})

export default Home