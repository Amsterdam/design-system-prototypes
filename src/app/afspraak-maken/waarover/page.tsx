'use client'

import { ActionGroup, Button, Field, Grid, Heading, Label, Paragraph, Select } from '@amsterdam/design-system-react'
import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import Form from 'next/form'

const waaroverOptions = ['Paspoort aanvragen', 'Paspoort vermist of gestolen', 'Paspoort ophalen']

export default function Waarover() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading level={1}>Afspraak maken</Heading>
        <Paragraph className="ams-mb-xl">Stap 1 van 3: Afspraak</Paragraph>
        <Form action="/afspraak-maken/hoeveel">
          <Field className="ams-mb-xl">
            <Label htmlFor="waarover">Kies waar het over gaat</Label>
            <Select id="waarover">
              <Select.Option value="">-- Kies een onderwerp --</Select.Option>
              {waaroverOptions.map((label, index) => (
                <Select.Option key={index} value={index + 1}>
                  {label}
                </Select.Option>
              ))}
            </Select>
          </Field>
          <ActionGroup className="ams-mb-m">
            <Button
              formAction="/afspraak-maken/waarvoor"
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
