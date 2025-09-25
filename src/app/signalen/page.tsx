'use client'

import {
  Button,
  CharacterCount,
  Column,
  ErrorMessage,
  Field,
  Grid,
  Heading,
  InvalidFormAlert,
  Label,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'

import { docTitle } from '../../constants'
import { formatErrors } from './_utils/formatErrors'
import { useFormContext } from './FormContext'

function Home() {
  const { formData, updateFormData } = useFormContext()

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({ shouldFocusError: false })

  const body = useWatch({
    control,
    defaultValue: formData.body || '',
    name: 'body',
  })

  const router = useRouter()
  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/vul-aan-1')
  }

  useEffect(() => {
    document.title = 'Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  const formattedErrors = formatErrors(errors)

  return (
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Column className="ams-mb-l">
          <Heading level={1}>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap-s">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
          <InvalidFormAlert errors={formattedErrors} heading="Verbeter de fouten voor u verder gaat" headingLevel={2} />
        </Column>
        <form className="ams-gap-l" onSubmit={handleSubmit(onSubmit)}>
          <Field invalid={Boolean(errors.body)}>
            <Label htmlFor="body">Waar gaat het om?</Label>
            <Paragraph id="bodyDescription">
              Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
            </Paragraph>
            {errors.body && <ErrorMessage id="bodyError">{`${errors.body.message}`}</ErrorMessage>}
            <TextArea
              aria-describedby={`bodyDescription${errors.body ? ' bodyError' : ''}`}
              aria-required="true"
              defaultValue={formData.body}
              id="body"
              invalid={Boolean(errors.body)}
              rows={4}
              {...register('body', {
                maxLength: {
                  message: 'Beschrijf uw melding in minder dan 1000 tekens.',
                  value: 1000,
                },
                required: 'Geef aan waar uw melding over gaat.',
              })}
            />
            <CharacterCount length={body.length} maxLength={1000} />
          </Field>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Home
