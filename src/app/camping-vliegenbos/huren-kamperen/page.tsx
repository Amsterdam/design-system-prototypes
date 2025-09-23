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
  LinkList,
  Paragraph,
  StandaloneLink,
  UnorderedList,
} from '@amsterdam/design-system-react'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { TommyEndpointResponse } from './types'
import formatPath from '../../../formatPath'
import PageLayout from '../trekkershutten/components/PageLayout'

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
            <StandaloneLink href={formatPath('/camping-vliegenbos')}>Terug naar start</StandaloneLink>
          </Alert>
        </Grid.Cell>
      </Grid>
    )
  }

  // NOTE: This regex is needed to extract the href link, so we can format it in our own Link-component
  const regex = /href="([^"]+)"/i
  const takeALookLink = data.description.nl.match(regex)

  const listItems = extractListItems(data.description.nl)
  listItems.at(-1).match('kijkje te nemen') && listItems.pop()

  const reformattedImages = data.images.map((image) => ({
    alt: '',
    src: image.original,
  }))

  return (
    <PageLayout
      type={data.name.nl.includes('City Cabin') ? 'hut' : 'kamperen'}
      heading={data.name.nl}
      paragraph={`Deze unieke ${data.name.nl} staat voor je klaar.`}
      images={reformattedImages}
      items={listItems}
      from="search"
      takeALookLink={takeALookLink.at(1)}
    />
  )
}
