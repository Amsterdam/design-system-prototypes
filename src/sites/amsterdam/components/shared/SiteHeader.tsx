import { Grid, Header, PageMenu } from '@amsterdam/design-system-react'
import { LoginIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { PageMenuLink } from '../../../../shared/components/PageMenuLink'
import { rootUrl } from '../../../../shared/constants'
import { siteUrl } from '../../constants'

export const SiteHeader = () => (
  <Grid>
    <Grid.Cell span="all">
      <Header
        links={
          <PageMenu alignEnd>
            <PageMenu.Link href="#" lang="en">
              English
            </PageMenu.Link>
            <PageMenuLink to={`${siteUrl}contact`}>Contact</PageMenuLink>
            <PageMenu.Link href="https://mijn.amsterdam.nl/" icon={LoginIcon} rel="external">
              Mijn Amsterdam
            </PageMenu.Link>
            <PageMenuLink to={`${siteUrl}zoeken`} icon={SearchIcon}>
              Zoeken
            </PageMenuLink>
            <PageMenuLink to={rootUrl}>Prototypes</PageMenuLink>
          </PageMenu>
        }
        logoLink={siteUrl}
        logoLinkTitle="Naar de homepage van gemeente Amsterdam"
        menu={<button className="ams-header__menu-button">Menu</button>}
      />
    </Grid.Cell>
  </Grid>
)
