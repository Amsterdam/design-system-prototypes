import {
  AspectRatio,
  Breadcrumb,
  Card,
  Grid,
  Heading,
  Highlight,
  Image,
  Link,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react'
import constructionWorkMapImage from '../../../assets/images/construction-work-map.jpg'

const baseUrl = import.meta.env.BASE_URL

export const Project = () => (
  <>
    <Grid>
      <Grid.Cell fullWidth>
        <Breadcrumb>
          <Breadcrumb.Item href={baseUrl}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href={`${baseUrl}projecten`}>Bouwprojecten en verkeersprojecten</Breadcrumb.Item>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <Grid gapVertical="small" paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
        <Heading className="amsterdam-mb-sm">Bouwprojecten en verkeersprojecten in Noord</Heading>
        <Paragraph size="large">
          <strong>Overzicht van projecten in stadsdeel Noord.</strong> Lees waar en wanneer we werken aan nieuwbouw,
          groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden. En
          hoe u kunt meedenken. Ga naar de{' '}
          <Link href="#kaart" variant="inline">
            kaart
          </Link>{' '}
          om een project in de stad te zien.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid gapVertical="small" paddingBottom="medium">
      <Grid.Cell fullWidth>
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
      ].map((title, index) => (
        <Grid.Cell key={index} span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            <Heading level={3} size="level-4">
              <Card.Link href="#">{title}</Card.Link>
            </Heading>
            <Paragraph size="small">
              Het woonproject Appelweg biedt straks 63 tijdelijke woningen voor Amsterdamse starters op de woningmarkt.
            </Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </Grid>
    <Highlight color="purple">
      <Grid paddingVertical="medium">
        <Grid.Cell span={{ narrow: 3, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
          <Heading inverseColor level={2} size="level-4" className="amsterdam-mb-xs">
            Werk aan de weg
          </Heading>
          <UnorderedList markers={false}>
            {[
              'Dam tot Damloop 17 september. afsluitingen',
              'De Nieuwe Noorder, omleiding',
              'Brug bij Zwarte Gouw/Weerslootpad, omleiding fietsers en voetgangers',
              'Metaalbewerkerweg en Kamperfoelieweg, omleiding voor fietsers',
              'H.M. Terwogtweg, afsluitweg',
              'Meer werkzaamheden in stadsdeel Noord',
            ].map((district, index) => (
              <UnorderedList.Item key={index}>
                <Link onBackground="dark" href="#" variant="inList">
                  {district}
                </Link>
              </UnorderedList.Item>
            ))}
          </UnorderedList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 1, medium: 2, wide: 4 }} start={{ narrow: 4, medium: 7, wide: 8 }}>
          <Heading inverseColor level={2} size="level-4" className="amsterdam-mb-xs">
            In andere stadsdelen
          </Heading>
          <UnorderedList markers={false}>
            {['Centrum', 'Nieuw-West', 'Noord', 'Oost', 'Weesp', 'West', 'Zuid', 'Zuidoost'].map((district, index) => (
              <UnorderedList.Item key={index}>
                <Link onBackground="dark" href="#" variant="inList">
                  {district}
                </Link>
              </UnorderedList.Item>
            ))}
          </UnorderedList>
        </Grid.Cell>
      </Grid>
    </Highlight>
    <Grid paddingVertical="small">
      <Grid.Cell fullWidth>
        <Heading level={2} size="level-4">
          Projecten op de kaart
        </Heading>
      </Grid.Cell>
    </Grid>
    <AspectRatio ratio="x-wide">
      <Image id="kaart" alt="" src={constructionWorkMapImage} />
    </AspectRatio>
  </>
)
