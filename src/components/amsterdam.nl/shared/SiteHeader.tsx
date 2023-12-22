import { Grid, Header, PageMenu } from '@amsterdam/design-system-react'
import { LoginIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import PageMenuLink from '../../links/PageMenuLink.tsx'

const baseUrl = import.meta.env.BASE_URL

export const SiteHeader = () => (
  <Grid className="amsterdam-header__grid">
    <Grid.Cell span="all">
      <Header
        links={
          <PageMenu alignEnd>
            <PageMenu.Link href="#" lang="en">
              English
            </PageMenu.Link>
            <PageMenu.Link href="#">Contact</PageMenu.Link>
            <PageMenu.Link href="https://mijn.amsterdam.nl/" icon={LoginIcon} rel="external">
              Mijn Amsterdam
            </PageMenu.Link>
            <PageMenuLink to={`${baseUrl}zoeken`} icon={SearchIcon}>
              Zoeken
            </PageMenuLink>
          </PageMenu>
        }
        menu={<button className="amsterdam-header__menu-button">Menu</button>}
      />
    </Grid.Cell>
  </Grid>
)
