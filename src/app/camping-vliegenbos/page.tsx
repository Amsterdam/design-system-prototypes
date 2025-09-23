'use client'

import { Card, Grid, Heading, Image, Paragraph } from '@amsterdam/design-system-react'
import pictureCampingImage from './_assets/picture-camping.jpg'
import formatPath from '../../utils/formatPath'

const cards = [
  {
    label: 'Over de camping',
    href: '/camping-vliegenbos/over-de-camping',
  },
  {
    label: 'Zoek en boek',
    href: '/camping-vliegenbos/zoek-en-boek',
  },
  {
    label: 'Route',
    href: '/camping-vliegenbos/route',
  },
  {
    label: 'Tenten',
    href: '/camping-vliegenbos/tenten',
  },
  {
    label: 'Campers en caravans',
    href: '/camping-vliegenbos/campers-en-caravans',
  },
  {
    label: 'Trekkershutten',
    href: '/camping-vliegenbos/trekkershutten',
  },
]

export default function HomePage() {
  return (
    <>
      <Image className="ams-mb-l" alt="" src={pictureCampingImage.src} aspectRatio="16:5" />
      <Grid paddingBottom="large" as="section">
        <Grid.Cell span="all">
          <Heading level={1} className="ams-mb-s">
            Welkom op camping Vliegenbos
          </Heading>
          <Paragraph>
            Camping Vliegenbos is in Amsterdam Noord, vlakbij de gratis veerboot naar het centrum van Amsterdam.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="x-large" gapVertical="large" as="section">
        <Grid.Cell span="all">
          <Heading level={2}>Vind een plek die bij je past</Heading>
        </Grid.Cell>
        {cards.slice(0, 3).map((card, idx) => (
          <Grid.Cell span={3} key={`${idx}-home-first-row-card`}>
            <Card>
              <Card.Heading level={2}>
                <Card.Link href={formatPath(card.href)}>{card.label}</Card.Link>
              </Card.Heading>
            </Card>
          </Grid.Cell>
        ))}
        <br />
        {cards.slice(3, 6).map((card, idx) => (
          <Grid.Cell span={3} key={`${idx}-home-second-row-card`}>
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
