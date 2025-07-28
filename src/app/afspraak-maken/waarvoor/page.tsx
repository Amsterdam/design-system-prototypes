'use client'

import {
  ActionGroup,
  Button,
  Field,
  Grid,
  Heading,
  Label,
  Paragraph,
  Select,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import Form from 'next/form'
import NextLink from 'next/link'

const waarvoorOptions = [
  'Paspoort',
  'Identiteitskaart',
  'Rijbewijs',
  'Vluchtelingenpaspoort',
  'Uw gegevens wijzigen',
  'Verhuizen en adresgegevens',
  'Parkeren',
  'Sociaal Loket',
]

export default function Waarvoor() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading level={1}>Afspraak maken</Heading>
        <Paragraph className="ams-mb-xl">Stap 1 van 3: Afspraak</Paragraph>
        <Form action="/afspraak-maken/waarover">
          <Field className="ams-mb-xl">
            <Label htmlFor="waarvoor">Kies waar u voor wilt langskomen op het Stadsloket</Label>
            <Select id="waarvoor">
              <Select.Option value="">-- Kies een onderwerp --</Select.Option>
              {waarvoorOptions.map((label, index) => (
                <Select.Option key={index} value={index + 1}>
                  {label}
                </Select.Option>
              ))}
            </Select>
          </Field>
          <ActionGroup className="ams-mb-m">
            <NextLink href="/afspraak-maken" legacyBehavior passHref>
              <StandaloneLink icon={ChevronBackwardIcon}>Terug naar de inleiding</StandaloneLink>
            </NextLink>
            <Button icon={ChevronForwardIcon} type="submit" variant="primary">
              Volgende vraag
            </Button>
          </ActionGroup>
          <Button formAction="/afspraak-maken" type="submit" variant="tertiary">
            Opslaan en later verder
          </Button>
        </Form>
      </Grid.Cell>
    </Grid>
  )
}
