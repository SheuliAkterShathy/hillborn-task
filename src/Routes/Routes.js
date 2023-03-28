import AllPrograms from "../Pages/AllPrograms";
import AllWorks from "../Pages/AllWorks";
import Contact from "../Pages/Contact";
import Teams from "../Pages/Teams";
import Touch from "../Pages/Touch";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/allPrograms',
                element: <AllPrograms/>
            },
            {
                path: '/work',
                element: <AllWorks/>
            },
            {
                path: '/teams',
                element: <Teams/>
            },
            {
                path: '/touch',
                element: <Touch/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // },
           
            
        ]
    },  
 ]

)
export default router