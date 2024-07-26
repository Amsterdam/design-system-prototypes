import { Avatar, Grid, Header, Row } from '@amsterdam/design-system-react'

export function SiteHeader() {
  return (
    <Grid>
      <Grid.Cell span="all">
        <Header
          appName="Amopis"
          links={
            <Row align="end">
              <Avatar label="KH" title="Goedemorgen Kees Herder" />
            </Row>
          }
          logoLink={`${process.env.basePath}amopis`}
          logoLinkTitle="Naar de homepage van Amopis"
        />
      </Grid.Cell>
    </Grid>
  )
}
