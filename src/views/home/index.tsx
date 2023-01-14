import React, { memo } from 'react'
import './index.scss'

const Home = memo(() => {
  return (
    <div>
      <div className='home-banner'>
        <div className='banner-text'>
          <span>XQS-Blog</span>
          {/* 每一个不曾起舞的日子，都是对生命的辜负 */}
          <p>且视他人之疑目如盏盏鬼火，大胆地去走你的夜路</p>
          <div><button>Enter Blog</button></div>
        </div>
      </div>
      <div className='content'></div>
    </div>
  )
})

export default Home