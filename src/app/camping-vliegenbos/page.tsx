'use client'

import NextImage from 'next/image'
import { Card, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import campingVliegenbosPicture from './_assets/camping-vliegenbos-picture.jpg'
import formatPath from '../../utils/formatPath'

const cards = [
  {
    label: 'Over de camping',
    description: 'Algemene informatie',
    href: '/camping-vliegenbos/over-de-camping',
  },
  {
    label: 'Zoek en boek',
    description: 'Bekijk de beschikbaarheid',
    href: '/camping-vliegenbos/zoek-en-boek',
  },
  {
    label: 'Route',
    description: 'Hoe kom je er?',
    href: '/camping-vliegenbos/route',
  },
  {
    label: 'Tenten',
    description: 'Kamperen met je eigen tent',
    href: '/camping-vliegenbos/tenten',
  },
  {
    label: 'Campers en caravans',
    description: 'Kamperen met je camper of caravan',
    href: '/camping-vliegenbos/campers-en-caravans',
  },
  {
    label: 'Trekkershutten',
    description: 'Overnachten in een trekkershut',
    href: '/camping-vliegenbos/trekkershutten',
  },
]

export default function HomePage() {
  return (
    <>
      <NextImage className="ams-mb-xl ams-image ams-aspect-ratio-16-5" alt="" src={campingVliegenbosPicture} />
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
      <Grid paddingBottom="2x-large" gapVertical="large" as="section">
        <Grid.Cell span="all">
          <Heading level={2}>Vind een plek die bij je past</Heading>
        </Grid.Cell>
        {cards.map((card) => (
          <Grid.Cell key={card.href} span={{ narrow: 4, medium: 4, wide: 4 }}>
            <Card>
              <Card.Heading level={3}>
                <Card.Link href={formatPath(card.href)}>{card.label}</Card.Link>
              </Card.Heading>
              <Paragraph>{card.description}</Paragraph>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
    </>
  )
}
