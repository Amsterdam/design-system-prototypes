/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import {
  Breadcrumb,
  Button,
  Field,
  FileInput,
  FormFieldCharacterCounter,
  Grid,
  Heading,
  Label,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

function Question() {
  const router = useRouter()
  const [textareaLength, setTextareaLength] = useState(0)

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
            <TextArea
              aria-describedby="bodyDescription"
              id="body"
              onChange={(e) => setTextareaLength(e.target.value.length)}
              rows={4}
            />
            <FormFieldCharacterCounter length={textareaLength} maxLength={1000} />
          </Field>
          <Field>
            <Label htmlFor="fileUpload">U kunt hier een bijlage toevoegen</Label>
            <FileInput accept="image/jpeg,image/jpg,image/png,image/gif" id="fileUpload" multiple name="bijlage" />
          </Field>
          <div className="ams-form-navigation">
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Question
