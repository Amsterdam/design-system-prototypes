/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import {
  Button,
  ErrorMessage,
  Field,
  FormFieldCharacterCounter,
  Grid,
  Heading,
  Label,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'

function SignalenHome() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const body = useWatch({
    control,
    name: 'body',
    defaultValue: '',
  })

  const router = useRouter()
  const onSubmit = () => router.push('/signalen/vul-aan-1')

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Heading>Melding openbare ruimte</Heading>
          <Heading level={2}>Beschrijf uw melding</Heading>
          <Field invalid={Boolean(errors.body)}>
            <Label htmlFor="body">Waar gaat het om?</Label>
            <Paragraph id="bodyDescription" size="small">
              Typ geen persoonsgegevens in deze omschrijving. We vragen dit later in dit formulier aan u.
            </Paragraph>
            {errors.body && <ErrorMessage id="bodyError">{`${errors.body.message}`}</ErrorMessage>}
            <TextArea
              aria-describedby={`bodyDescription${errors.body ? ' bodyError' : ''}`}
              aria-required="true"
              id="body"
              invalid={Boolean(errors.body)}
              rows={4}
              {...register('body', {
                required: 'Dit is een verplicht veld',
                maxLength: {
                  value: 1000,
                  message: 'U heeft te veel tekens gebruikt',
                },
              })}
            />
            <FormFieldCharacterCounter length={body.length} maxLength={1000} />
          </Field>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default SignalenHome
