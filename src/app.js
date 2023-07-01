import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/Layout";
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import { Body } from "./components/Body";
import RestaurantDetails from "./components/ReataurantDetails";

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/',
                element:<Body key={"Body"}/>,
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantDetails/>,
            }
        ]
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));


//! root.render(<Layout/>);  
//Now we will not render the element or component, instead we will render the routerProvider Component.
root.render(<RouterProvider router={appRouter}/>);