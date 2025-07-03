'use client'

import {
  ActionGroup,
  Button,
  DateInput,
  Field,
  Grid,
  Heading,
  Label,
  Paragraph,
  Row,
  Select,
  StandaloneLink,
  TextInput,
} from '@amsterdam/design-system-react'
import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'

const telCountryCodeOptions = [
  'Nederland (+31)',
  'Bahama’s (+1242)',
  'België (+32)',
  'Duitsland (+49)',
  'Frankrijk (+33)',
  'Malawi (+265)',
]

export default function Wie() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading level={1}>Afspraak maken</Heading>
        <Paragraph className="ams-mb-xl">Stap 2 van 3: Uw gegevens</Paragraph>
        <form action="/afspraak-maken/controleer" method="post">
          <Field className="ams-mb-l">
            <Label htmlFor="given-name">Voornaam</Label>
            <TextInput autoComplete="given-name" id="given-name" size={24} />
          </Field>
          <Field className="ams-mb-l">
            <Label htmlFor="family-name">Achternaam</Label>
            <TextInput autoComplete="family-name" id="family-name" size={24} />
          </Field>
          <Field className="ams-mb-l">
            <Label htmlFor="bday">Geboortedatum</Label>
            <DateInput id="bday" />
          </Field>
          <Field className="ams-mb-l">
            <Label htmlFor="email">E-mailadres</Label>
            <TextInput autoComplete="email" autoCorrect="off" spellCheck="false" type="email" id="email" size={24} />
          </Field>
          <Row className="ams-mb-xl" wrap>
            <Field>
              <Label htmlFor="tel-country-code">Landnummer</Label>
              <Select id="tel-country-code">
                {telCountryCodeOptions.map((label, index) => (
                  <Select.Option key={index} value={index + 1}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
            </Field>
            <Field>
              <Label htmlFor="email">Telefoonnummer</Label>
              <TextInput autoComplete="tel" type="tel" id="phone" size={24} />
            </Field>
          </Row>
          <ActionGroup className="ams-mb-m">
            <Button
              formAction="/afspraak-maken/waar"
              icon={ChevronBackwardIcon}
              iconBefore
              type="submit"
              variant="secondary"
            >
              Vorige vraag
            </Button>
            <Button icon={ChevronForwardIcon} type="submit" variant="primary">
              Controleer uw invoer
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
