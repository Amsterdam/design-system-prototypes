'use client'

import { Breadcrumb, Card, Grid, Heading, Link, LinkList, Paragraph, Spotlight } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import NextImage from 'next/image'

import constructionWorkMapImage from '../../_assets/construction-work-map.jpg'

function Project() {
  return (
    <>
      <Grid>
        <Grid.Cell span="all">
          <Breadcrumb>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <Breadcrumb.Link>Home</Breadcrumb.Link>
            </NextLink>
            <NextLink href="/amsterdam/projecten" legacyBehavior passHref>
              <Breadcrumb.Link>Home</Breadcrumb.Link>
            </NextLink>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid gapVertical="large" paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
          <Heading level={1} className="ams-mb-m">
            Bouw- en verkeersprojecten in Noord
          </Heading>
          <Paragraph size="large">
            <strong>Overzicht van projecten in stadsdeel Noord.</strong> Lees waar en wanneer we werken aan nieuwbouw,
            groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden. En
            hoe u kunt meedenken. Ga naar de <Link href="#kaart">kaart</Link> om een project in de stad te zien.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="x-large">
        <Grid.Cell span="all">
          <Heading level={2} size="level-3">
            Overzicht projecten
          </Heading>
        </Grid.Cell>
        {[
          'Appelweg: tijdelijke starterswoningen',
          'Banne Noord: onderhoud en vernieuwing',
          'Banne Zuid: vernieuwing en verbetering',
          'Buiksloterham: duurzame herontwikkeling tot werk- en woongebied',
          'Buikslotermeerplein: stap voor stap levendiger en groener',
          'De Bongerd: woonwijk in ontwikkeling',
          'Centrumgebied Amsterdam Noord: nieuw stedelijk centrum',
          'De Kleine Wereld: opknappen van de buurt',
        ].map((title) => (
          <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
            <Card>
              <Card.Heading level={3} size="level-4">
                <Card.Link href="#">{title}</Card.Link>
              </Card.Heading>
              <Paragraph>
                Het woonproject Appelweg biedt straks 63 tijdelijke woningen voor Amsterdamse starters op de
                woningmarkt.
              </Paragraph>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
      <Spotlight>
        <Grid paddingVertical="x-large">
          <Grid.Cell span={{ narrow: 3, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
            <Heading color="inverse" level={2} size="level-4" className="ams-mb-s">
              Werk aan de weg
            </Heading>
            <LinkList>
              {[
                'Dam tot Damloop 17 september. afsluitingen',
                'De Nieuwe Noorder, omleiding',
                'Brug bij Zwarte Gouw/Weerslootpad, omleiding fietsers en voetgangers',
                'Metaalbewerkerweg en Kamperfoelieweg, omleiding voor fietsers',
                'H.M. Terwogtweg, afsluitweg',
                'Meer werkzaamheden in stadsdeel Noord',
              ].map((district) => (
                <LinkList.Link color="inverse" href="#" key={district}>
                  {district}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 2, wide: 4 }} start={{ narrow: 1, medium: 7, wide: 8 }}>
            <Heading color="inverse" level={2} size="level-4" className="ams-mb-s">
              In andere stadsdelen
            </Heading>
            <LinkList>
              {['Centrum', 'Nieuw-West', 'Noord', 'Oost', 'Weesp', 'West', 'Zuid', 'Zuidoost'].map((district) => (
                <NextLink href="/amsterdam/projecten/stadsdeel" key={district} legacyBehavior passHref>
                  <LinkList.Link color="inverse" key={district}>
                    {district}
                  </LinkList.Link>
                </NextLink>
              ))}
            </LinkList>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <Heading level={2} size="level-4">
            Projecten op de kaart
          </Heading>
        </Grid.Cell>
      </Grid>
      <NextImage
        alt=""
        className="ams-image"
        id="kaart"
        src={constructionWorkMapImage}
      />
    </>
  )
}

export default Project
