'use client'

import { Breadcrumb, Column, Grid, Heading, LinkList, PageHeading, Paragraph } from '@amsterdam/design-system-react'
import { DownloadIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'
import NextImage from 'next/image'

import artAndCultureImage from '../_assets/art-and-culture.jpg'

function KunstEnCultuur() {
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
          <NextImage alt="" className="ams-image" src={artAndCultureImage} />
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="medium">
        <Grid.Cell span={4}>
          <Heading level={3} className="ams-mb--xs">
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
          <Heading level={2} size="level-3" className="ams-mb--xs">
            Wie Amsterdam zegt, zegt kunst en cultuur
          </Heading>
          <Paragraph className="ams-mb--sm">
            Van de musea en culturele broedplaatsen tot de stadsparken en de met kunst versierde gevels van de
            grachtenpanden. Kunst en cultuur is altijd en overal in Amsterdam. En het houdt niet op als de zon
            ondergaat: ook de clubscene is van culturele waarde voor de stad.
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
          <Column gap="extra-large">
            <Column gap="extra-small">
              <Heading level={2} size="level-3">
                Archieven en collecties
              </Heading>
              <LinkList>
                <LinkList.Link href="#">Stadsarchief</LinkList.Link>
                <LinkList.Link href="#">Collectie van gemeente Amsterdam</LinkList.Link>
              </LinkList>
            </Column>
            <Column gap="extra-small">
              <Heading level={2} size="level-3">
                Bekijk op de kaart
              </Heading>
              <LinkList>
                <LinkList.Link href="#">Monumenten</LinkList.Link>
                <LinkList.Link href="#">Beschermde stads- en dorpsgezichten</LinkList.Link>
                <LinkList.Link href="#">Archeologische vindplaatsen</LinkList.Link>
              </LinkList>
            </Column>
            <Column gap="extra-small">
              <Heading level={2} size="level-3">
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
            </Column>
          </Column>
        </Grid.Cell>
      </Grid>
    </>
  )
}

export default KunstEnCultuur
