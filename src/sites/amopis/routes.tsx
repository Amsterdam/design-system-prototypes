import { ErrorPage } from '../../shared/pages/ErrorPage'
import { siteUrl } from './constants.ts'
import { AmopisRootPage } from './pages/AmopisRootPage'

export const routes = {
  path: siteUrl,
  element: <AmopisRootPage />,
  errorElement: <ErrorPage />,
}
