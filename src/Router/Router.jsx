import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Portfolio from "../Components/Portfolio/Portfolio";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import ProjectDetails from "../Components/Portfolio/ProjectDetails";
import PhotoDetails from "../Components/Portfolio/PhotoDetails";




const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Portfolio></Portfolio>
            },
           
            {
                path:'/project1/:id',
                element:<ProjectDetails></ProjectDetails>,
                loader:()=>fetch('project1.json')
            },
            {
                path:'/project2/:id',
                element:<PhotoDetails></PhotoDetails>,
                loader:()=>fetch('project2.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])

export default Router;