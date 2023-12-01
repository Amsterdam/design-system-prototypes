import { Grid, Heading, Logo, Paragraph } from '@amsterdam/design-system-react'

const baseUrl = import.meta.env.BASE_URL

export const SiteHeader = () => (
  <Grid density="high" paddingVertical="small">
    <Grid.Cell span={{ narrow: 1, medium: 2, wide: 2 }}>
      <a href={baseUrl}>
        <Logo />
      </a>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 1, medium: 2, wide: 2 }} style={{ alignSelf: 'center' }}>
      <Heading level={2} title="Amsterdams Opdracht Informatie Systeem">
        Amopis
      </Heading>
    </Grid.Cell>
    <Grid.Cell span={1} start={{ narrow: 4, medium: 8, wide: 12 }} style={{ placeSelf: 'center end' }}>
      <div className="amopis-user-badge">
        <Paragraph inverseColor size="small" title="Goedemorgen Kees Herder">
          KH
        </Paragraph>
      </div>
    </Grid.Cell>
  </Grid>
)
