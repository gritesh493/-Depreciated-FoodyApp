import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./components/Layout";
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./components/About";
import { Body } from "./components/Body";

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/',
                element:<Body key={"Body"}/>,
            }
        ]
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Layout/>);  //Now we will not render the element or component, instead we will render the routerProvider Component.
root.render(<RouterProvider router={appRouter}/>);