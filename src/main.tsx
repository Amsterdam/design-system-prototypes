import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Amopis from './routes/amopis/amopis'
import ArtAndCulture from './routes/amsterdam.nl/artAndCulture'
import CivilAffairs from './routes/amsterdam.nl/civilAffairs'
import ConstructionWorkProject from './routes/amsterdam.nl/constructionWorkProject.tsx'
import ConstructionWorkProjects from './routes/amsterdam.nl/constructionWorkProjects.tsx'
import Home from './routes/amsterdam.nl/home'
import News from './routes/amsterdam.nl/news'
import Root from './routes/amsterdam.nl/root'
import Search from './routes/amsterdam.nl/search'
import ErrorPage from './errorPage'

import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import './index.css'

const baseUrl = import.meta.env.BASE_URL

const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `${baseUrl}nieuws`,
        element: <News />,
      },
      {
        path: `${baseUrl}zoeken`,
        element: <Search />,
      },
      {
        path: `${baseUrl}burgerzaken`,
        element: <CivilAffairs />,
      },
      {
        path: `${baseUrl}kunst-en-cultuur`,
        element: <ArtAndCulture />,
      },
      {
        path: `${baseUrl}projecten`,
        element: <ConstructionWorkProjects />,
      },
      {
        path: `${baseUrl}project`,
        element: <ConstructionWorkProject />,
      },
    ],
  },
  {
    path: `${baseUrl}amopis`,
    element: <Amopis />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
