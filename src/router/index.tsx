import {lazy} from "react";
import {Navigate, RouteObject} from "react-router-dom";

const Home = lazy(() => import('@/views/home'));
const Category = lazy(() => import('@/views/category'));

const routes:Array<RouteObject> = [
    {
        path:'/',
        element: <Navigate to={'home'} replace />
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/category',
        element: <Category/>
    },
    {
        path: '*',
        element: <div>没有找到...</div>
    }
]

export default routes;
