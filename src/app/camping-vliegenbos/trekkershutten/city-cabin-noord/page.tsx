'use client'

import {
  Breadcrumb,
  Grid,
  Heading,
  ImageSlider,
  Paragraph,
  StandaloneLink,
  Tabs,
  UnorderedList,
} from '@amsterdam/design-system-react'

import cityCamperImage1 from '../../_assets/city-cabin-noord-1.jpeg'
import cityCamperImage2 from '../../_assets/city-cabin-noord-2.jpeg'
import cityCamperImage3 from '../../_assets/city-cabin-noord-3.jpg'
import cityCamperImage4 from '../../_assets/city-cabin-noord-4.jpeg'

const images = [cityCamperImage1, cityCamperImage2, cityCamperImage3, cityCamperImage4]
const reformattedImages = images.map((image) => ({
  alt: '',
  src: image.src,
}))

const goodToKnow = [
  'De trekkershutten zijn geschikt voor 4 personen. Neem contact op met de receptie als je met 5 personen wil komen',
  'Parkeerplaatsen zijn beperkt en niet te reserveren. We raden aan om niet met de auto te komen, tenzij het niet anders kan. Er is goed openbaar vervoer naar het centrum.',
  'Bij de trekkershut zijn ook schoonmaakspullen. Als je de hut niet schoon achterlaat, rekenen we schoonmaakkosten.',
  'Roken is niet toegestaan in de trekkershutten.',
  'Huisdieren zijn niet toegestaan.',
]

const arrivalDeparture = ['Aankomst vanaf 15.00 uur', 'Vertrek tot 11.00 uur']

export default function CityCabinAmsterdam() {
  return (
    <>
      <Grid paddingBottom="large" gapVertical="none">
        <Grid.Cell
          span={{ narrow: 4, medium: 6, wide: 7 }}
          start={{ narrow: 1, medium: 2, wide: 3 }}
          className="ams-mb-m"
        >
          <Breadcrumb>
            <Breadcrumb.Link href="/camping-vliegenbos/">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="/camping-vliegenbos/trekkershutten">Trekkershutten</Breadcrumb.Link>
          </Breadcrumb>
          <Heading level={1} size="level-2">
            City Cabin 'Noord'
          </Heading>
          <Paragraph>Deze unieke blauwe trekkershut staat op stelten.</Paragraph>
          <StandaloneLink href="/camping-vliegenbos/reserveren">Reserveer online</StandaloneLink>
        </Grid.Cell>
        <Grid.Cell span="all" className="ams-mb-l">
          <ImageSlider controls images={reformattedImages} />
        </Grid.Cell>
        <Grid.Cell span="all">
          <Grid>
            <Grid.Cell span={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1758008947400!6m8!1m7!1sCAoSLEFGMVFpcE9QR0N0TGN2TlFZWFBTZ3B3dWRwYXB0Z2JwcDg4djBFOUxQd01s!2m2!1d52.39107630174996!2d4.930939843785731!3f270.11!4f0!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Grid.Cell>
            <Grid.Cell span={6}>
              <UnorderedList>
                <UnorderedList.Item>1 tweepersoonsbed en 1 stapelbed inclusief beddengoed</UnorderedList.Item>
                <UnorderedList.Item>Een ingerichte Kitchenette met minikoelkast</UnorderedList.Item>
                <UnorderedList.Item>Een eigen toilet</UnorderedList.Item>
                <UnorderedList.Item>Tafel met een hoekbank en 2 krukjes</UnorderedList.Item>
                <UnorderedList.Item>Vloerverwarming</UnorderedList.Item>
                <UnorderedList.Item>Veranda</UnorderedList.Item>
              </UnorderedList>
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Tabs>
            <Tabs.List>
              <Tabs.Button aria-controls="goed-om-te-weten">Goed om te weten</Tabs.Button>
              <Tabs.Button aria-controls="aankomst-en-vertrek">Aankomst en vertrek</Tabs.Button>
            </Tabs.List>
            <Tabs.Panel id="goed-om-te-weten">
              <UnorderedList>
                {goodToKnow.map((item, index) => (
                  <UnorderedList.Item key={`${index}-goodtoknow-item`}>{item}</UnorderedList.Item>
                ))}
              </UnorderedList>
            </Tabs.Panel>
            <Tabs.Panel id="aankomst-en-vertrek">
              <UnorderedList>
                {arrivalDeparture.map((item, index) => (
                  <UnorderedList.Item key={`${index}-arrival-departure-item`}>{item}</UnorderedList.Item>
                ))}
              </UnorderedList>
            </Tabs.Panel>
          </Tabs>
        </Grid.Cell>
      </Grid>
    </>
  )
}
