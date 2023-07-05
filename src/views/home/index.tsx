import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

const Home = memo(() => {
  // react-router 6 中使用这个hook代替history.push,需要使用replace的话配置{replace:true}
  const navigate = useNavigate()
  const [isAnimation, setIsAnimation] = useState(false)
  const [iconClassName, setIconClassName] = useState('header-icon')
  const [navClassName, setNavClassName] = useState('rNav')

  const handleChangeIcon = () => {
    setIsAnimation(!isAnimation)
    if(iconClassName !== 'header-icon icon-out') {
      setIconClassName('header-icon icon-out')
    }
    if(isAnimation) {
      setNavClassName('rNav')
    } else {
      setNavClassName('rNav showNav')
    }
  }

  const nav = () => {
    return [
      {name: '首页', path: '/'},
      {name: '音乐', path: '/music'},
      {name: '分类', path: '/category'},
      {name: '文件', path: '/file'},
    ]
  }

  return (
    <div>
      <div className={(isAnimation ? 'header-icon1 icon-click' : iconClassName)} onClick={handleChangeIcon}>
        <span></span><span></span><span></span>
      </div>
      <div className={navClassName}>
        <div className='nav'>
          <div className={'w-[140px] h-[500px] absolute top-[170px] right-0'}>
            {
              nav().map(item => {
                return (
                  <div className={'h-[60px] leading-[60px] text-[18px] text-slate-800 cursor-pointer hover:text-blue-400'}
                    onClick={() => navigate(item.path)}>{item.name}</div>
                )
              })
            }
          </div>
        </div>
      </div>
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