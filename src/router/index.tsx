import { Navigate } from 'react-router-dom'
import Home from '../views/home'
import About from '../views/about'
import Category from '../views/category'
import Notfund from '../views/Notfund'
import File from '../views/file'

const syncRouter = [
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/file',
    element: <File/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/category',
    element: <Category/>
  },
  {
    path: '*',
    element: <Notfund/>
  },
  {
    path: '/',
    element: <Navigate to='/file' />
  }
] 

export default syncRouter