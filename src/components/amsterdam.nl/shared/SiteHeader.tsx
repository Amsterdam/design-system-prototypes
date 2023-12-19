import { Grid, Logo, PageMenu } from '@amsterdam/design-system-react'
import { LoginIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import PageMenuLink from '../../links/PageMenuLink.tsx'

const baseUrl = import.meta.env.BASE_URL

export const SiteHeader = () => (
  <Grid className="amsterdam-header__grid">
    <Grid.Cell span="all">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'calc(var(--amsterdam-grid-gap ) * 4)' }}>
        <a href={baseUrl}>
          <Logo />
        </a>
        <PageMenu className="amsterdam-header__page-menu">
          <PageMenu.Link className="amsterdam-show-from-wide" href="#" lang="en">
            English
          </PageMenu.Link>
          <PageMenu.Link className="amsterdam-show-from-wide" href="#">
            Contact
          </PageMenu.Link>
          <PageMenu.Link
            className="amsterdam-show-from-wide"
            href="https://mijn.amsterdam.nl/"
            icon={LoginIcon}
            rel="external"
          >
            Mijn Amsterdam
          </PageMenu.Link>
          <PageMenuLink to={`${baseUrl}zoeken`} className="amsterdam-show-from-wide" icon={SearchIcon}>
            Zoeken
          </PageMenuLink>
        </PageMenu>
      </div>
    </Grid.Cell>
  </Grid>
)
