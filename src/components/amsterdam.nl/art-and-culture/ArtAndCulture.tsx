import {
  Breadcrumb,
  Grid,
  Heading,
  Image,
  Link,
  PageHeading,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react'
import { DownloadIcon } from '@amsterdam/design-system-react-icons'
import artAndCultureImage from '../../../assets/images/art-and-culture.png'

export const ArtAndCulture = () => (
  <>
    <Grid paddingBottom="medium">
      <Grid.Cell fullWidth>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeading>Kunst en Cultuur</PageHeading>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="large">
      <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
        <div className="amsterdam-mb-md">
          <Paragraph size="large">
            Of u nu bewoner, bezoeker, kunstenaar of creatieveling bent: kunst en cultuur zijn overal om u heen in
            Amsterdam. Dat is genieten, maar brengt ook verantwoordelijkheid met zich mee.
          </Paragraph>
        </div>
        <div className="amsterdam-mb-sm">
          <Heading level={3}>Vaak gezocht</Heading>
        </div>
        <UnorderedList markers={false}>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Monumenten en archeologie
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Ateliers en broedplaatsen
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Kunstenplan
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Subsidies
            </Link>
          </UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 8 }}>
        <Image alt="" src={artAndCultureImage} />
      </Grid.Cell>
      <Grid.Cell
        span={4}
        start={{
          narrow: 1,
          medium: 1,
          wide: 5,
        }}
      >
        <div className="amsterdam-mb-sm">
          <Heading level={2}>Wie Amsterdam zegt, zegt kunst en cultuur</Heading>
        </div>
        <div className="amsterdam-mb-md">
          <Paragraph size="large">
            Van de musea en culturele broedplaatsen tot de stadsparken en de met kunst versierde gevels van de
            grachtenpanden. Kunst en cultuur is altijd en overal in Amsterdam. En het houdt niet op als de zon
            ondergaat: ook de clubscene is van culturele waarde voor de stad.
          </Paragraph>
        </div>
        <UnorderedList markers={false}>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Huisvesting voor kunst en cultuur
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Vrije ruimte in Amsterdam
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              De nacht heeft de toekomst
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Kunstwerken in de stad
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Werelderfgoed
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              Stadscuratorium
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link href="#" variant="inList">
              EIT Culture & Creativity
            </Link>
          </UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      <Grid.Cell
        span={4}
        start={{
          narrow: 1,
          medium: 5,
          wide: 9,
        }}
      >
        <div style={{ display: 'grid' }} className="amsterdam-gap-md">
          <div style={{ display: 'grid' }} className="amsterdam-gap-sm">
            <Heading level={2}>Archieven en collecties</Heading>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link href="#" variant="inList">
                  Stadsarchief
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link href="#" variant="inList">
                  Collectie van gemeente Amsterdam
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </div>
          <div style={{ display: 'grid' }} className="amsterdam-gap-sm">
            <Heading level={2}>Bekijk op de kaart</Heading>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link href="#" variant="inList">
                  Monumenten
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link href="#" variant="inList">
                  Beschermde stads- en dorpsgezichten
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link href="#" variant="inList">
                  Archeologische vindplaatsen
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </div>
          <div style={{ display: 'grid' }} className="amsterdam-gap-sm">
            <Heading level={2}>Weesp</Heading>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link href="#" icon={DownloadIcon} variant="inList">
                  Cultuurnota Weesp (PDF, 275 kB)
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link href="#" variant="inList">
                  Verordeningen Cultuurprijs Weesp (PDF, 275 kB)
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </div>
        </div>
      </Grid.Cell>
    </Grid>
  </>
)
