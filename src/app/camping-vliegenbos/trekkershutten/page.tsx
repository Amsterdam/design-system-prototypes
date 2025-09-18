'use client'

import { Breadcrumb, Card, Grid, Heading, Image, Link, Paragraph } from '@amsterdam/design-system-react'
import trekkershuttenImage from '../_assets/trekkershutten-head.jpg'
import card1 from '../_assets/city-camper-amsterdam.jpg'
import card2 from '../_assets/city-cabin-noord.jpeg'
import card3 from '../_assets/city-cabin-vliegenbos.jpg'
import card4 from '../_assets/city-cabin-mokum.jpeg'

const cards = [
  {
    label: "City Cabin 'Amsterdam'",
    href: 'trekkershutten/city-cabin-amsterdam',
    shortDescription: 'De trekkershut is geïnspireerd op een Zweeds langhuis.',
    img: card1,
  },
  {
    label: "City Cabin 'Noord'",
    href: 'trekkershutten/city-cabin-noord',
    shortDescription: 'Deze unieke blauwe trekkershut staat op stelten.',
    img: card2,
  },
  {
    label: "City Cabin 'Vliegenbos'",
    href: 'trekkershutten/city-cabin-vliegenbos',
    shortDescription: 'De trekkershut is gemaakt met gerecycled materiaal.',
    img: card3,
  },
  {
    label: "City Cabin 'Mokum'",
    href: 'trekkershutten/city-cabin-mokum',
    shortDescription: 'Deze simpele maar unieke trekkershut is nieuw in 2024!',
    img: card4,
  },
]

export default function Trekkershutten() {
  return (
    <>
      <Grid paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="/camping-vliegenbos/">Home</Breadcrumb.Link>
          </Breadcrumb>
          <Heading level={1}>Trekkershutten</Heading>
          <Paragraph>
            Camping Vliegenbos heeft nu nieuwe, ruimere trekkershutten met vloerverwarming. Je moet 18 jaar of ouder
            zijn om een trekkershut te boeken. Het minimum verblijf is 2 nachten. De trekkershutten staan bij elkaar en
            zijn daarom ook heel geschikt om te huren als groep.
          </Paragraph>
        </Grid.Cell>
        <Grid.Cell span="all">
          <Image src={trekkershuttenImage.src} alt="" />
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Paragraph>
            Als je meerdere hutten tegelijk wil boeken, neem dan contact op met de receptie voor een reservering via{' '}
            <Link href="tel:+3102517800">+31(0)20 251 7800</Link> of{' '}
            <Link href="mailto:vliegenbos.sdn@amsterdam.nl">vliegenbos.sdn@amsterdam.nl</Link>. <br />
            <br />
            Online reserveren kan voor een verblijf tussen 2 en 7 nachten. Wil je voor een kortere of langere periode
            reserveren, neem dan contact op met de receptie. je kunt in totaal maximaal 21 dagen op de camping
            verblijven.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 10 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
          <Grid>
            {cards.map((card) => (
              <Grid.Cell span={6} key={card.href}>
                <Card>
                  <Card.Image alt="" src={card.img.src} />
                  <Card.HeadingGroup tagline="Trekkershut" color="inverse">
                    <Card.Heading level={2}>
                      <Card.Link href={card.href}>{card.label}</Card.Link>
                    </Card.Heading>
                  </Card.HeadingGroup>
                  <Paragraph>{card.shortDescription}</Paragraph>
                </Card>
              </Grid.Cell>
            ))}
          </Grid>
        </Grid.Cell>
      </Grid>
    </>
  )
}
