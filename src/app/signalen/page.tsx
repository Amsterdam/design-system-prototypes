/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client'

import {
  Button,
  ErrorMessage,
  Field,
  FormFieldCharacterCounter,
  Heading,
  Label,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { formatErrors } from './_utils/formatErrors'
import { addErrorCountToPageTitle } from './_utils/addErrorCountToPageTitle'

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

  // Add error count to doc title
  const initialDocTitle = useMemo(() => document.title, [])
  const formattedErrors = formatErrors(errors)
  addErrorCountToPageTitle(formattedErrors, initialDocTitle)

  return (
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
  )
}

export default SignalenHome
