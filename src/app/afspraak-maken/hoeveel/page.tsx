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

export default function Hoeveel() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading level={1}>Afspraak maken</Heading>
        <Paragraph className="ams-mb-xl">Stap 1 van 3: Afspraak</Paragraph>
        <form>
          <Field className="ams-mb-xl">
            <Label htmlFor="hoeveel">Voor hoeveel personen wilt u een paspoort aanvragen?</Label>
            <Select id="hoeveel">
              <Select.Option value="">-- Kies aantal personen --</Select.Option>
              {Array.from(Array(5).keys()).map((label, index) => (
                <Select.Option key={index} value={index + 1}>
                  {label + 1}
                </Select.Option>
              ))}
            </Select>
          </Field>
          <ActionGroup className="ams-mb-m">
            <Button
              formAction="/afspraak-maken/waarover"
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
          <Button type="submit" variant="tertiary">
            Opslaan en later verder
          </Button>
        </form>
      </Grid.Cell>
    </Grid>
  )
}
