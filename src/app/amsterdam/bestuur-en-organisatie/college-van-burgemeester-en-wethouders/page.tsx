'use client'

import {
  Breadcrumb,
  Card,
  Grid,
  GridColumnNumber,
  Heading,
  PageHeading,
  Paragraph,
} from '@amsterdam/design-system-react'
import NextImage, { type StaticImageData } from 'next/image'
import NextLink from 'next/link'

import municipalExecutive from '../../_assets/municipal-executive.jpg'
import municipalExecutiveDeJager from '../../_assets/municipal-executive-de-jager.jpg'
import municipalExecutiveGrootWassink from '../../_assets/municipal-executive-groot-wassink.jpg'
import municipalExecutiveHalsema from '../../_assets/municipal-executive-halsema.jpg'
import municipalExecutiveMbarki from '../../_assets/municipal-executive-mbarki.jpg'
import municipalExecutiveMeliani from '../../_assets/municipal-executive-meliani.jpg'
import municipalExecutiveMoorman from '../../_assets/municipal-executive-moorman.jpg'
import municipalExecutivePels from '../../_assets/municipal-executive-pels.jpg'
import municipalExecutiveScholtes from '../../_assets/municipal-executive-scholtes.jpg'
import municipalExecutiveTeesink from '../../_assets/municipal-executive-teesink.jpg'
import municipalExecutiveVanBuren from '../../_assets/municipal-executive-van-buren.jpg'
import municipalExecutiveVanDantzig from '../../_assets/municipal-executive-van-dantzig.jpg'
import municipalExecutiveVanDerHorst from '../../_assets/municipal-executive-van-der-horst.jpg'

const persons: Array<PersonProps> = [
  {
    fullName: 'Femke Halsema',
    image: municipalExecutiveHalsema,
    jobTitle: 'Burgemeester',
  },
  {
    fullName: 'Marjolein Moorman',
    image: municipalExecutiveMoorman,
  },
  {
    fullName: 'Rutger Groot Wassink',
    image: municipalExecutiveGrootWassink,
  },
  {
    fullName: 'Reinier van Dantzig',
    image: municipalExecutiveVanDantzig,
  },
  {
    fullName: 'Sofyan Mbarki',
    image: municipalExecutiveMbarki,
  },
  {
    fullName: 'Touria Meliani',
    image: municipalExecutiveMeliani,
  },
  {
    fullName: 'Melanie van der Horst',
    image: municipalExecutiveVanDerHorst,
  },
  {
    fullName: 'Hester van Buren',
    image: municipalExecutiveVanBuren,
  },
  {
    fullName: 'Zita Pels',
    image: municipalExecutivePels,
  },
  {
    fullName: 'Alexander Scholtes',
    image: municipalExecutiveScholtes,
  },
  {
    fullName: 'Dirk de Jager',
    image: municipalExecutiveDeJager,
  },
  {
    fullName: 'Peter Teesink',
    image: municipalExecutiveTeesink,
    jobTitle: 'Gemeentesecretaris',
  },
]

type PersonProps = {
  fullName: string
  image: StaticImageData
  jobTitle?: string
}

function PersonCardCell({ fullName, image, index, jobTitle }: PersonProps & { index: number }) {
  return (
    <Grid.Cell
      span={3}
      start={{ narrow: 1, medium: index % 2 === 0 ? 2 : 5, wide: ((index % 4) * 3 + 1) as GridColumnNumber }}
    >
      <Card>
        <NextImage alt="" className="ams-image ams-card__image" src={image} />
        <Card.Heading level={3} size="level-4">
          <Card.Link href="#">{fullName}</Card.Link>
        </Card.Heading>
        <Paragraph>{jobTitle ?? 'Wethouder'}</Paragraph>
      </Card>
    </Grid.Cell>
  )
}

PersonCardCell.defaultProps = {
  jobTitle: 'Wethouder',
}

export default function CollegeVanBurgemeesterEnWethouders() {
  return (
    <>
      <Grid paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
          <Breadcrumb>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <Breadcrumb.Link>Home</Breadcrumb.Link>
            </NextLink>
            <NextLink href="/amsterdam/bestuur-en-organisatie" legacyBehavior passHref>
              <Breadcrumb.Link>Bestuur en Organisatie</Breadcrumb.Link>
            </NextLink>
          </Breadcrumb>
          <PageHeading className="ams-mb-m">College van burgemeester en wethouders</PageHeading>
          <Paragraph size="large">Het dagelijks bestuur van onze gemeente uitgebreid in beeld.</Paragraph>
        </Grid.Cell>
      </Grid>
      <NextImage alt="" className="ams-image ams-aspect-ratio-16-5" src={municipalExecutive} />
      <Grid paddingVertical="2x-large" gapVertical="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 12 }} start={{ narrow: 1, medium: 2, wide: 1 }}>
          <Heading className="ams-mb-s" level={2}>
            Burgemeester en wethouders
          </Heading>
        </Grid.Cell>
        {persons.map(({ fullName, image, jobTitle }, index) => (
          <PersonCardCell fullName={fullName} image={image} index={index} jobTitle={jobTitle} key={fullName} />
        ))}
      </Grid>
    </>
  )
}
