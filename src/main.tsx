import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { rootUrl } from './shared/constants'
import { ErrorPage } from './shared/pages/ErrorPage'
import { RootPage } from './shared/pages/RootPage'

import { routes as amopisRoutes } from './sites/amopis/routes'
import { routes as amsterdamRoutes } from './sites/amsterdam/routes'
import { routes as signalenRoutes } from './sites/signalen/routes'

import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import './index.css'

const router = createBrowserRouter([
  {
    path: `${rootUrl}`,
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  amopisRoutes,
  amsterdamRoutes,
  signalenRoutes,
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
