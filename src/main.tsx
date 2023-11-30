import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/amsterdam.nl/root'
import Home from './routes/amsterdam.nl/home'
import Search from './routes/amsterdam.nl/search'
import News from './routes/amsterdam.nl/news'
import CivilAffairs from './routes/amsterdam.nl/civilAffairs'
import ArtAndCulture from './routes/amsterdam.nl/artAndCulture'
import Amopis from './routes/amopis/amopis'
import ErrorPage from './errorPage'

import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'nieuws',
        element: <News />,
      },
      {
        path: 'zoek',
        element: <Search />,
      },
      {
        path: 'burgerzaken',
        element: <CivilAffairs />,
      },
      {
        path: 'kunst-en-cultuur',
        element: <ArtAndCulture />,
      },
    ],
  },
  {
    path: '/amopis',
    element: <Amopis />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
