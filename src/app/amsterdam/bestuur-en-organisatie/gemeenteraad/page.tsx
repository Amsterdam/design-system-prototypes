'use client'

import { Breadcrumb, Card, Grid, Heading, LinkList, PageHeading, Paragraph } from '@amsterdam/design-system-react'
import { LinkExternalIcon } from '@amsterdam/design-system-react-icons'
import NextImage from 'next/image'
import type { StaticImageData } from 'next/image'
import NextLink from 'next/link'

import cityCouncilImage from '../../_assets/city-council.jpg'
import cityCouncilNews1Image from '../../_assets/city-council-news-1.jpg'
import cityCouncilNews2Image from '../../_assets/city-council-news-2.jpg'

const newsArticles = [
  {
    date: '28 mei 2024',
    description:
      'Tussen 3 juni en 21 juli leggen we het tramspoor op de Berlagebrug aan. De brug is ongeveer 12 nachten dicht voor gemotoriseerd verkeer en 3 dagen voor al het verkeer.',
    id: 1,
    image: cityCouncilNews1Image,
    tagline: 'Algemeen, Centrum',
    title: 'Berlagebrug een aantal nachten dicht',
  },
  {
    date: '24 mei 2024',
    description:
      'In de zomer van 1874 werd het allereerste beroepsbrandweerkorps van Nederland opgericht: de huidige Brandweer Amsterdam-Amstelland.',
    id: 2,
    image: cityCouncilNews2Image,
    tagline: 'Achtergrond',
    title: 'Het allereerste beroepsbrandweerkorps van Nederland bestaat 150 jaar',
  },
]

type NewsArticleProps = {
  date: string
  description: string
  image: StaticImageData
  tagline: string
  title: string
}

function NewsArticle({ date, description, image, tagline, title }: NewsArticleProps) {
  return (
    <>
      <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <NextImage alt="" className="ams-image" src={image} />
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 6 }}>
        <Card>
          <Card.HeadingGroup tagline={tagline}>
            <Card.Heading level={3}>
              <Card.Link href="#">{title}</Card.Link>
            </Card.Heading>
          </Card.HeadingGroup>
          <Paragraph>{description}</Paragraph>
          <Paragraph size="small" style={{ color: '#474747' }}>
            {date}
          </Paragraph>
        </Card>
      </Grid.Cell>
    </>
  )
}

export default function Gemeenteraad() {
  return (
    <>
      <Grid paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
          <Breadcrumb>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <Breadcrumb.Link>Home</Breadcrumb.Link>
            </NextLink>
            <NextLink href="/amsterdam/bestuur-en-organisatie" legacyBehavior passHref>
              <Breadcrumb.Link>Bestuur en Organisatie</Breadcrumb.Link>
            </NextLink>
          </Breadcrumb>
          <PageHeading className="ams-mb-m">Gemeenteraad</PageHeading>
          <Paragraph size="large">
            De gemeenteraad is het hoogste bestuursorgaan van de stad. De raad bestaat uit 45 volksvertegenwoordigers
            van verschillende politieke groeperingen. De raadsleden worden elke 4 jaar gekozen door Amsterdammers bij de
            gemeenteraadsverkiezingen.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <NextImage alt="" className="ams-image ams-aspect-ratio-16-5" src={cityCouncilImage} />
      <Grid paddingVertical="2x-large" gapVertical="large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={1}>
          <Heading className="ams-mb-s" level={2}>
            Raadsinformatie
          </Heading>
          <Paragraph className="ams-mb-s">
            Vergaderschema’s en stukken, beelden en uitslagen van vergaderingen.
          </Paragraph>
          <LinkList>
            <LinkList.Link href="https://amsterdam.raadsinformatie.nl/" icon={LinkExternalIcon}>
              Bekijk op amsterdam.raadsinformatie.nl
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
          <Heading className="ams-mb-s" level={2}>
            Raadsleden en fracties
          </Heading>
          <Paragraph className="ams-mb-s">
            Welke politieke partijen zijn vertegenwoordigd in de raad? Wie zijn de raadsleden en wat doen zij?
          </Paragraph>
          <LinkList>
            <LinkList.Link href="#">Bekijk de raadsleden en fracties</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={1}>
          <Heading className="ams-mb-s" level={2}>
            Raadscommissies
          </Heading>
          <Paragraph className="ams-mb-s">
            Wat is een raadscommissie, welke commissies zijn er en wie zitten erin? Aanmelden om in te spreken.
          </Paragraph>
          <LinkList>
            <LinkList.Link href="#">Lees meer over de raadscommissies</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
          <Heading className="ams-mb-s" level={2}>
            Invloed uitoefenen
          </Heading>
          <Paragraph className="ams-mb-s">
            Direct contact opnemen met een raadslid, inspreken bij een raadscommissie en meer.
          </Paragraph>
          <LinkList>
            <LinkList.Link href="#">Lees meer over hoe u invloed uit kunt oefenen</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={1}>
          <Heading className="ams-mb-s" level={2}>
            Bestuursorganen
          </Heading>
          <LinkList>
            <LinkList.Link href="#">Hoe werkt de raad?</LinkList.Link>
            <LinkList.Link href="#">College van burgemeesters en wethouders</LinkList.Link>
            <LinkList.Link href="#">Stadsdeelcommissies</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
          <Heading className="ams-mb-s" level={2}>
            Agenda’s en stukken
          </Heading>
          <LinkList>
            <LinkList.Link href="#">Raadsinformatie</LinkList.Link>
            <LinkList.Link href="#">Dagmail</LinkList.Link>
            <LinkList.Link href="#">Rondleidingen</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="2x-large">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading level={2}>Nieuws</Heading>
        </Grid.Cell>
        {newsArticles.map((article) => (
          <NewsArticle
            date={article.date}
            description={article.description}
            image={article.image}
            key={article.id}
            tagline={article.tagline}
            title={article.title}
          />
        ))}
      </Grid>
    </>
  )
}
