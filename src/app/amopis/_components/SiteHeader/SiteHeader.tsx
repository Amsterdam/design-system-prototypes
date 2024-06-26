import { Grid, Header, Paragraph } from '@amsterdam/design-system-react'

export function SiteHeader() {
  return (
    <Grid>
      <Grid.Cell span="all">
        <Header
          links={
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <div className="amopis-user-badge">
                <Paragraph inverseColor size="small" title="Goedemorgen Kees Herder">
                  KH
                </Paragraph>
              </div>
            </div>
          }
          logoLink={`${process.env.basePath}amopis`}
          logoLinkTitle="Naar de homepage van Amopis"
          title="Amopis"
        />
      </Grid.Cell>
    </Grid>
  )
}
