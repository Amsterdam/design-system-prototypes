'use client'

import {
  Alert,
  Breadcrumb,
  Breakout,
  DescriptionList,
  Grid,
  Heading,
  Image,
  Paragraph,
  Spotlight,
  StandaloneLink,
  Tabs,
  UnorderedList,
} from '@amsterdam/design-system-react'

import campersAndCaravansPicture from '../_assets/campers-en-caravans.jpg'

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
              <Heading level={1} size="level-2">
                Campers en caravans
              </Heading>
              <Paragraph>
                Camping Vliegenbos heeft halfverharde plekken voor campers, kampeerauto's, caravans en vouwwagens. Op de
                camping is ook een servicepunt voor drinkwater, vuilwater en chemisch toilet.
              </Paragraph>
            </Grid.Cell>
          </Grid>
        </Grid.Cell>
      </Grid>
      <Breakout paddingVertical="large" className="ams-mb-xl" as="section">
        <Breakout.Cell colSpan="all" has="spotlight" rowSpan={2} rowStart={2}>
          <Spotlight />
        </Breakout.Cell>
        <Breakout.Cell colSpan="all" has="figure" rowSpan={2} rowStart={1}>
          <Image alt="" src={campersAndCaravansPicture.src} />
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
            Online reserveren kan voor een verblijf tot maximaal 7 nachten. Wil je voor een langere periode reserveren,
            neem dan contact op met de receptie. Bezoekers mogen in totaal maximaal 21 dagen op de camping verblijven.
          </Paragraph>
          <StandaloneLink color="inverse" className="ams-mb-m" href="/camping-vliegenbos/zoek-en-boek">
            Online reserveren
          </StandaloneLink>
          <Alert headingLevel={2} severity="warning" heading="Milieuzone">
            <Paragraph>
              Camping Vliegenbos ligt binnen een milieuzone. Campers op diesel hebben alleen toegang met emissieklasse 5
              of hoger. Heeft je camper een lagere emissieklasse maar wel een SA-registratie, dan kun je voor bezoek aan
              de camping een dagontheffing aanvragen.
              <StandaloneLink
                href="https://www.amsterdam.nl/verkeer-vervoer/milieuzone-uitstootvrijezone/campers-kampeerwagens/#h40ee67d8-c362-47f1-9603-c3feaa9883a7"
                target="_blank"
              >
                Meer over de milieuzone en de dagontheffing
              </StandaloneLink>
            </Paragraph>
          </Alert>
        </Breakout.Cell>
      </Breakout>
      <Grid as="section" paddingVertical="large">
        <Grid.Cell
          span={{ narrow: 4, medium: 5, wide: 7 }}
          start={{ narrow: 1, medium: 2, wide: 3 }}
          className="ams-mb-l"
        >
          <Heading className="ams-mb-s" level={2}>
            Onze camper- en caravanplekken
          </Heading>
          <Paragraph className="ams-mb-s">
            We maken geen onderscheid tussen een camper, caravan of vouwwagen. U mag elke plek kiezen, als uw camper of
            combinatie maar de juiste lengte heeft.
          </Paragraph>
          <DescriptionList className="ams-mb-m">
            <DescriptionList.Term>Auto- of camperplek Basic</DescriptionList.Term>
            <DescriptionList.Description>
              <UnorderedList>
                <UnorderedList.Item>Totale lengte tot 5 meter.</UnorderedList.Item>
                <UnorderedList.Item>Geen voorzieningen.</UnorderedList.Item>
              </UnorderedList>
            </DescriptionList.Description>
            <DescriptionList.Term>Camperplek Compact</DescriptionList.Term>
            <DescriptionList.Description>
              <UnorderedList>
                <UnorderedList.Item>Totale lengte tot 6 meter.</UnorderedList.Item>
                <UnorderedList.Item>Met 10 ampère stroom.</UnorderedList.Item>
              </UnorderedList>
            </DescriptionList.Description>
            <DescriptionList.Term>Camperplek Comfort</DescriptionList.Term>
            <DescriptionList.Description>
              <UnorderedList>
                <UnorderedList.Item>Totale lengte tot 8 meter.</UnorderedList.Item>
                <UnorderedList.Item>Met 10 ampère stroom.</UnorderedList.Item>
              </UnorderedList>
            </DescriptionList.Description>
            <DescriptionList.Term>Camperplek Comfort Large</DescriptionList.Term>
            <DescriptionList.Description>
              <UnorderedList>
                <UnorderedList.Item>Totale lengte tot 10 meter.</UnorderedList.Item>
                <UnorderedList.Item>Met 10 ampère stroom.</UnorderedList.Item>
              </UnorderedList>
            </DescriptionList.Description>
            <DescriptionList.Term>Camperplek Deluxe</DescriptionList.Term>
            <DescriptionList.Description>
              <UnorderedList>
                <UnorderedList.Item>Totale lengte tot 6 meter.</UnorderedList.Item>
                <UnorderedList.Item>Met 10 ampère stroom, drinkwater, en vuilwaterafvoer.</UnorderedList.Item>
              </UnorderedList>
            </DescriptionList.Description>
            <DescriptionList.Term>Camperplek- of camperplek Deluxe XL</DescriptionList.Term>
            <DescriptionList.Description>
              <UnorderedList>
                <UnorderedList.Item>Totale lengte tot 12 meter.</UnorderedList.Item>
                <UnorderedList.Item>Met 10 ampère stroom, drinkwater, en vuilwaterafvoer.</UnorderedList.Item>
              </UnorderedList>
            </DescriptionList.Description>
          </DescriptionList>
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
                  Je moet 18 jaar of ouder zijn om een camper- of caravanplek te boeken.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Je kunt CEE-adapters lenen bij de receptie. Hiervoor betaal je een borg.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  <StandaloneLink href="https://assets.amsterdam.nl/publish/pages/870842/" target="_blank">
                    Dagontheffing voor campers en kampeerwagens
                  </StandaloneLink>
                </UnorderedList.Item>
              </UnorderedList>
            </Tabs.Panel>
            <Tabs.Panel id="aankomst-en-vertrek">
              <Heading level={2} size="level-4" className="ams-mb-s">
                Aankomst en vertrek
              </Heading>
              <UnorderedList>
                <UnorderedList.Item>Aankomst vanaf 13.00 uur</UnorderedList.Item>
                <UnorderedList.Item>Vertrek tussen 08.00 uur en 11.00 uur</UnorderedList.Item>
              </UnorderedList>
            </Tabs.Panel>
          </Tabs>
        </Grid.Cell>
      </Grid>
    </>
  )
}
