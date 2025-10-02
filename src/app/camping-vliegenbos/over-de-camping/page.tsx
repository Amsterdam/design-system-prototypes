'use client'

import {
  Accordion,
  Alert,
  Breadcrumb,
  Grid,
  Heading,
  Link,
  LinkList,
  Paragraph,
  Spotlight,
  StandaloneLink,
  Tabs,
  UnorderedList,
} from '@amsterdam/design-system-react'
import NextImage from 'next/image'

import formatPath from '../../../utils/formatPath'
import pictureCampingImage from '../_assets/camping-vliegenbos-picture.jpg'
import mapCampingImage from '../_assets/map_camping.jpg'

export default function OverDeCamping() {
  return (
    <>
      <Grid>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }}>
          <Breadcrumb className="ams-mb-m">
            <Breadcrumb.Link href={formatPath('/camping-vliegenbos')}>Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid as="section" paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Heading className="ams-mb-s" level={1}>
            Over camping Vliegenbos
          </Heading>
          <Paragraph>
            Op zoek naar een sfeervolle camping in Amsterdam? Camping Vliegenbos ligt op 15 minuten lopen van de gratis
            veerpont naar het centrum van Amsterdam. Ook fiets je zo naar de stille polders van Waterland. We hebben
            plekken voor tenten, campers en caravans. Ook verhuren we trekkershutten.
          </Paragraph>
        </Grid.Cell>
      </Grid>
      <NextImage alt="" className="ams-image ams-aspect-ratio-16-5" src={pictureCampingImage} />
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Tabs>
            <Tabs.List>
              <Tabs.Button aria-controls="Openingstijden">Openingstijden, en inchecken</Tabs.Button>
              <Tabs.Button aria-controls="Faciliteiten">Faciliteiten</Tabs.Button>
              <Tabs.Button aria-controls="Plattegrond">Plattegrond</Tabs.Button>
            </Tabs.List>
            <Tabs.Panel id="Plattegrond">
              <Heading className="ams-mb-s" level={2}>
                Plattegrond
              </Heading>
              <NextImage alt="Plattegrond van camping Vliegenbos" className="ams-image" src={mapCampingImage} />
            </Tabs.Panel>
            <Tabs.Panel id="Openingstijden">
              <Heading className="ams-mb-s" level={2}>
                Openingstijden en inchecken
              </Heading>
              <Paragraph className="ams-mb-m">
                De receptie is open van 08.00 uur tot 22.00 uur. Er is een nachtportier. De ingang voor voertuigen is ’s
                nachts gesloten. Te voet of met de fiets kun je 24 uur per dag het terrein op.
              </Paragraph>
              <UnorderedList>
                <UnorderedList.Item>Met een tent kun je op elk moment inchecken.</UnorderedList.Item>
                <UnorderedList.Item>Campers en caravans kunnen vanaf 13:00 uur inchecken.</UnorderedList.Item>
                <UnorderedList.Item>Voor de trekhutten kun je vanaf 15:00 uur inchecken.</UnorderedList.Item>
                <UnorderedList.Item>De uitchecktijd is 11:00 uur.</UnorderedList.Item>
              </UnorderedList>
            </Tabs.Panel>
            <Tabs.Panel id="Faciliteiten">
              <Heading className="ams-mb-s" level={2}>
                Faciliteiten
              </Heading>
              <Heading className="ams-mb-xs" level={3}>
                Sanitair
              </Heading>
              <Paragraph className="ams-mb-l">
                Je hebt geen douchemuntjes nodig. De douches zijn geopend van 06.00 uur - 00.00 uur. Er is ook sanitair
                voor rolstoelebruikers. Bij de receptie kun je hiervoor een sleutel vragen.
              </Paragraph>
              <Heading className="ams-mb-xs" level={3}>
                WiFi
              </Heading>
              <Paragraph className="ams-mb-l">
                Er is gratis WiFi op het terrein van de camping. Het wachtwoord vraag je bij de receptie.
              </Paragraph>
              <Heading className="ams-mb-xs" level={3}>
                Restaurant
              </Heading>
              <Paragraph className="ams-mb-m">
                Het restaurant is in het hoogseizoen elke dag geopend van 08:00 uur tot 22:00 uur. Tijdens het
                laagseizoen zijn de openingstijden van 08:00 uur tot 11:00 uur in het weekend.
              </Paragraph>
              <StandaloneLink
                className="ams-mb-l"
                href="https://theroundaboutamste.wixsite.com/mijnsite"
                target="_blank"
              >
                Meer over het restaurant
              </StandaloneLink>
              <Heading className="ams-mb-xs" level={3}>
                Wasserette
              </Heading>
              <Paragraph className="ams-mb-l">
                Op onze camping kun je ook de was doen. Muntjes voor de wasserette koop je bij de receptie.
              </Paragraph>
              <Heading className="ams-mb-xs" level={3}>
                Keuken
              </Heading>
              <Paragraph className="ams-mb-l">
                De buiten campingkeuken heeft een kookgelegenheid en een gemeenschappelijke koelkast. Bestek, pannen en
                borden moet je zelf meenemen. De buiten keuken is geopend vanaf maart tot oktober.
              </Paragraph>
              <Heading className="ams-mb-xs" level={3}>
                Fietsen
              </Heading>
              <Paragraph className="ams-mb-l">
                Op de camping kun je fietsen huren van TIP Amsterdam Noord. Je kunt een reservering maken via de website
                en de ophaal locatie en voorkeuren doorgeven. Voor groepen boven de 15 personen of voor speciale
                aanvragen kun je contact opnemen via info@tipamsterdamnoord.nl
              </Paragraph>
              <Heading className="ams-mb-xs" level={3}>
                Bagagedepot
              </Heading>
              <Paragraph className="ams-mb-l">
                Op de dag van vertrek kun je jouw bagage tijdelijk kwijt in ons bagagedepot. Vraag ernaar bij de
                receptie.
              </Paragraph>
              <Heading className="ams-mb-xs" level={3}>
                Oplaadpunt elektrische apparaten
              </Heading>
              <Paragraph className="ams-mb-l">
                Kleine elektronische apparaten kun je gratis opladen bij de receptie.
              </Paragraph>
              <Heading className="ams-mb-xs" level={3}>
                Honden
              </Heading>
              <Paragraph className="ams-mb-l">
                Honden zijn toegestaan in campers of caravans. Wij rekenen per hond €7,50 per nacht. In tenten en
                trekkershutten zijn honden niet toegestaan.
              </Paragraph>
              <Heading className="ams-mb-xs" level={3}>
                Parkeren
              </Heading>
              <Paragraph className="ams-mb-m">
                De camping heeft niet veel parkeerplekken en je kunt deze niet reserveren. Als er geen plek is op de
                camping, kun je in de buurt betaald parkeren. De prijs voor een parkeerplaats is 10 euro per nacht.
              </Paragraph>
              <StandaloneLink href="https://www.parkeren-amsterdam.com/noord" target="_blank">
                Meer over parkeren in Amsterdam Noord
              </StandaloneLink>
            </Tabs.Panel>
          </Tabs>
        </Grid.Cell>
      </Grid>
      <Spotlight color="azure">
        <Grid paddingVertical="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            <Heading className="ams-mb-s" color="inverse" level={2}>
              Reserveren
            </Heading>
            <Paragraph className="ams-mb-m" color="inverse">
              Online reserveren kan voor een verblijf tot maximaal 7 nachten. Bezoekers mogen in totaal maximaal 21
              dagen op de camping blijven. In onderstaande gevallen kun je niet online reserveren en moet je contact
              opnemen met de receptie.
            </Paragraph>
            <UnorderedList className="ams-mb-m" color="inverse">
              <UnorderedList.Item>Verblijf van 1 nacht in een trekkershut </UnorderedList.Item>
              <UnorderedList.Item>Verblijf langer dan 7 nachten </UnorderedList.Item>
              <UnorderedList.Item>Verblijf met meer dan 4 personen in 1 hut </UnorderedList.Item>
              <UnorderedList.Item>Reservering voor een groep </UnorderedList.Item>
              <UnorderedList.Item>
                Het boeken van meerdere camperplekken, tentplekken of trekkershutten.
              </UnorderedList.Item>
            </UnorderedList>
            <StandaloneLink color="inverse" href={formatPath('/camping-vliegenbos/reserveren')} target="_blank">
              Boek je verblijf
            </StandaloneLink>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Grid as="section" paddingBottom="2x-large" paddingTop="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading className="ams-mb-s" level={2}>
            Route naar de camping
          </Heading>
          <LinkList className="ams-mb-xl">
            <LinkList.Link href="https://9292.nl/" target="_blank">
              Reisadvies via 9292.nl
            </LinkList.Link>
            <LinkList.Link
              href="https://www.google.com/maps/place/Camping+Vliegenbos+Amsterdam/@52.3905946,4.9260569,17z/data=!3m1!4b1!4m8!3m7!1s0x47c608ff18b49c91:0xef765d703e2583bb!5m2!4m1!1i2!8m2!3d52.3905913!4d4.9282456"
              target="_blank"
            >
              Reisadvies met auto of camper via Google Maps
            </LinkList.Link>
          </LinkList>
          <Alert
            color="inverse"
            heading="Belangrijke informatie voor dieselcampers"
            headingLevel={2}
            severity="warning"
          >
            <Paragraph>
              Camping Vliegenbos ligt binnen een milieuzone. Campers op diesel hebben alleen toegang met emissieklasse 5
              of hoger. Heeft je camper een lagere emissieklasse maar wel een SA-registratie, dan kun je voor bezoek aan
              de camping een dagontheffing aanvragen.
            </Paragraph>
          </Alert>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Heading className="ams-mb-m" level={2}>
            Campingregels
          </Heading>
          <Accordion headingLevel={3}>
            <Accordion.Section expanded label="Aankomst, Verblijf & Betaling">
              <UnorderedList>
                <UnorderedList.Item>Meld je na aankomst en voor vertrek bij de receptie.</UnorderedList.Item>
                <UnorderedList.Item>
                  Wil je langer blijven, meld je dan tijdig bij de receptie om te kijken of dit kan.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Bezoekers mogen in totaal maximaal 21 dagen op de camping blijven.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  U moet binnen 14 dagen na het maken van een reservering betalen. Als u binnen 5 dagen aankomt, kunt u
                  bij de receptie betalen.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Toegang is uitsluitend voor geregistreerde en betalende bezoekers.
                </UnorderedList.Item>
              </UnorderedList>
            </Accordion.Section>
            <Accordion.Section label="Annulering & Restitutie">
              <Paragraph className="ams-mb-m">
                Ons annulerings- en restitutiebeleid is afhankelijk van de periode tussen het moment van annuleren en de
                datum van het geplande verblijf. Daarnaast rekenen we €10 administratiekosten per reservering.
              </Paragraph>
              <UnorderedList>
                <UnorderedList.Item>Meer dan 3 maanden: 85% teruggave</UnorderedList.Item>
                <UnorderedList.Item>Tussen 2 en 3 maanden: 50% teruggave </UnorderedList.Item>
                <UnorderedList.Item>Tussen 1 en 2 maanden: 25% teruggave</UnorderedList.Item>
                <UnorderedList.Item>Binnen 1 maand: 10% teruggave</UnorderedList.Item>
                <UnorderedList.Item>Dag van aankomst: geen teruggave </UnorderedList.Item>
              </UnorderedList>
            </Accordion.Section>
            <Accordion.Section label="Gedragsregels & Faciliteiten">
              <UnorderedList>
                <UnorderedList.Item>
                  Tussen 23.00 uur en 8.00 uur moet het stil zijn op de camping. Muziek is na 21.00 uur niet toegestaan.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Honden zijn alleen toegestaan in campers en caravans en moeten altijd aangelijnd zijn. Honden zijn
                  niet toegestaan in tenten en trekhutten.
                </UnorderedList.Item>
                <UnorderedList.Item>Auto’s moeten op de door de beheerder aangewezen plaats staan.</UnorderedList.Item>
                <UnorderedList.Item>
                  Barbecues zijn alleen toegestaan in overleg met de beheerder. Open vuur is niet toegestaan.
                </UnorderedList.Item>
                <UnorderedList.Item>Soft drugs zijn toegestaan.</UnorderedList.Item>
                <UnorderedList.Item>Hard drugs zijn niet toegestaan.</UnorderedList.Item>
                <UnorderedList.Item>Roken mag alleen buiten.</UnorderedList.Item>
              </UnorderedList>
            </Accordion.Section>
            <Accordion.Section label="Algemene Voorwaarden & Aansprakelijkheid">
              <UnorderedList>
                <UnorderedList.Item>
                  Camping Vliegenbos is aangesloten bij RECRON. Lees de RECRON voorwaarden Toeristisch Verblijf (pdf) op
                  de{' '}
                  <Link
                    href="https://www.hiswarecron.nl/leisure-en-recreatie/voorwaarden-en-overeenkomsten"
                    target="_blank"
                  >
                    website van RECRON
                  </Link>
                </UnorderedList.Item>
                <UnorderedList.Item>
                  De beheerder kan als dat nodig is mensen van het terrein verwijderen en de toegang tot het terrein
                  weigeren.
                </UnorderedList.Item>
                <UnorderedList.Item>
                  Camping Vliegenbos is niet aansprakelijk voor brand, vermissing van spullen of schade door derden.
                </UnorderedList.Item>
              </UnorderedList>
            </Accordion.Section>
          </Accordion>
        </Grid.Cell>
      </Grid>
    </>
  )
}
