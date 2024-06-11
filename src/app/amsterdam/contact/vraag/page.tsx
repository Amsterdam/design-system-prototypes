/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import {
  Breadcrumb,
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
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

function Question() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push('/amsterdam/contact/gegevens')
  }

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <NextLink legacyBehavior passHref href="/amsterdam">
            <Breadcrumb.Link href="/amsterdam">Home</Breadcrumb.Link>
          </NextLink>
        </Breadcrumb>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Contact</Heading>
          <Field>
            <Label htmlFor="body">Wat wilt u aan de gemeente vragen?</Label>
            <Paragraph id="bodyDescription" size="small">
              Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen. U kunt eventueel nog een bijlage
              toevoegen.
            </Paragraph>
            <Paragraph size="small">0/1000 tekens</Paragraph>
            <TextArea aria-describedby="bodyDescription" id="body" rows={4} />
          </Field>
          <FieldSet legend="U kunt hier een bijlage toevoegen">
            <FileInput
              accept="image/jpeg,image/jpg,image/png,image/gif"
              aria-label="Selecteer een bestand"
              data-testid="file-input-upload"
              id="fileUpload"
              multiple
              name="bijlage"
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

export default Question
