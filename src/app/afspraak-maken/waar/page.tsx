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
  Select,
  TimeInput,
} from '@amsterdam/design-system-react'
import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import Form from 'next/form'

const waarOptions = ['Centrum', 'Nieuw-West', 'Noord', 'Oost', 'West', 'Zuid', 'Zuidoost', 'Weesp']

export default function Waar() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading level={1}>Afspraak maken</Heading>
        <Paragraph className="ams-mb-xl">Stap 1 van 3: Afspraak</Paragraph>
        <Form action="/afspraak-maken/wie">
          <Field className="ams-mb-l">
            <Label htmlFor="waar">Stadsloket</Label>
            <Select id="waar">
              <Select.Option value="">-- Kies een stadsloket --</Select.Option>
              {waarOptions.map((label, index) => (
                <Select.Option key={index} value={index + 1}>
                  {label}
                </Select.Option>
              ))}
            </Select>
          </Field>
          <Field className="ams-mb-l">
            <Label htmlFor="datum">Datum</Label>
            <DateInput id="datum" />
          </Field>
          <Field className="ams-mb-xl">
            <Label htmlFor="tijd">Tijd</Label>
            <TimeInput id="tijd" />
          </Field>
          <ActionGroup className="ams-mb-m">
            <Button
              formAction="/afspraak-maken/hoeveel"
              icon={ChevronBackwardIcon}
              iconBefore
              type="submit"
              variant="secondary"
            >
              Vorige vraag
            </Button>
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
