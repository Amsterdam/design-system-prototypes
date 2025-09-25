'use client'

import {
  Breadcrumb,
  Card,
  Checkbox,
  Column,
  FieldSet,
  Grid,
  Heading,
  Paragraph,
  TextInput,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'

const filterPanel = [
  {
    title: 'Contenttype',
    filters: [
      { hits: 10, label: 'Nieuws' },
      { hits: 10, label: 'Regeling' },
      { hits: 5, label: 'Werkzaamheden' },
    ],
  },
  {
    title: 'Groep',
    filters: [
      { hits: 10, label: 'Bewoners' },
      { hits: 10, label: 'Bedrijven' },
      { hits: 5, label: 'Bezoekers' },
    ],
  },
  {
    title: 'Soort afval',
    filters: [
      { hits: 6, label: 'Grofvuil' },
      { hits: 4, label: 'Tuinafval' },
      { hits: 3, label: 'Groente-, fruit-, etensresten en tuinafval (gfe/t)' },
      { hits: 3, label: 'Textiel' },
      { hits: 2, label: 'Huisvuil' },
      { hits: 2, label: 'Papier en karton' },
      { hits: 2, label: 'Glas' },
      { hits: 1, label: 'Brood' },
      { hits: 1, label: 'Asbest' },
      { hits: 1, label: 'KCA (klein chemisch afval)' },
    ],
  },
]

function Zoeken() {
  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 2, wide: 3 }}>
        <Column>
          {filterPanel.map(({ title, filters }) => (
            <FieldSet key={title} legend={title}>
              {filters.map(({ hits, label }) => (
                <Checkbox key={label}>
                  {label} ({hits})
                </Checkbox>
              ))}
            </FieldSet>
          ))}
        </Column>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} start={{ narrow: 1, medium: 4, wide: 5 }}>
        <Breadcrumb>
          <NextLink href="/amsterdam" legacyBehavior passHref>
            <Breadcrumb.Link>Home</Breadcrumb.Link>
          </NextLink>
          <Breadcrumb.Link href="#">Zoekresultaten</Breadcrumb.Link>
        </Breadcrumb>
        <Column className="ams-mb-xl">
          <Heading level={1}>Zoeken</Heading>
          <TextInput defaultValue="afval" />
          <Paragraph>25 resultaten</Paragraph>
        </Column>
        <Column gap="x-large">
          <Card>
            <Card.HeadingGroup tagline="Nieuws">
              <Card.Heading level={2} size="level-3">
                <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
              </Card.Heading>
            </Card.HeadingGroup>
            <Paragraph>
              Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te
              halen in het centrum.
            </Paragraph>
            <Paragraph size="small">Gepubliceerd: 1 juli 2023</Paragraph>
          </Card>
          <Card>
            <Card.HeadingGroup tagline="Nieuws">
              <Card.Heading level={2} size="level-3">
                <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
              </Card.Heading>
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
}

export default Zoeken
