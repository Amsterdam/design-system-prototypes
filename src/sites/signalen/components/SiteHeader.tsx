import { Grid, Header } from '@amsterdam/design-system-react'
import { siteUrl } from '../constants'

export const SiteHeader = () => (
  <Grid>
    <Grid.Cell span="all">
      <Header logoLink={siteUrl} logoLinkTitle="Naar de homepage van Signalen Amsterdam" />
    </Grid.Cell>
  </Grid>
)
