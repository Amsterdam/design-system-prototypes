import { Grid, Header, PageMenu, SkipLink } from '@amsterdam/design-system-react'
import { siteUrl } from '../constants'

export const SiteHeader = () => (
  <Grid>
    <Grid.Cell span="all">
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Header
        logoLink={siteUrl}
        logoLinkTitle="Naar de homepage van Signalen Amsterdam"
        links={
          <PageMenu alignEnd>
            {/* TODO: hier react router link voor gebruiken */}
            <PageMenu.Link href="/design-system-prototypes/signalen/beschrijf">Doe een melding</PageMenu.Link>
            <PageMenu.Link href="#">Meldingenkaart</PageMenu.Link>
            <PageMenu.Link href="#">Mijn meldingen</PageMenu.Link>
          </PageMenu>
        }
      />
    </Grid.Cell>
  </Grid>
)
