'use client'

import {
  AspectRatio,
  Card,
  Grid,
  Heading,
  Image,
  Link,
  LinkList,
  PageHeading,
  Paragraph,
  Row,
  SearchField,
} from '@amsterdam/design-system-react'

const popularLayers = [
  {
    heading: 'Kadastrale perceelsgrenzen',
    description:
      'De Basisregistratie kadaster (BRK) bevat informatie over kadastrale objecten (percelen en appartementsrechten). De kaartlaag kadastrale perceelgrenzen toont de kadastrale grenzen en de grenzen van de gemeente Amsterdam.',
  },
  {
    heading: 'Meetbouten – Zakkingssnelheid',
    description:
      'De registratie meetbouten bevat de meetgegevens van bouten in de Amsterdamse panden. Het doel van de meetbouten is het monitoren van de deformatie (zakkingen of stijgingen). Dit wordt inzichtelijk gemaakt op deze kaartlaag.',
  },
  {
    heading: 'Parkeren – Fiscale indeling',
    description:
      'De kaartlaag parkeren - fiscaal geeft visueel informatie over de fiscale indeling in Amsterdam. Krijg via de kaart inzicht in waar er fiscaal parkeren en waar er niet-fiscaal parkeren van toepassing is.',
  },
]
export default function HomePage() {
  return [
    <Grid key={1} paddingVertical="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <PageHeading className="ams-mb--sm">Het data startpunt van de Gemeente Amsterdam</PageHeading>
        <SearchField onSubmit={() => {}}>
          <SearchField.Input label="Zoeken" placeholder="Zoek op adres, straat, gebied of postcode" />
          <SearchField.Button />
        </SearchField>
      </Grid.Cell>
    </Grid>,
    <Grid key={2} paddingVertical="large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 6 }}>
        <Heading className="ams-mb--sm">Wat kunt u hier vinden?</Heading>
        <Paragraph className="ams-mb--md">
          De Data Verkenner van de Gemeente Amsterdam is het data startpunt. Hier kunt u alles vinden rondom datasets in
          onze{' '}
          <Link href="/data/datasets/" variant="inline">
            datacatalogus
          </Link>
          . Als u op zoek bent naar een{' '}
          <Link href="/data/bag/adressen/?modus=volledig" variant="inline">
            adres
          </Link>
          ,{' '}
          <Link href="/data/hr/vestigingen/?modus=volledig" variant="inline">
            vestiging
          </Link>{' '}
          of{' '}
          <Link href="/data/brk/kadastrale-objecten/?modus=volledig" variant="inline">
            kadastraal object
          </Link>
          , kunt u terecht op de{' '}
          <Link href="/tabellen/" variant="inline">
            tabellen
          </Link>{' '}
          pagina. Daarnaast kunt u{' '}
          <Link href="/data/geozoek/?lagen=hist-pw1909%7Chist-pw1943%7Chist-pw1943-2500%7Chist-pw1985" variant="inline">
            {' '}
            historische kaartlagen
          </Link>{' '}
          en{' '}
          <Link href="/bouwdossiers/" variant="inline">
            bouwdossiers
          </Link>{' '}
          inzien in onze{' '}
          <Link href="/data/geozoek/" variant="inline">
            kaart
          </Link>{' '}
          van Amsterdam.
        </Paragraph>
        <LinkList>
          {['Kaartlagen', 'Datacatalogus', 'BAG, HR, en BRK tabellen', 'Dataplatform services', 'Catalogus (Beta)'].map(
            (link) => (
              <LinkList.Link key={link} href="#">
                {link}
              </LinkList.Link>
            ),
          )}
        </LinkList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 6 }} start={{ medium: 1, narrow: 4, wide: 7 }}>
        <AspectRatio ratio="wide">
          <Image src="https://data.amsterdam.nl/assets/images/home/about.jpg" alt="" />
        </AspectRatio>
      </Grid.Cell>
    </Grid>,
    <Grid key={3} paddingBottom="large">
      <Grid.Cell span="all">
        <Row align="between" wrap>
          <Heading level={2} className="ams-mb--sm">
            Populaire kaartlagen
          </Heading>
        </Row>
      </Grid.Cell>
      {popularLayers.map(({ heading, description }, index) => (
        <Grid.Cell span={4} key={heading}>
          <Card>
            <AspectRatio ratio="x-wide">
              <Image alt="" src={`https://picsum.photos/800/450?random=${index}`} />
            </AspectRatio>
            <Heading level={2} size="level-5">
              <Card.Link href="#">{heading}</Card.Link>
            </Heading>
            <Paragraph size="small">{description}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </Grid>,
  ]
}
