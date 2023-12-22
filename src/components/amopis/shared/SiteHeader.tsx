import { Grid, Header, Paragraph } from '@amsterdam/design-system-react'

const baseUrl = import.meta.env.BASE_URL

export const SiteHeader = () => (
  <Grid compact>
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
        logoLink={baseUrl}
        logoLinkTitle="Naar de homepage van Amopis"
        title="Amopis"
      />
    </Grid.Cell>
  </Grid>
)
