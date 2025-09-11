'use client'

import {
  Alert,
  Breadcrumb,
  Column,
  DescriptionList,
  Grid,
  Heading,
  Image,
  ImageSlider,
  Link,
  Paragraph,
  StandaloneLink,
  UnorderedList,
} from '@amsterdam/design-system-react'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { TommyEndpointResponse } from './types'

function extractListItems(htmlString: string) {
  return [
    ...document
      .createElement('div')
      .appendChild(Object.assign(document.createElement('div'), { innerHTML: htmlString }))
      .querySelectorAll('li'),
  ].map((li) => li.textContent.trim())
}

export default function Trekkershutten() {
  return (
    <Suspense>
      <InnerPage></InnerPage>
    </Suspense>
  )
}

const InnerPage = () => {
  const [data, setData] = useState<TommyEndpointResponse['data'][0]['metadata']['accommodations'][0] | null>(null)
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const searchId = searchParams.get('id')

  const authKey = process.env.NEXT_PUBLIC_TOMMY_BOOKING_SUPPORT

  useEffect(() => {
    fetch('https://tommybookingsupport.com/api/widget/metadata', {
      headers: {
        authentication: authKey,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const result = response as TommyEndpointResponse
        const filteredAccomodation = result.data
          .at(0)
          .metadata.accommodations.find((accomodation) => accomodation.id === parseInt(searchId))
        setData(filteredAccomodation || null)
        setLoading(false)
      })
  }, [])

  if (loading)
    return (
      <Grid paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading level={1}>Zoeken...</Heading>
          <Paragraph>We zijn even op zoek...</Paragraph>
        </Grid.Cell>
      </Grid>
    )

  if (!data) {
    return (
      <Grid paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Alert severity="error" heading="De accommodatie is niet gevonden" headingLevel={1}>
            <Paragraph>Er is iets mis gegaan</Paragraph>
            <StandaloneLink href="/camping-vliegenbos">Terug naar start</StandaloneLink>
          </Alert>
        </Grid.Cell>
      </Grid>
    )
  }

  const regex = /href="([^"]+)"/i
  const takeALookLink = data.description.nl.match(regex)

  const listItems = extractListItems(data.description.nl)
  listItems.at(-1).match('kijkje te nemen') && listItems.pop()

  const reformattedImages = data.images.map((image) => ({
    alt: '',
    src: image.original,
  }))

  console.log(reformattedImages)

  return (
    <Grid gapVertical="large" paddingBottom="large" as="section">
      <Grid.Cell span="all">
        <Grid>
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
            <Breadcrumb>
              <Breadcrumb.Link href="/camping-vliegenbos">Home</Breadcrumb.Link>
              <Breadcrumb.Link href="/camping-vliegenbos/zoek-en-boek">Zoek en boek</Breadcrumb.Link>
            </Breadcrumb>
            <Heading level={1} size="level-2" className="ams-mb-s">
              {data.name.nl}
            </Heading>
            <DescriptionList>
              <DescriptionList.Term>Minimum aantal personen:</DescriptionList.Term>
              <DescriptionList.Description>{data.minimumPersons}</DescriptionList.Description>
              <DescriptionList.Term>Maximaal aantal personen</DescriptionList.Term>
              <DescriptionList.Description>{data.maximumPersons}</DescriptionList.Description>
              <DescriptionList.Term>Minimum aantal dagen</DescriptionList.Term>
              <DescriptionList.Description>{data.minimumDays}</DescriptionList.Description>
              <DescriptionList.Term>Maximaal aantal dagen</DescriptionList.Term>
              <DescriptionList.Description>
                {data.maximumDays === 0 ? 'Niet van toepassing' : data.maximumDays}
              </DescriptionList.Description>
            </DescriptionList>
          </Grid.Cell>
        </Grid>
      </Grid.Cell>
      <Grid.Cell span="all">
        {reformattedImages && data.images.length > 1 ? (
          <ImageSlider controls images={reformattedImages} />
        ) : (
          <Image src={data.images.at(0).original} alt="" />
        )}
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Column gap="small" className="ams-mb-l">
          <UnorderedList>
            {listItems.map((item, idx) => (
              <UnorderedList.Item key={`${item}-${idx.toString()}`}>{item}</UnorderedList.Item>
            ))}
            {takeALookLink && (
              <UnorderedList.Item>
                Klik{' '}
                <Link target="_blank" href={takeALookLink.at(1)}>
                  hier
                </Link>{' '}
                om een kijkje te nemen in de cabin
              </UnorderedList.Item>
            )}
          </UnorderedList>
        </Column>
        <StandaloneLink href="/camping-vliegenbos/reserveren">Reserveren</StandaloneLink>
      </Grid.Cell>
    </Grid>
  )
}
