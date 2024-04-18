import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Layout from '../pages/Layout'
import NavigationLayout from '../pages/NavigationLayout'
import ErrorPage from '../pages/ErrorPage'
import PostPage from '@/pages/PostPage'

const router = createBrowserRouter([

     {
    path:'/',
    element:<Layout/>,
    errorElement: <ErrorPage/>,
    children:[
        {
            path:'/',
            element:<NavigationLayout/>,
            children:[
                {
                    index:true,
                    element:<HomePage/>
                }
            ]
        },{
            path:'/post/:postId',
            element:<PostPage/>
        }
    ]
    }
]
   
)


export default router