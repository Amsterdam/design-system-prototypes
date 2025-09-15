'use client'

import {
  Breadcrumb,
  Card,
  Grid,
  Heading,
  Image,
  Link,
  Paragraph,
  Spotlight,
  Tabs,
  UnorderedList,
} from '@amsterdam/design-system-react'
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

const goodToKnow = [
  'De trekkershutten zijn geschikt voor 4 personen. Neem contact op met de receptie als je met 5 personen wil komen',
  'Parkeerplaatsen zijn beperkt en niet te reserveren. We raden aan om niet met de auto te komen, tenzij het niet anders kan. Er is goed openbaar vervoer naar het centrum.',
  'Bij de trekkershut zijn ook schoonmaakspullen. Als je de hut niet schoon achterlaat, rekenen we schoonmaakkosten.',
  'Roken is niet toegestaan in de trekkershutten.',
  'Huisdieren zijn niet toegestaan.',
]

const arrivalDeparture = ['Aankomst vanaf 15.00 uur', 'Vertrek tot 11.00 uur']

export default function Trekkershutten() {
  return (
    <>
      <Grid paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="/camping-vliegenbos/">Home</Breadcrumb.Link>
          </Breadcrumb>
          <Heading level={1} size="level-2">
            Trekkershutten
          </Heading>
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
            <Link href="mailto:vliegenbos.sdn@amsterdam.nl">vliegenbos.sdn@amsterdam.nl</Link>. Online reserveren kan
            voor een verblijf tussen 2 en 7 nachten. Wil je voor een kortere of langere periode reserveren, neem dan
            contact op met de receptie. je kunt in totaal maximaal 21 dagen op de camping verblijven.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="large">
        {cards.map((card) => (
          <Grid.Cell span={6} key={card.href}>
            <Card>
              <Card.Image alt="" src={card.img.src} />
              <Card.HeadingGroup tagline="Trekkershut" color="inverse">
                <Card.Heading level={2} size="level-4">
                  <Card.Link href={card.href}>{card.label}</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Paragraph>{card.shortDescription}</Paragraph>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
      <Grid paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Tabs>
            <Tabs.List>
              <Tabs.Button aria-controls="goed-om-te-weten">Goed om te weten</Tabs.Button>
              <Tabs.Button aria-controls="aankomst-en-vertrek">Aankomst en vertrek</Tabs.Button>
            </Tabs.List>
            <Tabs.Panel id="goed-om-te-weten">
              <UnorderedList>
                {goodToKnow.map((item, index) => (
                  <UnorderedList.Item key={`${index}-goodtoknow-item`}>{item}</UnorderedList.Item>
                ))}
              </UnorderedList>
            </Tabs.Panel>
            <Tabs.Panel id="aankomst-en-vertrek">
              <UnorderedList>
                {arrivalDeparture.map((item, index) => (
                  <UnorderedList.Item key={`${index}-arrival-departure-item`}>{item}</UnorderedList.Item>
                ))}
              </UnorderedList>
            </Tabs.Panel>
          </Tabs>
        </Grid.Cell>
      </Grid>
    </>
  )
}
