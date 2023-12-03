import {
  AspectRatio,
  Breadcrumb,
  Grid,
  Heading,
  Highlight,
  Image,
  Link,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react'
import constructionWorkImage from '../../../assets/images/construction-work.jpg'
import constructionWorkMapImage from '../../../assets/images/construction-work-map.jpg'

const baseUrl = import.meta.env.BASE_URL

export const Projects = () => (
  <>
    <Grid gapVertical="small" paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
        <Breadcrumb>
          <Breadcrumb.Item href={baseUrl}>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Heading level={1} className="amsterdam-mb-md">
          Bouwprojecten en verkeersprojecten
        </Heading>
        <Paragraph size="large">
          <strong>Overzicht van ruim 200 projecten in Amsterdam.</strong> Lees waar en wanneer we werken aan nieuwbouw,
          groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden. En
          hoe u kunt meedenken. Ga naar de kaart om een project in de stad te zien.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="large">
      <Grid.Cell span={{ narrow: 2, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
        <div style={{ display: 'grid' }} className="amsterdam-gap-sm">
          <Heading level={2} size="level-4" className="amsterdam-mb-md">
            Projecten per stadsdeel
          </Heading>
          <UnorderedList markers={false}>
            {['Centrum', 'Nieuw-West', 'Noord', 'Oost', 'Weesp', 'West', 'Zuid', 'Zuidoost'].map((district, index) => (
              <UnorderedList.Item key={index}>
                <Link href={`${baseUrl}project`} variant="inList">
                  {district}
                </Link>
              </UnorderedList.Item>
            ))}
          </UnorderedList>
        </div>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 2, medium: 4, wide: 5 }}>
        <div style={{ display: 'grid' }} className="amsterdam-gap-sm">
          <Heading level={2} size="level-4" className="amsterdam-mb-md">
            Zoek project
          </Heading>
          <input
            type="text"
            style={{
              maxWidth: '100%',
              padding: '1em',
              borderWidth: '0 0 2px',
              borderStyle: 'solid',
              fontFamily: 'var(--amsterdam-paragraph-font-family)',
              fontSize: 'var(--amsterdam-paragraph-wide-font-size)',
            }}
          />
        </div>
      </Grid.Cell>
    </Grid>
    <Highlight color="yellow">
      <Grid paddingVertical="medium">
        <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 3 }}>
          <Heading level={2} size="level-4" className="amsterdam-mb-md">
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
    </Highlight>
    <AspectRatio ratio="wide">
      <Image alt="" src={constructionWorkMapImage} />
    </AspectRatio>
  </>
)
