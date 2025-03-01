import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.tsx'
import FilterComponent from "./components/FilterComponent";

const router = createBrowserRouter( [
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path: '/',
                element: <FilterComponent/>
            }
            ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
