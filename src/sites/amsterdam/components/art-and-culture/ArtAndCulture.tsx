import {
  Breadcrumb,
  Column,
  Grid,
  Heading,
  Image,
  LinkList,
  PageHeading,
  Paragraph,
} from '@amsterdam/design-system-react'
import { DownloadIcon } from '@amsterdam/design-system-react-icons'
import artAndCultureImage from '../../assets/images/art-and-culture.jpg'
import { siteUrl } from '../../constants'

export const ArtAndCulture = () => (
  <>
    <Grid>
      <Grid.Cell span="all">
        <Breadcrumb>
          <Breadcrumb.Item href={siteUrl}>Home</Breadcrumb.Item>
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
        <LinkList>
          <LinkList.Link href="#">Monumenten en archeologie</LinkList.Link>
          <LinkList.Link href="#">Ateliers en broedplaatsen</LinkList.Link>
          <LinkList.Link href="#">Kunstenplan</LinkList.Link>
          <LinkList.Link href="#">Subsidies</LinkList.Link>
        </LinkList>
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
        <LinkList>
          <LinkList.Link href="#">Huisvesting voor kunst en cultuur</LinkList.Link>
          <LinkList.Link href="#">Vrije ruimte in Amsterdam</LinkList.Link>
          <LinkList.Link href="#">De nacht heeft de toekomst</LinkList.Link>
          <LinkList.Link href="#">Kunstwerken in de stad</LinkList.Link>
          <LinkList.Link href="#">Werelderfgoed</LinkList.Link>
          <LinkList.Link href="#">Stadscuratorium</LinkList.Link>
          <LinkList.Link href="#">EIT Culture & Creativity</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell
        span={4}
        start={{
          narrow: 1,
          medium: 5,
          wide: 9,
        }}
      >
        <Column>
          <section>
            <Heading level={2} size="level-3" className="amsterdam-mb-xs">
              Archieven en collecties
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Stadsarchief</LinkList.Link>
              <LinkList.Link href="#">Collectie van gemeente Amsterdam</LinkList.Link>
            </LinkList>
          </section>
          <section>
            <Heading level={2} size="level-3" className="amsterdam-mb-xs">
              Bekijk op de kaart
            </Heading>
            <LinkList>
              <LinkList.Link href="#">Monumenten</LinkList.Link>
              <LinkList.Link href="#">Beschermde stads- en dorpsgezichten</LinkList.Link>
              <LinkList.Link href="#">Archeologische vindplaatsen</LinkList.Link>
            </LinkList>
          </section>
          <section>
            <Heading level={2} size="level-3" className="amsterdam-mb-xs">
              Weesp
            </Heading>
            <LinkList>
              <LinkList.Link href="#" icon={DownloadIcon}>
                Cultuurnota Weesp (PDF, 275 kB)
              </LinkList.Link>
              <LinkList.Link href="#" icon={DownloadIcon}>
                Verordeningen Cultuurprijs Weesp (PDF, 275 kB)
              </LinkList.Link>
            </LinkList>
          </section>
        </Column>
      </Grid.Cell>
    </Grid>
  </>
)
