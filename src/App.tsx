import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import { JSX, useState } from 'react'
import { Grid, PageMenu, Screen } from '@amsterdam/design-system-react'
import { Project } from './components/amopis/project/Project'
import { Sidebar } from './components/amopis/shared/Sidebar'
import { SiteHeader as AmopisSiteHeader } from './components/amopis/shared/SiteHeader'
import { CivilAffairs } from './components/amsterdam.nl/civil-affairs/CivilAffairs'
import { Home } from './components/amsterdam.nl/home/Home'
import { News } from './components/amsterdam.nl/news/News'
import { Search } from './components/amsterdam.nl/search/Search'
import { SiteHeader } from './components/amsterdam.nl/shared/SiteHeader'
import { SiteFooter } from './components/amsterdam.nl/shared/SiteFooter'

const pages: Record<string, () => JSX.Element> = {
  civilAffairs: CivilAffairs,
  home: Home,
  news: News,
  project: Project,
  search: Search,
}

type Page = keyof typeof pages

export const App = () => {
  const [page, setPage] = useState<Page>('home')
  const PageComponent = pages[page]

  if (page === 'project') {
    return (
      <Screen className="amsterdam-screen--amopis amsterdam-theme--compact">
        <div className="amopis-app-grid">
          <Sidebar />
          <div>
            <AmopisSiteHeader />
            <div className="amopis-main-background">
              <Project />
            </div>
            <Grid compact paddingVertical="small">
              <Grid.Cell fullWidth>
                <PageMenu>
                  <PageMenu.Link href="#" onClick={() => setPage('home')}>
                    Home
                  </PageMenu.Link>
                  <PageMenu.Link href="#">E-mail je vraag of feedback</PageMenu.Link>
                  <PageMenu.Link href="#">Bekijk veelgestelde vragen</PageMenu.Link>
                  <PageMenu.Link href="#">Bekijk releasebeschrijving</PageMenu.Link>
                </PageMenu>
              </Grid.Cell>
            </Grid>
          </div>
        </div>
      </Screen>
    )
  }

  return (
    <Screen maxWidth="wide">
      <SiteHeader />
      {PageComponent()}
      <SiteFooter />
      <Grid paddingVertical="small">
        <Grid.Cell fullWidth>
          <PageMenu>
            <PageMenu.Link href="#" onClick={() => setPage('home')}>
              Home
            </PageMenu.Link>
            <PageMenu.Link href="#" onClick={() => setPage('search')}>
              Zoeken
            </PageMenu.Link>
            <PageMenu.Link href="#" onClick={() => setPage('news')}>
              Nieuws
            </PageMenu.Link>
            <PageMenu.Link href="#" onClick={() => setPage('civilAffairs')}>
              Burgerzaken
            </PageMenu.Link>
            <PageMenu.Link href="#" onClick={() => setPage('project')}>
              Amopis
            </PageMenu.Link>
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </Screen>
  )
}
