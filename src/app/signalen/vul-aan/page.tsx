'use client'

import {
  Button,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  Paragraph,
  Radio,
  TextArea,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function VulAan() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/signalen/contact')
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Doe een melding</Heading>
          <Heading level={2}>Locatie en vragen</Heading>
          <FieldSet legend="Waar is het?">
            <Paragraph>KAART SELECTOR</Paragraph>
          </FieldSet>
          <FieldSet legend="Wanneer was het?">
            <Radio id="nu">Nu</Radio>
            <Radio id="eerder">Eerder</Radio>
          </FieldSet>
          <Field>
            <Label htmlFor="where">Waar komt het afval vandaan, denkt u? (niet verplicht)</Label>
            <TextArea id="where" rows={4} />
          </Field>
          <div className="ams-form-navigation">
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default VulAan
