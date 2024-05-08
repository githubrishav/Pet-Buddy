import React from 'react'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

const App = () => {

        const router = createBrowserRouter([
                {
                        path: "/",
                        element: <> <Navbar /> <Home /></>
                },

                {
                        path: "/about",
                        element: <> <Navbar /> <About /> </>
                },

                {
                        path: "/contact",
                        element: <> <Navbar /> <Contact />  </>
                },



        ])
        return (
                <div>

                        <RouterProvider router={router} />
                </div>
        )
}

export default App;
