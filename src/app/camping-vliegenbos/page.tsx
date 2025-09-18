'use client'

import NextImage from 'next/image'
import { Card, Grid, Heading, Overlap, Paragraph } from '@amsterdam/design-system-react'

import pictureCampingImage from './_assets/picture-camping.jpg'
import aboutCampingImage from './_assets/about-the-camping.jpg'
import searchAndBookImage from './_assets/search-and-book.jpg'
import routeImage from './_assets/route.jpeg'
import marqueeImage from './_assets/marquee.jpg'
import campersAndCaravansImage from './_assets/campers-and-caravans.jpg'
import trekkersHuttenimage from './_assets/trekkershutten.jpg'

const cards = [
  {
    label: 'Over de camping',
    href: 'camping-vliegenbos/over-de-camping',
    img: aboutCampingImage,
  },
  {
    label: 'Zoek en boek',
    href: 'camping-vliegenbos/zoek-en-boek',
    img: searchAndBookImage,
  },
  {
    label: 'Route',
    href: 'camping-vliegenbos/route',
    img: routeImage,
  },
  {
    label: 'Tenten',
    href: 'camping-vliegenbos/tenten',
    img: marqueeImage,
  },
  {
    label: 'Campers en caravans',
    href: 'camping-vliegenbos/campers-en-caravans',
    img: campersAndCaravansImage,
  },
  {
    label: 'Trekkershutten',
    href: 'camping-vliegenbos/trekkershutten',
    img: trekkersHuttenimage,
  },
]

export default function HomePage() {
  return (
    <>
      <Grid paddingBottom="x-large" as="section">
        <Grid.Cell span="all">
          <Overlap>
            <NextImage
              src={pictureCampingImage}
              className="ams-image ams-aspect-ratio-16-5 vliegenbos-home-image"
              alt=""
            />
            <Grid style={{ alignSelf: 'flex-end' }} paddingBottom="large">
              <Grid.Cell span={8}>
                <div className="vliegenbos-notice">
                  <Heading level={1} size="level-3">
                    Welkom op camping Vliegenbos
                  </Heading>
                  <Paragraph>
                    Camping Vliegenbos is in Amsterdam Noord, vlakbij de gratis veerboot naar het centrum van Amsterdam.
                  </Paragraph>
                </div>
              </Grid.Cell>
            </Grid>
          </Overlap>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 10 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
          <Grid>
            {cards.map((card, idx) => (
              <Grid.Cell span={4} key={`${idx}-card`}>
                <Card>
                  <Card.Image alt="" src={card.img.src} />
                  <Card.Heading level={4}>
                    <Card.Link href={card.href}>{card.label}</Card.Link>
                  </Card.Heading>
                </Card>
              </Grid.Cell>
            ))}
          </Grid>
        </Grid.Cell>
      </Grid>
    </>
  )
}
