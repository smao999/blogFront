import {FunctionComponent, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import UnfoldIcon from './component/UnfoldIcon'
import './index.scss'

interface IHomeProps {}

const Home: FunctionComponent<IHomeProps> = props => {
  const navigate = useNavigate();

  return (
      <div>
        <UnfoldIcon />
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
}

export default Home