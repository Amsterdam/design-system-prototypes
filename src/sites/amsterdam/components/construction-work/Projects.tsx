import {
  AspectRatio,
  Breadcrumb,
  Grid,
  Heading,
  Image,
  LinkList,
  Paragraph,
  Spotlight,
  TextInput,
} from '@amsterdam/design-system-react'
import constructionWorkMapImage from '../../assets/images/construction-work-map.jpg'
import constructionWorkImage from '../../assets/images/construction-work.jpg'
import { siteUrl } from '../../constants'

export const Projects = () => (
  <>
    <Grid>
      <Grid.Cell span="all">
        <Breadcrumb>
          <Breadcrumb.Item href={siteUrl}>Home</Breadcrumb.Item>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>
    <Grid gapVertical="small" paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
        <Heading className="amsterdam-mb--sm">Bouwprojecten en verkeersprojecten</Heading>
        <Paragraph size="large">
          <strong>Overzicht van ruim 200 projecten in Amsterdam.</strong> Lees waar en wanneer we werken aan nieuwbouw,
          groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden. En
          hoe u kunt meedenken. Ga naar de kaart om een project in de stad te zien.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 2, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
        <Heading level={2} size="level-4" className="amsterdam-mb--xs">
          Projecten per stadsdeel
        </Heading>
        <LinkList>
          {['Centrum', 'Nieuw-West', 'Noord', 'Oost', 'Weesp', 'West', 'Zuid', 'Zuidoost'].map((district, index) => (
            <LinkList.Link href={`${siteUrl}project`} key={index}>
              {district}
            </LinkList.Link>
          ))}
        </LinkList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 2, medium: 4, wide: 5 }}>
        <Heading level={2} size="level-4" className="amsterdam-mb--xs">
          Zoek project
        </Heading>
        <TextInput />
      </Grid.Cell>
    </Grid>
    <Spotlight color="yellow">
      <Grid paddingVertical="medium">
        <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 3 }}>
          <Heading level={2} size="level-4" className="amsterdam-mb--xs">
            Kaart met bouwprojecten en verkeersprojecten
          </Heading>
          <Paragraph>Ga via de kaart naar meer informatie over het project dat u zoekt.</Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <AspectRatio ratio="x-wide">
            <Image alt="" src={constructionWorkImage} />
          </AspectRatio>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    <AspectRatio ratio="x-wide">
      <Image alt="" src={constructionWorkMapImage} />
    </AspectRatio>
  </>
)
