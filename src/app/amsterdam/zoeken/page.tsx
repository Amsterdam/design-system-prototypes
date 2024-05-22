'use client'

import { Grid, Breadcrumb, Column, Heading, TextInput, Paragraph, Card, Checkbox } from '@amsterdam/design-system-react'
import NextLink from 'next/link'

export const filters = [
  {
    title: 'Contenttype',
    filters: [
      { label: 'Nieuws', hits: 10 },
      { label: 'Regeling', hits: 10 },
      { label: 'Werkzaamheden', hits: 5 },
    ],
  },
  {
    title: 'Groep',
    filters: [
      { label: 'Bewoners', hits: 10 },
      { label: 'Bedrijven', hits: 10 },
      { label: 'Bezoekers', hits: 5 },
    ],
  },
  {
    title: 'Soort afval',
    filters: [
      { label: 'Grofvuil', hits: 6 },
      { label: 'Tuinafval', hits: 4 },
      { label: 'Groente-, fruit-, etensresten en tuinafval (gfe/t)', hits: 3 },
      { label: 'Textiel', hits: 3 },
      { label: 'Huisvuil', hits: 2 },
      { label: 'Papier en karton', hits: 2 },
      { label: 'Glas', hits: 2 },
      { label: 'Brood', hits: 1 },
      { label: 'Asbest', hits: 1 },
      { label: 'KCA (klein chemisch afval)', hits: 1 },
    ],
  },
]

function Zoeken() {
  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 2, wide: 3 }}>
        <Column gap="medium">
          {filters.map((section) => (
            <Column as="section" key={section.title} gap="extra-small">
              <Heading level={2} size="level-4">
                {section.title}
              </Heading>
              {section.filters.map((filter) => (
                <Checkbox key={filter.label}>
                  {filter.label} ({filter.hits})
                </Checkbox>
              ))}
            </Column>
          ))}
        </Column>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} start={{ narrow: 1, medium: 4, wide: 5 }}>
        <Breadcrumb>
          <NextLink legacyBehavior passHref href="/amsterdam">
            <Breadcrumb.Item href="/amsterdam">Home</Breadcrumb.Item>
          </NextLink>
          <Breadcrumb.Item href="#">Zoekresultaten</Breadcrumb.Item>
        </Breadcrumb>
        <Column className="ams-mb--md" gap="small">
          <Heading>Zoeken</Heading>
          <TextInput defaultValue="afval" />
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
}

export default Zoeken
