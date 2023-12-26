import { baseUrl } from '../../shared/constants'
import { ErrorPage } from '../../shared/pages/ErrorPage'
import { AmsterdamRootPage } from './pages/AmsterdamRootPage'
import { ArtAndCulturePage } from './pages/ArtAndCulturePage'
import { CivilAffairsPage } from './pages/CivilAffairsPage'
import { HomePage } from './pages/HomePage'
import { NewsPage } from './pages/NewsPage'
import { ProjectPage } from './pages/ProjectPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SearchPage } from './pages/SearchPage'

export const routes = {
  path: baseUrl,
  element: <AmsterdamRootPage />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <HomePage />,
      index: true,
    },
    {
      element: <ArtAndCulturePage />,
      path: `${baseUrl}kunst-en-cultuur`,
    },
    {
      element: <CivilAffairsPage />,
      path: `${baseUrl}burgerzaken`,
    },
    {
      element: <NewsPage />,
      path: `${baseUrl}nieuws`,
    },
    {
      element: <ProjectsPage />,
      path: `${baseUrl}projecten`,
    },
    {
      element: <ProjectPage />,
      path: `${baseUrl}project`,
    },
    {
      element: <SearchPage />,
      path: `${baseUrl}zoeken`,
    },
  ],
}
