'use client'

import { Breadcrumb, Grid, Heading, LinkList, Paragraph, Spotlight, TextInput } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import NextImage from 'next/image'

import constructionWorkImage from '../_assets/construction-work.jpg'
import constructionWorkMapImage from '../_assets/construction-work-map.jpg'

function Projecten() {
  return (
    <>
      <Grid>
        <Grid.Cell span="all">
          <Breadcrumb>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <Breadcrumb.Link>Home</Breadcrumb.Link>
            </NextLink>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid gapVertical="large" paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
          <Heading level={1} className="ams-mb-m">
            Bouw- en verkeersprojecten
          </Heading>
          <Paragraph size="large">
            <strong>Overzicht van ruim 200 projecten in Amsterdam.</strong> Lees waar en wanneer we werken aan
            nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele
            gebieden. En hoe u kunt meedenken. Ga naar de kaart om een project in de stad te zien.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 2, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
          <Heading level={2} size="level-4" className="ams-mb-s">
            Projecten per stadsdeel
          </Heading>
          <LinkList>
            {['Centrum', 'Nieuw-West', 'Noord', 'Oost', 'Weesp', 'West', 'Zuid', 'Zuidoost'].map((district) => (
              <NextLink href="/amsterdam/projecten/stadsdeel" key={district} legacyBehavior passHref>
                <LinkList.Link key={district}>{district}</LinkList.Link>
              </NextLink>
            ))}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 2, medium: 4, wide: 5 }}>
          <Heading level={2} size="level-4" className="ams-mb-s">
            Zoek project
          </Heading>
          <TextInput />
        </Grid.Cell>
      </Grid>
      <Spotlight color="yellow">
        <Grid paddingVertical="x-large">
          <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 3 }}>
            <Heading level={2} size="level-4" className="ams-mb-s">
              Kaart met bouwprojecten en verkeersprojecten
            </Heading>
            <Paragraph>Ga via de kaart naar meer informatie over het project dat u zoekt.</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
            <NextImage alt="" className="ams-image" src={constructionWorkImage} />
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <NextImage alt="" className="ams-image" src={constructionWorkMapImage} />
    </>
  )
}

export default Projecten
