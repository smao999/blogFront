import {FunctionComponent} from 'react'
import {useNavigate} from 'react-router-dom'

import store from "@/store";

import UnfoldIcon from './component/UnfoldIcon'
import './index.scss'
import {Button} from "antd";

interface IHomeProps {}

const Home: FunctionComponent<IHomeProps> = () => {
  const navigate = useNavigate();
  const setThemeType = store(store => store.setThemeType);

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
        <div className='content'>
            <div className={'flex'}>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
                <div className={'w-[140px] h-[140px] bg-[var(--bg-color)] text-[var(--text-color)]'}>
                    123
                </div>
            </div>
            <Button onClick={() => setThemeType('LightTheme')}>白色</Button>
            <Button onClick={() => setThemeType('BlueTheme')}>蓝色</Button>
        </div>
      </div>
  )
}

export default Home