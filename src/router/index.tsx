import { RouteObject } from 'react-router-dom'
import { lazy, Suspense, LazyExoticComponent } from 'react'

namespace SyncRoute{
  export type Routes = {
    path: string,
    element: LazyExoticComponent<React.MemoExoticComponent<() => JSX.Element>>,
    children?: Routes[]
  }
}

const routerTable: SyncRoute.Routes[] = [
  {
    path: '/home',
    element: lazy(() => import('@/views/home'))
  },
  {
    path: '/about',
    element: lazy(() => import('@/views/about'))
  },
  {
    path: '/category',
    element: lazy(() => import('@/views/category'))
  },
  {
    path: '*',
    element: lazy(() => import('@/views/Notfund'))
  },
  {
    path: '/',
    element: lazy(() => import('@/views/home'))
  }
]

const syncRouter = (routerTable: SyncRoute.Routes[]): RouteObject[] => {
  return routerTable.map(route => {
    return {
      path: route.path,
      element: (
        <Suspense fallback={<div>加载中。。。</div>}>
          <route.element />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children)
    }
  })
}

export default syncRouter(routerTable)