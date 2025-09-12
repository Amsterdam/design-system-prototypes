'use client'

import {
  Breadcrumb,
  Breakout,
  Grid,
  Heading,
  Image,
  Paragraph,
  Spotlight,
  StandaloneLink,
  Tabs,
  UnorderedList,
} from '@amsterdam/design-system-react'

import tentenPicture from '../_assets/tenten-picture.jpg'

export default function Tenten() {
  return (
    <>
      <Grid gapVertical="large" as="section">
        <Grid.Cell span="all">
          <Grid>
            <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
              <Breadcrumb>
                <Breadcrumb.Link href="/camping-vliegenbos/">Home</Breadcrumb.Link>
              </Breadcrumb>
              <Heading level={1}>Tenten</Heading>
              <Paragraph>
                Kamperen dichtbij het centrum van Amsterdam? Kom naar camping Vliegenbos en je hebt het beste van 2
                werelden. Stad en natuur! De camping is open voor tenten tussen april en oktober.
              </Paragraph>
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
      <Breakout paddingVertical="large" className="ams-mb-l" as="section">
        <Breakout.Cell colSpan="all" has="spotlight" rowSpan={2} rowStart={2}>
          <Spotlight color="green" />
        </Breakout.Cell>
        <Breakout.Cell colSpan="all" has="figure" rowSpan={2} rowStart={1}>
          <Image alt="" src={tentenPicture.src} />
        </Breakout.Cell>
        <Breakout.Cell
          colSpan={{
            medium: 5,
            narrow: 4,
            wide: 7,
          }}
          colStart={{
            medium: 2,
            narrow: 1,
            wide: 3,
          }}
          rowStart={3}
        >
          <Paragraph color="inverse" className="ams-mb-s">
            Je moet 16 jaar of ouder zijn om een plek voor een tent te boeken. Je mag alleen in een tent slapen. Een
            hangmat onder een zeil mag bijvoorbeeld niet. Je moet per tent apart een plek reserveren.
          </Paragraph>
          <Paragraph color="inverse">
            Online reserveren kan voor een verblijf tot maximaal 7 nachten. Wil je voor een langere periode reserveren,
            neem dan contact op met de receptie. Bezoekers mogen in totaal maximaal 21 dagen op de camping verblijven.
          </Paragraph>
          <StandaloneLink color="inverse" className="ams-mb-m" href="/camping-vliegenbos/zoek-en-boek">
            Online reserveren
          </StandaloneLink>
        </Breakout.Cell>
      </Breakout>
      <Grid gapVertical="large" as="section">
        <Grid.Cell
          span={{ narrow: 4, medium: 5, wide: 7 }}
          start={{ narrow: 1, medium: 2, wide: 3 }}
          className="ams-mb-l"
        >
          <Tabs className="ams-mb-m">
            <Tabs.List>
              <Tabs.Button aria-controls="goed-om-te-weten">Goed om te weten</Tabs.Button>
              <Tabs.Button aria-controls="aankomst-en-vertrek">Aankomst en vertrek</Tabs.Button>
            </Tabs.List>
            <Tabs.Panel id="goed-om-te-weten">
              <Heading level={2} size="level-4" className="ams-mb-s">
                Goed om te weten
              </Heading>
              <UnorderedList>
                <UnorderedList.Item>
                  We hebben geen afgebakende plekken, je mag zelf een plekje op het grasveld kiezen. De maximale tent
                  grote is 3mx3m.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Er is een buitenkeuken aanwezig. Bestek, pannen en borden moet je zelf meenemen.
                </UnorderedList.Item>
                <UnorderedList.Item>Voertuigen zijn niet toegestaan op het tentveld.</UnorderedList.Item>
                <UnorderedList.Item>
                  Er is geen elektriciteit op het tentenveld. Je kunt kleine elektrische apparaten gratis opladen bij de
                  receptie. Heb je om medische reden elektriciteit nodig, stuur ons dan een aanvraag per mail.
                </UnorderedList.Item>
                <UnorderedList.Item>Huisdieren zijn niet toegestaan in een tent.</UnorderedList.Item>
                <UnorderedList.Item>Feesttenten zijn niet teogestaan.</UnorderedList.Item>
                <UnorderedList.Item>
                  Het maximaal aantal personen per tent is 4. Voor een 3mx3m tent is er een minimum van 3 personen.
                </UnorderedList.Item>
              </UnorderedList>
            </Tabs.Panel>
            <Tabs.Panel id="aankomst-en-vertrek">
              <Heading level={2} size="level-4" className="ams-mb-s">
                Aankomst en vertrek
              </Heading>
              <UnorderedList>
                <UnorderedList.Item>Aankomst 24 uur per dag</UnorderedList.Item>
                <UnorderedList.Item>Vertrek voor 11.00 uur</UnorderedList.Item>
              </UnorderedList>
            </Tabs.Panel>
          </Tabs>
          <Heading level={2} size="level-3">
            Zie ook
          </Heading>
          <StandaloneLink target="_blank" href="https://amsterdam.nl/paspoort">
            https://amsterdam.nl/paspoort
          </StandaloneLink>
        </Grid.Cell>
      </Grid>
    </>
  )
}
