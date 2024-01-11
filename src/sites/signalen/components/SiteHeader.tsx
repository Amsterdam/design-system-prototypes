import { Grid, Header, PageMenu, SkipLink } from '@amsterdam/design-system-react'
import { siteUrl } from '../constants'
import { PageMenuLink } from '../../../shared/components/PageMenuLink'

export const SiteHeader = () => (
  <Grid>
    <Grid.Cell span="all">
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Header
        logoLink={siteUrl}
        logoLinkTitle="Naar de homepage van Signalen Amsterdam"
        links={
          <PageMenu alignEnd>
            <PageMenuLink to={`${siteUrl}beschrijf`}>Doe een melding</PageMenuLink>
            <PageMenu.Link href="#">Meldingenkaart</PageMenu.Link>
            <PageMenu.Link href="#">Mijn meldingen</PageMenu.Link>
          </PageMenu>
        }
      />
    </Grid.Cell>
  </Grid>
)
