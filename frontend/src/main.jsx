import React from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import router from './routes/router';
import "../node_modules/flowbite/dist/flowbite.js"
import "../node_modules/preline/dist/preline.js"

const root = document.querySelector("#root");
createRoot(root).render(<RouterProvider router = {router}/>);