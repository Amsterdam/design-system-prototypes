'use client'

import { Breadcrumb, Column, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import fatbikesImage from '../_assets/fatbikes.jpg'

function Nieuws() {
  return (
    <>
      <Grid>
        <Grid.Cell span="all">
          <Breadcrumb>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <Breadcrumb.Link>Home</Breadcrumb.Link>
            </NextLink>
            <Breadcrumb.Link href="#">Nieuws</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <article>
        <Grid paddingBottom="medium">
          {/* TODO: this looks off on medium screen widths, should probably be full width */}
          <Grid.Cell span={6}>
            <Heading className="ams-mb--xs">Maatregelen tegen overlast fatbikes</Heading>
            <Paragraph>8 november 2023</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={6} />
          <Grid.Cell span={6}>
            <Paragraph size="large">
              Door de opkomst van de elektrische fiets is het fietsverkeer chaotischer geworden. Onder kinderen en
              tieners is de fatbike op het moment erg populair. Fatbikes zijn vaak opgevoerd en te vergelijken met
              brommers. Amsterdam en andere gemeenten zijn bezorgd over de verkeers&shy;veiligheid en vragen de minister
              om maatregelen.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell span={6}>
            <NextImage alt="" className="ams-image" src={fatbikesImage} />
          </Grid.Cell>
        </Grid>
        <Grid paddingBottom="medium">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            <Column>
              <Paragraph>
                Mensen voelen zich steeds onveiliger op het fietspad door de toenemende drukte en snelheidsverschillen.
                Ook stijgt het aantal fietsongelukken al jaren. We moeten daarom nu in actie komen.
              </Paragraph>
              <Column as="section" gap="extra-small">
                <Heading level={2}>Gevaar</Heading>
                <Paragraph>
                  Er zijn fatbikes die een groter vermogen hebben dan een e-bike en waar je makkelijk een snelheid mee
                  bereikt van boven de 25 kilometer per uur. De bestuurder hoeft nauwelijks te trappen. Ook jonge
                  kinderen rijden op fatbikes. Ze zijn zich vaak niet bewust van het gevaar dat ze zelf lopen of kunnen
                  veroorzaken. En als je fatbike is opgevoerd, ben je zelfs als je een verzekering hebt, niet verzekerd
                  bij een ongeval.
                </Paragraph>
              </Column>
              <Column as="section" gap="extra-small">
                <Heading level={2}>Handhaven</Heading>
                <Paragraph>
                  De politie controleert op overtredingen met opgevoerde/illegale e-bikes en fatbikes. Er worden boetes
                  uitgedeeld en bij grove overtredingen neemt de politie fatbikes in beslag.
                </Paragraph>
              </Column>
              <Column as="section" gap="extra-small">
                <Heading level={2}>Voorlichting</Heading>
                <Paragraph>
                  We vermoeden dat een deel van de fatbike-bestuurders niet op de hoogte is van de regels en risico’s.
                  Daarom gaan we hier de komende tijd meer aandacht aan besteden, onder andere door ouders te informeren
                  via scholen. Het onderwerp gaat ook een plekje krijgen binnen het verkeersonderwijs. We gaan het met
                  leerlingen hebben over illegale en opgevoerde fatbikes en de gevolgen van het hiermee rijden op de
                  openbare weg.
                </Paragraph>
              </Column>
              <Column as="section" gap="extra-small">
                <Heading level={2}>Fietshelm</Heading>
                <Paragraph>
                  Fietsen kan ook veiliger worden als fietsers een helm dragen. Het risico op (zwaar) hoofdletsel neemt
                  daarmee af. Maar uit onderzoek blijkt dat het instellen van een helmplicht voor (e-)fietsers een
                  negatief effect heeft op het fietsgebruik en daardoor op de gezondheid. Een helm mag ook nooit de
                  enige oplossing zijn en afleiden van effectievere verkeersveiligheids&shy;maatregelen. Amsterdam is
                  daarom geen voorstander van een helmplicht.
                </Paragraph>
                <Paragraph>
                  Wel zien we kansen om het op vrijwillige basis dragen van een fietshelm te stimuleren, vooral onder
                  kinderen en ouderen. Het Rijk werkt aan een nieuw Meerjarenplan Fietsveiligheid met daarin een
                  landelijke fietshelm&shy;campagne.
                </Paragraph>
              </Column>
              <Column as="section" gap="extra-small">
                <Heading level={2}>Andere maatregelen</Heading>
                <Paragraph>
                  Amsterdam heeft samen met 20 andere gemeenten een brief gestuurd naar de minister. We vragen hierin
                  naar een concreet pakket aan maatregelen voor de korte termijn. Daarbij denken wij bijvoorbeeld aan
                  een landelijk verbod op de verkoop van opvoersetjes. En aan een minimumleeftijd voor het gebruik van
                  e-bikes.
                </Paragraph>
              </Column>
            </Column>
          </Grid.Cell>
        </Grid>
      </article>
    </>
  )
}

export default Nieuws
