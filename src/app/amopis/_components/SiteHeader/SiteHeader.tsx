import { Avatar, Grid, Header } from '@amsterdam/design-system-react'

export function SiteHeader() {
  return (
    <Grid>
      <Grid.Cell span="all">
        <Header
          brandName="Amopis"
          logoLink={`${process.env.basePath}amopis`}
          logoLinkTitle="Naar de homepage van Amopis"
          menuItems={<Avatar label="KH" title="Goedemorgen Kees Herder" />}
        />
      </Grid.Cell>
    </Grid>
  )
}
