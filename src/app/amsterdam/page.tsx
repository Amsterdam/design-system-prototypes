'use client'

import {
  Alert,
  Card,
  Column,
  Grid,
  Heading,
  Link,
  Overlap,
  Paragraph,
  SearchField,
  Spotlight,
} from '@amsterdam/design-system-react'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { useState } from 'react'
import vindenImage from './_assets/vinden.jpg'
import stormschadeImage from './_assets/stormschade.jpg'
import woonwijkImage from './_assets/woonwijk.jpg'
import vervoerImage from './_assets/vervoer.jpg'
import zonnepanelenImage from './_assets/zonnepanelen.jpg'

const topTasks = [
  {
    title: 'Gemeentebelastingen',
    description: 'Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.',
  },
  {
    title: 'Parkeren + Reizen (P+R)',
    description: 'U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.',
  },
  {
    title: 'Paspoort, ID-kaart en rijbewijs',
    description: 'Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.',
  },
  {
    title: 'Onderwijs',
    description:
      'Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.',
  },
  {
    title: 'Meldingen openbare ruimte en overlast',
    description:
      'Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat bij de gemeente melden.',
  },
  {
    title: 'Verhuizing doorgeven',
    description: 'Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.',
  },
  {
    title: 'Grof afval',
    description: 'Grof afval zijn spullen die niet in een vuilniszak passen.',
  },
  {
    title: 'Kennisgevingen en bekendmakingen',
    description: 'Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.',
  },
]

const calenderItems = [
  { date: '29 juni 2023', description: 'Presentatie nieuwe Stopera-gebouw', time: 'Tijd: 18.00 – 21.00 uur' },
  {
    date: '22 juni 2023',
    description: 'Praat mee over het toekomstige slavernijmuseum',
    time: 'Tijd: 13.00 – 16.00 uur',
  },
  {
    date: '15 juni 2023',
    description: 'Opening tentoonstelling schilderijen Van Rijn',
    time: 'Tijd: 10.00 – 11.30 uur',
  },
]

const cards = [
  { heading: 'Nederlands eerste houten woonwijk komt in Zuidoost', image: woonwijkImage },
  { heading: 'Gratis openbaar vervoer voor kinderen', image: vervoerImage },
  { heading: 'Zonnepanelen op uw dak? Zo houdt u uw huis veilig', image: zonnepanelenImage },
]

function HomePage() {
  const [isAlertVisible, setIsAlertVisible] = useState(true)

  return (
    <>
      {isAlertVisible && (
        <Grid>
          <Grid.Cell span="all">
            <Alert className="ams-mb--md" closeable onClose={() => setIsAlertVisible(false)}>
              <Paragraph>
                Tijdens Koningsdag zijn alle Stadsloketten gesloten. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Aliquid aspernatur modi, omnis quam vitae. Ook 14 020 en alle andere telefoonnummers van de
                gemeente zijn niet bereikbaar.
              </Paragraph>
            </Alert>
          </Grid.Cell>
        </Grid>
      )}
      <Overlap>
        <NextImage alt="" className="ams-image ams-aspect-ratio--2x-wide" src={vindenImage} />
        <Grid style={{ alignSelf: 'center' }}>
          <Grid.Cell span={{ medium: 6, narrow: 4, wide: 8 }} start={{ medium: 2, narrow: 1, wide: 3 }}>
            <SearchField onSubmit={() => {}}>
              <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
              <SearchField.Button />
            </SearchField>
          </Grid.Cell>
        </Grid>
      </Overlap>
      <Grid paddingVertical="medium">
        <Grid.Cell span="all">
          <Heading>Meest bezocht</Heading>
        </Grid.Cell>
        {topTasks.map(({ title, description }) => (
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }} key={title}>
            <Card>
              <Heading level={3} size="level-4">
                <Card.Link href="#">{title}</Card.Link>
              </Heading>
              <Paragraph size="small">{description}</Paragraph>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
      <Spotlight color="purple">
        <Grid paddingVertical="medium">
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading inverseColor style={{ marginBlockEnd: '1.5rem' }} size="level-2">
              Ontheffing of vergunning
            </Heading>
            <Paragraph inverseColor size="small" style={{ marginBlockEnd: '1.5rem' }}>
              Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning,{' '}
              nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regult u allemaal met 1 formulier.
            </Paragraph>
            <Link href="#" inverseColor variant="standalone">
              Eenvoudig regelen
            </Link>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading inverseColor style={{ marginBlockEnd: '1.5rem' }} size="level-2">
              Werkzaamheden
            </Heading>
            <Paragraph inverseColor lang="la" size="small" style={{ marginBlockEnd: '1.5rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores beatae cumque deleniti exercitationem
              facere fugiat laudantium libero magnam mollitia nisi, omnis pariatur preferendis.
            </Paragraph>
            <Link href="#" inverseColor variant="standalone">
              Alle bouw- en verkeerswerkzaamheden
            </Link>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Grid paddingVertical="medium">
        <Grid.Cell span={3}>
          <Heading className="ams-mb--sm">Kalender</Heading>
          <Column>
            {calenderItems.map(({ date, description, time }) => (
              <Card key={date}>
                <Heading level={2} size="level-4">
                  <Card.Link href="#">{date}</Card.Link>
                </Heading>
                <Paragraph size="small">{description}</Paragraph>
                <Paragraph size="small">{time}</Paragraph>
              </Card>
            ))}
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} start={{ narrow: 1, medium: 4, wide: 5 }}>
          <Heading className="ams-mb--sm">Nieuws</Heading>
          <Card>
            <NextImage alt="" className="ams-image" src={stormschadeImage} />
            <Card.HeadingGroup tagline="Nieuws">
              <Heading level={2} size="level-4">
                <NextLink href="/amsterdam/nieuws" legacyBehavior passHref>
                  <Card.Link>Waar u stormschade kunt melden</Card.Link>
                </NextLink>
              </Heading>
            </Card.HeadingGroup>
            <Paragraph size="small">
              Storm Poly raasde woensdag 5 juli over de stad. Het zal in sommige gevallen nog enkele dagen duren voordat
              alle schade is opgeruimd. U kunt een melding doen van afgebroken takken, andere stormschade of
              wateroverlast.
            </Paragraph>
          </Card>
        </Grid.Cell>
        {cards.map(({ heading, image }) => (
          <Grid.Cell span={4} key={heading}>
            <Card>
              <NextImage alt="" className="ams-image" src={image} />
              <Card.HeadingGroup tagline="Nieuws">
                <Heading level={2} size="level-4">
                  <NextLink href="/amsterdam/nieuws" legacyBehavior passHref>
                    <Card.Link>{heading}</Card.Link>
                  </NextLink>
                </Heading>
              </Card.HeadingGroup>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
    </>
  )
}

export default HomePage
