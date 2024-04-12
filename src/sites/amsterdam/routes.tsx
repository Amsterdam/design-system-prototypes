import { ErrorPage } from '../../shared/pages/ErrorPage'
import { siteUrl } from './constants'
import { AmsterdamRootPage } from './pages/AmsterdamRootPage'
import { ArtAndCulturePage } from './pages/ArtAndCulturePage'
import { CivilAffairsPage } from './pages/CivilAffairsPage'
import { HomePage } from './pages/HomePage'
import { NewsPage } from './pages/NewsPage'
import { ParkeervergunningVoorSportverenigingenPage } from './pages/ParkeervergunningVoorSportverenigingenPage'
import { ProjectPage } from './pages/ProjectPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SearchPage } from './pages/SearchPage'
import { ContactPage } from './pages/ContactPage'
import { VraagPage } from './pages/VraagPage'
import { ContactgegevensPage } from './pages/ContactgegevensPage'
import { BedanktPage } from './pages/BedanktPage'

export const routes = {
  path: siteUrl,
  element: <AmsterdamRootPage />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <HomePage />,
      index: true,
    },
    {
      element: <ArtAndCulturePage />,
      path: `${siteUrl}kunst-en-cultuur`,
    },
    {
      element: <CivilAffairsPage />,
      path: `${siteUrl}burgerzaken`,
    },
    {
      element: <NewsPage />,
      path: `${siteUrl}nieuws`,
    },
    {
      element: <ParkeervergunningVoorSportverenigingenPage />,
      path: `${siteUrl}parkeervergunning-voor-sportverenigingen`,
    },
    {
      element: <ProjectsPage />,
      path: `${siteUrl}projecten`,
    },
    {
      element: <ProjectPage />,
      path: `${siteUrl}project`,
    },
    {
      element: <SearchPage />,
      path: `${siteUrl}zoeken`,
    },
    {
      element: <ContactPage />,
      path: `${siteUrl}contact`,
    },
    {
      element: <VraagPage />,
      path: `${siteUrl}contact/vraag`,
    },
    {
      element: <ContactgegevensPage />,
      path: `${siteUrl}contact/contactgegevens`,
    },
    {
      element: <BedanktPage />,
      path: `${siteUrl}contact/bedankt`,
    },
  ],
}
