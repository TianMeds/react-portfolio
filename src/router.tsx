import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import About from "./pages/About";
import Award from "./pages/Award";
import NotFound from "./pages/NotFound";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import Project7 from "./pages/Project7";
import Project8 from "./pages/Project8";
import Project9 from "./pages/Project9";
import Project10 from "./pages/Project10";
import Project11 from "./pages/Project11";
import Project12 from "./pages/Project12";
import Project13 from "./pages/Project13";


const router = createBrowserRouter([
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/work',
        element: <Work/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/award',
        element: <Award/>
    },
    {
        path: '/project1',
        element: <Project1/>
    },
    {
        path: '/project2',
        element: <Project2/>
    },
    {
        path: '/project3',
        element: <Project3/>
    },
    {
        path: '/project4',
        element: <Project4/>
    },
    {
        path: '/project5',
        element: <Project5/>
    },
    {
        path: '/project6',
        element: <Project6/>
    },
    {
        path: '/project7',
        element: <Project7/>
    },
    {
        path: '/project8',
        element: <Project8/>
    },
    {
        path: '/project9',
        element: <Project9/>
    },
    {
        path: '/project10',
        element: <Project10/>
    },
    {
        path: '/project11',
        element: <Project11/>
    },
    {
        path: '/project1',
        element: <Project1/>
    },
    {
        path: '/project12',
        element: <Project12/>
    },
    {
        path: '/project13',
        element: <Project13/>
    },
    {
        path: '*',
        element: <NotFound/>
    }   
])

export default router;