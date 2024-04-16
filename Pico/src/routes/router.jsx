import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Layout from '../pages/Layout'
import NavigationLayout from '../pages/NavigationLayout'
import ErrorPage from '../pages/ErrorPage'

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
        }
    ]
    }
]
   
)


export default router