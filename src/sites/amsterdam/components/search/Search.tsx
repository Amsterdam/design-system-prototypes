import { Breadcrumb, Card, Column, Grid, Heading, Paragraph, TextInput } from '@amsterdam/design-system-react'
import { siteUrl } from '../../constants'
import { Filters } from './Filters.tsx'

export const Search = () => (
  <Grid paddingBottom="medium">
    <Grid.Cell span={{ narrow: 4, medium: 2, wide: 3 }}>
      <Filters />
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} start={{ narrow: 1, medium: 4, wide: 5 }}>
      <Breadcrumb>
        <Breadcrumb.Item href={siteUrl}>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Zoekresultaten</Breadcrumb.Item>
      </Breadcrumb>
      <Column className="amsterdam-mb--md" gap="small">
        <Heading>Zoeken</Heading>
        <TextInput value="afval" />
        <Paragraph size="small">25 resultaten</Paragraph>
      </Column>
      <Column>
        <Card>
          <Card.HeadingGroup tagline="Nieuws">
            <Heading level={2} size="level-3">
              <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph>
            Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te
            halen in het centrum.
          </Paragraph>
          <Paragraph size="small">Gepubliceerd: 1 juli 2023</Paragraph>
        </Card>
        <Card>
          <Card.HeadingGroup tagline="Nieuws">
            <Heading level={2} size="level-3">
              <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph>
            Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine
            vuilniswagens en een afvalboot.
          </Paragraph>
          <Paragraph size="small">Gepubliceerd: 15 juni 2023</Paragraph>
        </Card>
      </Column>
    </Grid.Cell>
  </Grid>
)
