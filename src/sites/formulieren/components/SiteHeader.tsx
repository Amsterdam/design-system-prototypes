import { Grid, Header, PageMenu, SkipLink } from '@amsterdam/design-system-react'
import { siteUrl } from '../constants'

export const SiteHeader = () => (
  <Grid>
    <Grid.Cell span="all">
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Header
        logoLink={`${siteUrl}beschrijf`}
        logoLinkTitle="Naar de homepage van Signalen Amsterdam"
        links={
          <PageMenu alignEnd>
            <PageMenu.Link href="#">Formulier</PageMenu.Link>
          </PageMenu>
        }
      />
    </Grid.Cell>
  </Grid>
)
