import '@amsterdam/design-system-tokens/dist/root.css'
import '@amsterdam/design-system-assets/font/index.css'
import '@amsterdam/design-system-css/dist/index.css'
import { JSX, useState } from 'react'
import { Grid, PageMenu, Screen } from '@amsterdam/design-system-react'
import { Home } from './components/amsterdam.nl/home/Home'
import { News } from './components/amsterdam.nl/news/News'
import { Search } from './components/amsterdam.nl/search/Search'
import { SiteHeader } from './components/amsterdam.nl/shared/SiteHeader'
import { SiteFooter } from './components/amsterdam.nl/shared/SiteFooter'

type Page = 'home' | 'search' | 'news'

const pages: Record<Page, () => JSX.Element> = {
  home: Home,
  news: News,
  search: Search,
}

export const App = () => {
  const [page, setPage] = useState<Page>('home')
  const PageComponent = pages[page]

  return (
    <Screen>
      <SiteHeader />
      {PageComponent()}
      <SiteFooter />
      <Grid spaceVertical="small">
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
          </PageMenu>
        </Grid.Cell>
      </Grid>
    </Screen>
  )
}
