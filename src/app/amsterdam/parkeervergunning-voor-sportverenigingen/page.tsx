'use client'

import {
  Accordion,
  Alert,
  Button,
  Column,
  Grid,
  Heading,
  Link,
  OrderedList,
  Paragraph,
  Spotlight,
  Table,
  UnorderedList,
} from '@amsterdam/design-system-react'

function Parkeren() {
  return (
    <>
      <Grid paddingBottom="medium">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Alert closeable severity="warning">
            <Heading size="level-4">We hebben een achterstand</Heading>
            <Paragraph>
              Er is een achterstand bij het verwerken van aanvragen voor parkeervergunningen. Het duurt maximaal 18
              werkdagen voor uw aanvraag is behandeld. Onze excuses voor de vertraging.
            </Paragraph>
          </Alert>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading>Parkeervergunning voor sportverenigingen</Heading>
            <Paragraph size="large">
              Sportverenigingen kunnen voor hun vrijwilligers een parkeervergunning voor sportverenigingen aanvragen.
              Met deze parkeervergunning kunt u parkeren in het vergunninggebied waar uw sportvereniging zit.
            </Paragraph>
            <Heading level={2}>Aanvragen</Heading>
            <Paragraph>
              Wilt u een parkeervergunning aanvragen voor het gebied waar uw sportvereniging is gevestigd? Kijk dan
              eerst{' '}
              <Link
                href="https://www.amsterdam.nl/parkeren/parkeervergunning/parkeervergunninggebied-opzoeken/"
                variant="inline"
              >
                in welk vergunninggebied uw vereniging ligt
              </Link>
              .
            </Paragraph>
            <Heading level={3}>Parkeervergunning met wisselend kenteken</Heading>
            <Paragraph>
              In de meeste stadsdelen kunt u de parkeervergunning ook{' '}
              <Link
                href="https://www.amsterdam.nl/parkeren/parkeervergunning/parkeervergunning-bedrijven/parkeervergunning-wisselend-kenteken/"
                variant="inline"
              >
                met wisselend kenteken aanvragen
              </Link>
              . Een parkeervergunning met wisselend kenteken is niet gekoppeld aan 1 kenteken. U kunt de vergunning
              gebruiken voor verschillende auto’s. U mag de vergunning wel steeds voor maar 1 auto tegelijk gebruiken.
            </Paragraph>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading level={3}>Aantal vergunningen (1)</Heading>
            <Paragraph>
              Het aantal parkeervergunningen dat een sportvereniging kan krijgen, verschilt per stadsdeel:
            </Paragraph>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Stadsdeel</Table.HeaderCell>
                  <Table.HeaderCell>Vergunning&shy;gebieden</Table.HeaderCell>
                  <Table.HeaderCell>Aantal vergunningen</Table.HeaderCell>
                  <Table.HeaderCell>Bijzonderheden</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Centrum</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                  <Table.Cell>1 vergunning per 50 leden</Table.Cell>
                  <Table.Cell>
                    Maximaal 25 vergunningen
                    <br />
                    <br />U kunt de parkeervergunning in Centrum <strong>niet</strong> met wisselend kenteken aanvragen.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Nieuw-West</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                  <Table.Cell>1 vergunning per 5 leden</Table.Cell>
                  <Table.Cell>Maximaal 25 vergunningen</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Noord</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                  <Table.Cell>1 vergunning per 10 leden</Table.Cell>
                  <Table.Cell>Maximaal 25 vergunningen</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Oost</Table.Cell>
                  <Table.Cell>Alle behalve Oost 17b</Table.Cell>
                  <Table.Cell>1 vergunning per 10 leden</Table.Cell>
                  <Table.Cell>Maximaal 25 vergunningen</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Weesp</Table.Cell>
                  <Table.Cell>Weesp 1 tot en met 5</Table.Cell>
                  <Table.Cell>1 vergunning per 5 leden</Table.Cell>
                  <Table.Cell>Maximaal 25 vergunningen</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>West</Table.Cell>
                  <Table.Cell>Alle behalve West 5, West 6.1 en West 12</Table.Cell>
                  <Table.Cell>1 vergunning per 10 leden</Table.Cell>
                  <Table.Cell>Maximaal 25 vergunningen</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>West 5 en 6.1</Table.Cell>
                  <Table.Cell>1 vergunning per 5 leden</Table.Cell>
                  <Table.Cell>Maximaal 25 vergunningen</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Zuid</Table.Cell>
                  <Table.Cell>Zuid 1 tot en met 6</Table.Cell>
                  <Table.Cell>1 vergunning per 10 leden</Table.Cell>
                  <Table.Cell>
                    Maximaal 25 vergunningen
                    <br />
                    <br />U kunt de parkeervergunning in Zuid 1, 2 en 3 <strong>niet</strong> met wisselend kenteken
                    aanvragen.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Zuid 7</Table.Cell>
                  <Table.Cell>1 vergunning per 5 leden</Table.Cell>
                  <Table.Cell>Maximaal 25 vergunningen</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading level={3}>Aantal vergunningen (2)</Heading>
            <Paragraph>
              Een sportvereniging kan maximaal 25 vergunningen krijgen. Het precieze aantal hangt af van het aantal
              leden en verschilt per stadsdeel:
            </Paragraph>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Stadsdeel</Table.HeaderCell>
                  <Table.HeaderCell>Vergunning&shy;gebieden</Table.HeaderCell>
                  <Table.HeaderCell>Leden per vergunning</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Centrum</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                  <Table.Cell>50</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Nieuw-West</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Noord</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Oost</Table.Cell>
                  <Table.Cell>Alle behalve 17b</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Weesp</Table.Cell>
                  <Table.Cell>1 tot en met 5</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>West</Table.Cell>
                  <Table.Cell>Alle behalve 5, 6.1 en 12</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>5 en 6.1</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Zuid</Table.Cell>
                  <Table.Cell>1 tot en met 6</Table.Cell>
                  <Table.Cell>10</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>7</Table.Cell>
                  <Table.Cell>5</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Heading level={4}>Bijzonderheden</Heading>
            <UnorderedList>
              <UnorderedList.Item>
                In de vergunninggebieden West 12 en Haven kunt u geen parkeervergunning voor sportverenigingen krijgen.
              </UnorderedList.Item>
              <UnorderedList.Item>
                In de vergunninggebieden Centrum en Zuid 1, 2 en 3 kunt u de parkeervergunning <strong>niet</strong> met
                wisselend kenteken aanvragen.
              </UnorderedList.Item>
            </UnorderedList>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading level={3}>Aantal vergunningen (3)</Heading>
            <Paragraph>
              Een sportvereniging krijgt maximaal 25 vergunningen. Het precieze aantal hangt af van het aantal leden.
              Dat verschilt per stadsdeel:
            </Paragraph>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Leden per vergunning</Table.HeaderCell>
                  <Table.HeaderCell>Stadsdeel</Table.HeaderCell>
                  <Table.HeaderCell>Vergunning&shy;gebieden</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>50</Table.Cell>
                  <Table.Cell>Centrum</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>10</Table.Cell>
                  <Table.Cell>Noord</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Oost</Table.Cell>
                  <Table.Cell>Alle behalve 17b</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>West</Table.Cell>
                  <Table.Cell>Alle behalve 5, 6.1 en 12</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Zuid</Table.Cell>
                  <Table.Cell>1 tot en met 6</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>Nieuw-West</Table.Cell>
                  <Table.Cell>Alle</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Weesp</Table.Cell>
                  <Table.Cell>1 tot en met 5</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>West</Table.Cell>
                  <Table.Cell>5 en 6.1</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Zuid</Table.Cell>
                  <Table.Cell>Zuid 7</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading level={3}>Aantal vergunningen (4)</Heading>
            <Paragraph>
              Een sportvereniging kan maximaal 25 vergunningen krijgen. Het precieze aantal hangt af van het aantal
              leden en verschilt per stadsdeel:
            </Paragraph>
            <Accordion headingLevel={4}>
              <Accordion.Section label="Centrum">
                <Paragraph>Aantal vergunningen: 1 per 50 leden.</Paragraph>
                <Paragraph>
                  Aanvragen met wisselend kenteken is <strong>niet</strong> mogelijk.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Nieuw-West">
                <Paragraph>1 vergunning per 5 leden.</Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Noord">
                <Paragraph>1 vergunning per 10 leden.</Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Oost">
                <UnorderedList>
                  <UnorderedList.Item>1 vergunning per 5 leden.</UnorderedList.Item>
                  <UnorderedList.Item>Geldt niet voor vergunninggebied 17b.</UnorderedList.Item>
                </UnorderedList>
              </Accordion.Section>
              <Accordion.Section label="Weesp">
                <Paragraph>Vergunninggebieden 1 tot en met 5: 1 vergunning per 5 leden.</Paragraph>
              </Accordion.Section>
              <Accordion.Section label="West">
                <UnorderedList>
                  <UnorderedList.Item>Vergunninggebieden 5 en 6.1: 1 vergunning per 5 leden.</UnorderedList.Item>
                  <UnorderedList.Item>Vergunninggebied 12: geen vergunningen mogelijk.</UnorderedList.Item>
                  <UnorderedList.Item>Alle andere vergunninggebieden: 1 vergunning per 10 leden.</UnorderedList.Item>
                </UnorderedList>
              </Accordion.Section>
              <Accordion.Section label="Zuid">
                <UnorderedList>
                  <UnorderedList.Item>Vergunninggebieden 1 tot en met 6: 1 vergunning per 10 leden.</UnorderedList.Item>
                  <UnorderedList.Item>Vergunninggebied 7: 1 vergunning per 5 leden.</UnorderedList.Item>
                  <UnorderedList.Item>
                    U kunt de parkeervergunning in Zuid 1, 2 en 3 <strong>niet</strong> met wisselend kenteken
                    aanvragen.
                  </UnorderedList.Item>
                </UnorderedList>
              </Accordion.Section>
            </Accordion>
            <Heading level={3}>Kosten</Heading>
            <Paragraph>Dit zijn de kosten voor een parkeervergunning voor sportverenigingen per 6 maanden.</Paragraph>
            <Table>
              <Table.Body>
                <Table.Row>
                  <Table.HeaderCell>Stadsdeel</Table.HeaderCell>
                  <Table.HeaderCell>Vergunninggebied</Table.HeaderCell>
                  <Table.HeaderCell>Kosten per 6 maanden</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Centrum</Table.Cell>
                  <Table.Cell>Centrum 1 t/m 3</Table.Cell>
                  <Table.Cell>€ 315,60</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Centrum 4</Table.Cell>
                  <Table.Cell>€ 186,29</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Nieuw-West</Table.Cell>
                  <Table.Cell>Nieuw-West 1 en 2</Table.Cell>
                  <Table.Cell>€ 37,29</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Nieuw-West 3, 4 en 5</Table.Cell>
                  <Table.Cell>€ 55,07</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Nieuw-West 6</Table.Cell>
                  <Table.Cell>€ 17,21</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Noord</Table.Cell>
                  <Table.Cell>Noord 1, 2 en 4 t/m 9</Table.Cell>
                  <Table.Cell>€ 17,21</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Oost</Table.Cell>
                  <Table.Cell>Oost 1 t/m 17</Table.Cell>
                  <Table.Cell>€ 186,29</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Weesp</Table.Cell>
                  <Table.Cell>Weesp 1 t/m 5</Table.Cell>
                  <Table.Cell>€ 26,30</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>West</Table.Cell>
                  <Table.Cell>West 1 t/m 5</Table.Cell>
                  <Table.Cell>€ 186,29</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>West 6</Table.Cell>
                  <Table.Cell>€ 55,07</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>West 7 t/m 11</Table.Cell>
                  <Table.Cell>€ 186,29</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Zuid</Table.Cell>
                  <Table.Cell>Zuid 1 t/m 5</Table.Cell>
                  <Table.Cell>€ 186,29</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Zuid 6 en 7</Table.Cell>
                  <Table.Cell>€ 55,07</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell />
                  <Table.Cell>Zuid 8</Table.Cell>
                  <Table.Cell>€ 186,29</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Zuidoost</Table.Cell>
                  <Table.Cell>Zuidoost 1 t/m 4</Table.Cell>
                  <Table.Cell>€ 37,29</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading level={3}>Betaalperiode</Heading>
            <Paragraph>
              Een parkeervergunning betaalt u voor een periode van 6 maanden. Bij een nieuwe parkeervergunning kunt u
              zelf bepalen vanaf welke maand u de vergunning laat ingaan. U betaalt altijd voor de hele maand.
            </Paragraph>
            <Paragraph>
              Voorbeeld: de vergunningperiode loopt van 1 juli tot en met 31 december. U kunt uw vergunning bijvoorbeeld
              laten ingaan op 1 oktober. U betaalt dan 3 maanden: van oktober tot en met december. U kunt de vergunning
              ook op 20 september laten ingaan. U betaalt dan wel de hele maand september. Vanaf 1 januari betaalt u dan
              per 6 maanden.
            </Paragraph>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading level={3}>Voorwaarden</Heading>
            <Paragraph>Dit zijn de regels voor een parkeervergunning voor sportverenigingen:</Paragraph>
            <Accordion headingLevel={4}>
              <Accordion.Section label="Lees de voorwaarden">
                <UnorderedList>
                  <UnorderedList.Item>
                    De sportvereniging is aangesloten bij een sportbond die door het NOC*NSF is erkend.
                  </UnorderedList.Item>
                  <UnorderedList.Item>De sportvereniging is niet-commercieel.</UnorderedList.Item>
                  <UnorderedList.Item>
                    Hoort er een parkeerplaats bij uw sportvereniging? Het aantal eigen parkeerplaatsen trekken wij af
                    van het totale aantal vergunningen dat u kunt krijgen. De uitkomst kan ook 0 zijn. U krijgt dan geen
                    parkeervergunning.
                  </UnorderedList.Item>
                </UnorderedList>
              </Accordion.Section>
            </Accordion>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading level={3}>Wat u nodig hebt</Heading>
            <Paragraph>
              Deze documenten hebt u nodig om een parkeervergunning voor sportverenigingen aan te vragen:
            </Paragraph>
            <Accordion headingLevel={4}>
              <Accordion.Section label="Documenten">
                <UnorderedList>
                  <UnorderedList.Item>
                    Een kopie van de meest recente ledenlijst, niet ouder dan een jaar.
                  </UnorderedList.Item>
                  <UnorderedList.Item>
                    Een recent bewijs van aansluiting bij een door het NOC*NSF erkende sportbond.
                  </UnorderedList.Item>
                  <UnorderedList.Item>
                    Als u met automatische incasso wilt betalen moet u het machtigingsformulier automatische incasso
                    printen, ondertekenen en ingescand of als foto uploaden bij uw aanvraag.
                  </UnorderedList.Item>
                </UnorderedList>
              </Accordion.Section>
            </Accordion>
          </Column>
        </Grid.Cell>
      </Grid>
      <Spotlight color="dark-green">
        <Grid paddingVertical="medium">
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
            <Column gap="small">
              <Heading inverseColor level={3}>
                Vraag aan
              </Heading>
              <Paragraph inverseColor>
                Voldoet u aan de{' '}
                <Link
                  href="https://www.amsterdam.nl/parkeren/parkeervergunning/parkeervergunning-sportverenigingen/#PagCls_16986648"
                  inverseColor
                  variant="inline"
                >
                  voorwaarden
                </Link>
                ? Dan kunt u een parkeervergunning voor sportverenigingen aanvragen.
              </Paragraph>
              <Heading inverseColor level={4}>
                Hoe het werkt
              </Heading>
              <OrderedList inverseColor>
                <OrderedList.Item>U logt in met eHerkenning.</OrderedList.Item>
                <OrderedList.Item>
                  U voegt de juiste{' '}
                  <Link
                    href="https://www.amsterdam.nl/parkeren/parkeervergunning/parkeervergunning-sportverenigingen/#PagCls_16986651"
                    inverseColor
                    variant="inline"
                  >
                    documenten
                  </Link>{' '}
                  toe.
                </OrderedList.Item>
                <OrderedList.Item>U krijgt een ontvangstbevestiging via e-mail.</OrderedList.Item>
                <OrderedList.Item>U krijgt binnen 10 werkdagen een brief met ons besluit.</OrderedList.Item>
              </OrderedList>
              <div>
                <Button>Vraag aan</Button>
              </div>
            </Column>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Grid paddingVertical="large">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <Column gap="small">
            <Heading level={3}>Kenteken wijzigen</Heading>
            <Heading level={4}>Parkeervergunning met wisselend kenteken</Heading>
            <Paragraph>
              Hebt u een parkeervergunning met wisselend kenteken? Dan kunt u een kenteken online koppelen.{' '}
              <Link href="https://www.amsterdam.nl/parkeren/parkeervergunning/parkeervergunning-bedrijven/parkeervergunning-wisselend-gebruiken/">
                Bekijk hoe het werkt
              </Link>
              .
            </Paragraph>
            <Heading level={4}>Parkeervergunning op vast kenteken</Heading>
            <Paragraph>
              U kunt een kentekenwijziging mailen naar{' '}
              <Link href="mailto:parkeervergunning@amsterdam.nl">parkeervergunning@amsterdam.nl</Link>. Wijzigingen
              aangevraagd vóór 16.00 uur verwerken wij dezelfde werkdag, na 16.00 uur de volgende werkdag.
            </Paragraph>
          </Column>
        </Grid.Cell>
      </Grid>
    </>
  )
}

export default Parkeren
