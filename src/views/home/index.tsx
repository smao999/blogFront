import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Home = memo(() => {
  // react-router 6 中使用这个hook代替history.push,需要使用replace的话配置{replace:true}
  const navigate = useNavigate()

  return (
    <div>
      <div className='home-banner'>
        <div className='banner-text'>
          <span>XQS-Blog</span>
          {/* 每一个不曾起舞的日子，都是对生命的辜负 */}
          <p>且视他人之疑目如盏盏鬼火，大胆地去走你的夜路</p>
          <div><button onClick={() => navigate('/category')}>Enter Blog</button></div>
        </div>
      </div>
      <div className='content'></div>
    </div>
  )
})

export default Home