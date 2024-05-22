'use client'

import { Grid, Breadcrumb, Heading, Label, Paragraph, TextArea, Fieldset, Button } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

const Question = () => {
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
            <Breadcrumb.Item href="/amsterdam">Home</Breadcrumb.Item>
          </NextLink>
        </Breadcrumb>
        <form className="ams-gap--md" onSubmit={handleSubmit}>
          <Heading>Contact</Heading>
          <div>
            <Label htmlFor="description">Wat wilt u aan de gemeente vragen?</Label>
            <Paragraph size="small">
              Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen. U kunt eventueel nog een bijlage
              toevoegen.
            </Paragraph>
            <TextArea id="description" rows={4} />
            <Paragraph size="small">0/1000 tekens</Paragraph>
          </div>
          <Fieldset legend="U kunt hier een bijlage toevoegen">
            <input
              type="file"
              id="fileUpload"
              data-testid="file-input-upload"
              accept="image/jpeg,image/jpg,image/png,image/gif"
              name="bijlage"
              multiple
              aria-label="Selecteer een bestand"
            />
            <label htmlFor="fileUpload">Selecteer een bestand</label>
          </Fieldset>
          <div className="ams-form-navigation">
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Question
