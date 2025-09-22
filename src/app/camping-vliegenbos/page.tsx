'use client'

import { Card, Grid, Heading, Paragraph, Row } from '@amsterdam/design-system-react'

const cards = [
  {
    label: 'Over de camping',
    href: 'camping-vliegenbos/over-de-camping',
  },
  {
    label: 'Zoek en boek',
    href: 'camping-vliegenbos/zoek-en-boek',
  },
  {
    label: 'Route',
    href: 'camping-vliegenbos/route',
  },
  {
    label: 'Tenten',
    href: 'camping-vliegenbos/tenten',
  },
  {
    label: 'Campers en caravans',
    href: 'camping-vliegenbos/campers-en-caravans',
  },
  {
    label: 'Trekkershutten',
    href: 'camping-vliegenbos/trekkershutten',
  },
]

export default function HomePage() {
  return (
    <>
      <Grid paddingBottom="large" as="section">
        <Grid.Cell span="all">
          <Heading level={1}>Welkom op camping Vliegenbos</Heading>
          <Paragraph>
            Camping Vliegenbos is in Amsterdam Noord, vlakbij de gratis veerboot naar het centrum van Amsterdam.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="x-large">
        {cards.slice(0, 3).map((card, idx) => (
          <Grid.Cell span={3} key={`${idx}-card`}>
            <Card>
              <Card.Heading level={2}>
                <Card.Link href={card.href}>{card.label}</Card.Link>
              </Card.Heading>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
      <Grid paddingBottom="x-large">
        {cards.slice(3, 6).map((card, idx) => (
          <Grid.Cell span={3} key={`${idx}-card`}>
            <Card>
              <Card.Heading level={2}>
                <Card.Link href={card.href}>{card.label}</Card.Link>
              </Card.Heading>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
    </>
  )
}
