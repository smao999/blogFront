import { Routes, Route, Link } from 'react-router-dom'
import Home from './views/home'
import Category from './views/category'
import About from './views/about'
import Notfund from './views/Notfund'

function App() {

  return (
    <div className="App">
      <div>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        <Link to='/category'>分类</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </div>
  )
}

export default App
