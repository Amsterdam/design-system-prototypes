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
import artAndCultureImage from '../../../assets/images/art-and-culture.jpg'

const baseUrl = import.meta.env.BASE_URL

export const ArtAndCulture = () => (
  <>
    <Grid>
      <Grid.Cell span="all">
        <Breadcrumb>
          <Breadcrumb.Item href={baseUrl}>Home</Breadcrumb.Item>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="medium">
      <Grid.Cell span="all">
        <PageHeading>Kunst en Cultuur</PageHeading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 4 }}>
        <Paragraph size="large">
          Of u nu bewoner, bezoeker, kunstenaar of creatieveling bent: kunst en cultuur zijn overal om u heen in
          Amsterdam. Dat is genieten, maar brengt ook verantwoordelijkheid met zich mee.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
        <Image alt="" src={artAndCultureImage} />
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="medium">
      <Grid.Cell span={4}>
        <Heading level={3} className="amsterdam-mb-xs">
          Vaak gezocht
        </Heading>
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
      <Grid.Cell span={4} start={{ narrow: 1, medium: 1, wide: 5 }}>
        <Heading level={2} size="level-3" className="amsterdam-mb-xs">
          Wie Amsterdam zegt, zegt kunst en cultuur
        </Heading>
        <Paragraph className="amsterdam-mb-xs">
          Van de musea en culturele broedplaatsen tot de stadsparken en de met kunst versierde gevels van de
          grachtenpanden. Kunst en cultuur is altijd en overal in Amsterdam. En het houdt niet op als de zon ondergaat:
          ook de clubscene is van culturele waarde voor de stad.
        </Paragraph>
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
          <section>
            <Heading level={2} size="level-3" className="amsterdam-mb-xs">
              Archieven en collecties
            </Heading>
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
          </section>
          <section>
            <Heading level={2} size="level-3" className="amsterdam-mb-xs">
              Bekijk op de kaart
            </Heading>
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
          </section>
          <section>
            <Heading level={2} size="level-3" className="amsterdam-mb-xs">
              Weesp
            </Heading>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link href="#" icon={DownloadIcon} variant="inList">
                  Cultuurnota Weesp (PDF, 275 kB)
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link href="#" icon={DownloadIcon} variant="inList">
                  Verordeningen Cultuurprijs Weesp (PDF, 275 kB)
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </section>
        </div>
      </Grid.Cell>
    </Grid>
  </>
)
