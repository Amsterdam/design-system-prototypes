/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import {
  Button,
  Field,
  FieldSet,
  FileInput,
  Grid,
  Heading,
  Label,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function Contact() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/signalen/vul-aan')
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Doe een melding</Heading>
          <Heading level={2}>Beschrijf uw melding</Heading>
          <Field>
            <Label htmlFor="description">Waar gaat het om?</Label>
            <Paragraph size="small">Typ geen persoonsgegevens in deze omschrijving, dit wordt apart gevraagd</Paragraph>
            <TextArea id="description" rows={4} />
            <Paragraph size="small">8/1000 tekens</Paragraph>
          </Field>
          <FieldSet legend="Foto's toevoegen (niet verplicht)">
            <Paragraph size="small">Voeg een foto toe om de situatie te verduidelijken</Paragraph>
            <FileInput
              accept="image/jpeg,image/jpg,image/png,image/gif"
              aria-label="Selecteer een bestand"
              data-testid="file-input-upload"
              id="fileUpload"
              multiple
              name="images"
            />
          </FieldSet>
          <div className="ams-form-navigation">
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Contact
