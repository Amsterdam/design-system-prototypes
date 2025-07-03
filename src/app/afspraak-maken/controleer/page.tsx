'use client'

import {
  Accordion,
  ActionGroup,
  Button,
  Column,
  Grid,
  Heading,
  Paragraph,
  Row,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'

type ReviewItem = {
  label: string
  shortLabel: string
  value: string
}

const reviewItems: Array<Array<ReviewItem>> = [
  [
    {
      label: 'Kies het onderwerp van uw afspraak',
      shortLabel: 'onderwerp',
      value: 'Paspoort / ID / Rijbewijs',
    },
    {
      label: 'Kies waar het over gaat',
      shortLabel: 'product',
      value: 'Paspoort vernieuwen',
    },
    {
      label: 'Voor hoeveel personen wilt u een paspoort aanvragen?',
      shortLabel: 'aantal personen',
      value: '2',
    },
    {
      label: 'Is er iemand bij de afspraak die hulpmiddelen nodig heeft?',
      shortLabel: 'hulpmiddelen',
      value: 'Nee',
    },
    {
      label: 'Locatie',
      shortLabel: 'locatie',
      value: 'Stadsloket Centrum Amstel 1, 1011 PN Amsterdam',
    },
    {
      label: 'Datum',
      shortLabel: 'datum',
      value: 'dag 23 mei 2025',
    },
    {
      label: 'Tijd',
      shortLabel: 'tijd',
      value: '09.00 uur',
    },
  ],
  [
    {
      label: 'Voornaam',
      shortLabel: 'voornaam',
      value: 'Sarah',
    },
    {
      label: 'Achternaam',
      shortLabel: 'achternaam',
      value: 'Tulpent',
    },
    {
      label: 'Geboortedatum',
      shortLabel: 'geboortedatum',
      value: '8 september 1995',
    },
    {
      label: 'E-mailadres',
      shortLabel: 'e-mailadres',
      value: 'sarah@live.nl',
    },
    {
      label: 'Telefoonnummer',
      shortLabel: 'telefoonnummer',
      value: '06 1648 4127',
    },
  ],
]

function ReviewItem({ label, shortLabel, value }: ReviewItem) {
  return (
    <Row>
      <div style={{ flexBasis: '50%' }}>
        <Heading level={3} size="level-5">
          {label}
        </Heading>
        <Paragraph>{value}</Paragraph>
      </div>
      <StandaloneLink href="#">Wijzig {shortLabel}</StandaloneLink>
    </Row>
  )
}

export default function Controleer() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading level={1}>Afspraak maken</Heading>
        <Paragraph className="ams-mb-xl">Stap 3 van 3: Controleer</Paragraph>
        <Paragraph className="ams-mb-xl">
          Controleer de gegevens die u heeft ingevuld. U kunt daarna uw afspraak bevestigen.
        </Paragraph>
        <Accordion className="ams-mb-xl" headingLevel={2}>
          <Accordion.Section expanded label="Controleer stap 1">
            <Column>
              {reviewItems[0].map(({ label, shortLabel, value }) => (
                <ReviewItem label={label} shortLabel={shortLabel} value={value} />
              ))}
            </Column>
          </Accordion.Section>
          <Accordion.Section expanded label="Controleer stap 2">
            <Column>
              {reviewItems[1].map(({ label, shortLabel, value }) => (
                <ReviewItem label={label} shortLabel={shortLabel} value={value} />
              ))}
            </Column>
          </Accordion.Section>
        </Accordion>
        <form>
          <ActionGroup className="ams-mb-m">
            <Button
              formAction="/afspraak-maken/wie"
              icon={ChevronBackwardIcon}
              iconBefore
              type="submit"
              variant="secondary"
            >
              Vorige vraag
            </Button>
            <Button icon={ChevronForwardIcon} type="submit" variant="primary">
              Afspraak bevestigen
            </Button>
          </ActionGroup>
          <Button type="submit" variant="tertiary">
            Opslaan en later verder
          </Button>
        </form>
      </Grid.Cell>
    </Grid>
  )
}
