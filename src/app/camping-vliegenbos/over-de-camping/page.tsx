'use client'

import {
  Alert,
  Breadcrumb,
  Button,
  Column,
  DescriptionList,
  Grid,
  Heading,
  Image,
  LinkList,
  Paragraph,
  StandaloneLink,
  UnorderedList,
} from '@amsterdam/design-system-react'

import pictureCampingImage from '../_assets/picture-camping.jpg'
import mapCampingImage from '../_assets/map_camping.jpg'

export default function OverDeCamping() {
  return (
    <Grid paddingBottom="large" gapVertical="large" as="section">
      <Grid.Cell span="all">
        <Grid>
          <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
            <Breadcrumb>
              <Breadcrumb.Link href="/camping-vliegenbos/">Home</Breadcrumb.Link>
              <Breadcrumb.Link href="/camping-vliegenbos/over-de-camping">Over de camping</Breadcrumb.Link>
            </Breadcrumb>

            <Heading size="level-2" level={1}>
              Over camping Vliegenbos
            </Heading>

            <Paragraph>
              Op zoek naar een sfeervolle camping in Amsterdam? Camping Vliegenbos ligt op 15 minuten lopen van de
              gratis veerpont naar het centrum van Amsterdam. Ook fiets je zo naar de stille polders van Waterland. We
              hebben plekken voor tenten, campers en caravans. Ook verhuren we trekkershutten.
            </Paragraph>
          </Grid.Cell>
        </Grid>
      </Grid.Cell>

      <Grid.Cell span="all">
        <Image src={pictureCampingImage.src} alt="" />
      </Grid.Cell>

      <Grid.Cell span="all">
        <Column alignHorizontal="center">
          <Grid>
            <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }}>
              <Heading level={2} size="level-5" className="ams-mb-m">
                Faciliteiten
              </Heading>

              <DescriptionList>
                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Sanitair
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  Je hebt geen douchemuntjes nodig. De douches zijn geopend van 06.00 uur - 00.00 uur. Er is ook
                  sanitair voor rolstoelgebruikers. Bij de receptie kun je hiervoor een sleutel vragen.
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    WiFi
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  Er is gratis WiFi op het terrein van de camping. Het wachtwoord vraag je bij de receptie.
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Restaurant
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  Het restaurant is in het hoogseizoen elke dag geopend van 08:00 uur tot 22:00 uur. Tijdens het
                  laagseizoen zijn de openingstijden van 08:00 uur tot 11:00 uur in het weekend.
                  <LinkList>
                    <LinkList.Link target="_blank" href="https://theroundaboutamste.wixsite.com/mijnsite">
                      Meer over het restaurant
                    </LinkList.Link>
                  </LinkList>
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Wasserette
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  Op onze camping kun je ook de was doen. Muntjes voor de wasserette koop je bij de receptie.
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Keuken
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  De buiten campingkeuken heeft een kookgelegenheid en een gemeenschappelijke koelkast. Bestek, pannen
                  en borden moet je zelf meenemen. De buiten keuken is geopend vanaf maart tot oktober.
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Fietsen
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  Op de camping kun je fietsen huren van TIP Amsterdam Noord. Je kunt een reservering maken via de
                  website en de ophaal locatie en voorkeuren doorgeven. Voor groepen boven de 15 personen of voor
                  speciale aanvragen kun je contact opnemen via info@tipamsterdamnoord.nl
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Bagagedepot
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  Op de dag van vertrek kun je jouw bagage tijdelijk kwijt in ons bagagedepot. Vraag ernaar bij de
                  receptie.
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Oplaadpunt elektrische apparaten
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  Kleine elektronische apparaten kun je gratis opladen bij de receptie.
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Honden
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  Honden zijn toegestaan in campers of caravans. Wij rekenen per hond €7,50 per nacht. In tenten en
                  trekkershutten zijn honden niet toegestaan.
                </DescriptionList.Description>

                <DescriptionList.Term>
                  <Heading size="level-5" level={3}>
                    Parkeren
                  </Heading>
                </DescriptionList.Term>
                <DescriptionList.Description>
                  De camping heeft niet veel parkeerplekken en je kunt deze niet reserveren. Als er geen plek is op de
                  camping, kun je in de buurt betaald parkeren. De prijs voor een parkeerplaats is 10 euro per nacht.
                  <LinkList>
                    <LinkList.Link href="https://www.parkeren-amsterdam.com/noord">
                      Meer over parkeren in Amsterdam Noord
                    </LinkList.Link>
                  </LinkList>
                </DescriptionList.Description>
              </DescriptionList>

              <Heading size="level-5" level={2} className="ams-mb-s">
                Plattegrond
              </Heading>
              <Image src={mapCampingImage.src} alt="Plattegrond van camping Vliegenbos" className="ams-mb-m" />

              <Heading level={2} size="level-5">
                Openingstijden en inchecken
              </Heading>
              <Paragraph className="ams-mb-s">
                De receptie is open van 08.00 uur tot 22.00 uur. Er is een nachtportier. De ingang voor voertuigen is 's
                nachts gesloten. Te voet of met de fiets kun je 24 uur per dag het terrein op.
              </Paragraph>
              <UnorderedList className="ams-mb-s">
                <UnorderedList.Item>Met een tent kun je op elk moment inchecken.</UnorderedList.Item>
                <UnorderedList.Item>Campers en caravans kunnen vanaf 13:00 uur inchecken.</UnorderedList.Item>
                <UnorderedList.Item>Voor de trekhutten kun je vanaf 15:00 uur inchecken.</UnorderedList.Item>
                <UnorderedList.Item>De uitchecktijd is 11:00 uur.</UnorderedList.Item>
              </UnorderedList>

              <Heading level={2} size="level-5">
                Reserveren
              </Heading>
              <Paragraph className="ams-mb-s">
                Online reserveren kan voor een verblijf tot maximaal 7 nachten. Bezoekers mogen in totaal maximaal 21
                dagen op de camping blijven. In onderstaande gevallen kun je niet online reserveren en moet je contact
                opnemen met de receptie.
              </Paragraph>
              <UnorderedList className="ams-mb-m">
                <UnorderedList.Item>Verblijf van 1 nacht in een trekkershut </UnorderedList.Item>
                <UnorderedList.Item>Verblijf langer dan 7 nachten </UnorderedList.Item>
                <UnorderedList.Item>Verblijf met meer dan 4 personen in 1 hut </UnorderedList.Item>
                <UnorderedList.Item>Reservering voor een groep </UnorderedList.Item>
                <UnorderedList.Item>
                  Het boeken van meerdere camperplekken, tentplekken of trekkershutten.{' '}
                </UnorderedList.Item>
              </UnorderedList>

              <StandaloneLink className="ams-mb-s" href="https://www.amsterdam.nl/vliegenbos/zoek-boek/">
                Reserveren
              </StandaloneLink>

              <Alert heading="Belangrijke informatie voor dieselcampers" headingLevel={2} severity="warning">
                <Paragraph>
                  Camping Vliegenbos ligt binnen een milieuzone. Campers op diesel hebben alleen toegang met
                  emissieklasse 5 of hoger. Heeft je camper een lagere emissieklasse maar wel een SA-registratie, dan
                  kun je voor bezoek aan de camping een dagontheffing aanvragen.
                </Paragraph>
              </Alert>
            </Grid.Cell>
          </Grid>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}
