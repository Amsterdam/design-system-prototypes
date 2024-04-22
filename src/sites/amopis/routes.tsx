import { ErrorPage } from '../../shared/pages/ErrorPage'
import { siteUrl } from './constants.ts'
import { AmopisRootPage } from './pages/AmopisRootPage'
import { EstimatesPage } from './pages/EstimatesPage.tsx'
import { HomePage } from './pages/HomePage.tsx'

export const routes = {
  path: siteUrl,
  element: <AmopisRootPage />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <HomePage />,
      index: true,
    },
    {
      element: <EstimatesPage />,
      path: `${siteUrl}ramingen`,
    },
  ],
}
