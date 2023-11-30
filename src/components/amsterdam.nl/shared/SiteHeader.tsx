import { Grid, Logo, PageMenu } from '@amsterdam/design-system-react'
import { LoginIcon, MenuIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import PageMenuLink from '../../links/PageMenuLink.tsx'

export const SiteHeader = () => (
  <Grid paddingVertical="small">
    <Grid.Cell fullWidth>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'calc(var(--amsterdam-grid-gap ) * 4)' }}>
        <a href="/">
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
          <PageMenuLink to="/zoeken" className="amsterdam-show-from-wide" icon={SearchIcon}>
            Zoeken
          </PageMenuLink>
          <PageMenu.Button icon={MenuIcon}>Menu</PageMenu.Button>
        </PageMenu>
      </div>
    </Grid.Cell>
  </Grid>
)
