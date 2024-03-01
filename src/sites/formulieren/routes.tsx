import { ErrorPage } from '../../shared/pages/ErrorPage.tsx'
import { siteUrl } from './constants.ts'
import { Start } from './pages/Start.tsx'
import { FormsRootPage } from './pages/FormsRootPage.tsx'

export const routes = {
  path: siteUrl,
  element: <FormsRootPage />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <Start />,
      path: `${siteUrl}`,
    },
  ],
}
