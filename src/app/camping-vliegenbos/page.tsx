'use client'

import { Card, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import NextImage from 'next/image'

import formatPath from '../../utils/formatPath'
import campingVliegenbosPicture from './_assets/camping-vliegenbos-picture.jpg'

const cards = [
  {
    description: 'Algemene informatie',
    href: '/camping-vliegenbos/over-de-camping',
    label: 'Over de camping',
  },
  {
    description: 'Bekijk de beschikbaarheid',
    href: '#',
    label: 'Zoek en boek',
  },
  {
    description: 'Hoe kom je er?',
    href: '#',
    label: 'Route',
  },
  {
    description: 'Kamperen met je eigen tent',
    href: '#',
    label: 'Tenten',
  },
  {
    description: 'Kamperen met je camper of caravan',
    href: '#',
    label: 'Campers en caravans',
  },
  {
    description: 'Overnachten in een trekkershut',
    href: '#',
    label: 'Trekkershutten',
  },
]

export default function HomePage() {
  return (
    <>
      <NextImage alt="" className="ams-mb-xl ams-image ams-aspect-ratio-16-5" src={campingVliegenbosPicture} />
      <Grid as="section" paddingBottom="large">
        <Grid.Cell span="all">
          <Heading className="ams-mb-s" level={1}>
            Welkom op camping Vliegenbos
          </Heading>
          <Paragraph>
            Camping Vliegenbos is in Amsterdam Noord, vlakbij de gratis veerboot naar het centrum van Amsterdam.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid as="section" gapVertical="large" paddingBottom="2x-large">
        <Grid.Cell span="all">
          <Heading level={2}>Vind een plek die bij je past</Heading>
        </Grid.Cell>
        {cards.map((card) => (
          <Grid.Cell key={card.href} span={4}>
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
