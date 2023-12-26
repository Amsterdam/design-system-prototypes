import { baseUrl } from '../../shared/constants'
import { ErrorPage } from '../../shared/pages/ErrorPage'
import { AmopisRootPage } from './pages/AmopisRootPage'

export const routes = {
  path: `${baseUrl}amopis`,
  element: <AmopisRootPage />,
  errorElement: <ErrorPage />,
}
