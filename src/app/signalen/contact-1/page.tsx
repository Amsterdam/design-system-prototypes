/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Button,
  Column,
  ErrorMessage,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  Paragraph,
  TextInput,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'
import { FormErrorList } from '../_components/FormErrorList'
import { formatErrors } from '../_utils/formatErrors'
import { useFormContext } from '../FormContext'
import { useAddErrorCountToPageTitle } from '../_hooks/useAddErrorCountToPageTitle'

function Contact1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/contact-2')
  }

  const formattedErrors = formatErrors(errors)

  useAddErrorCountToPageTitle(formattedErrors)

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink href="/signalen/vul-aan-3" className="ams-mb--xs">
          Vorige vraag
        </BackLink>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-card__heading-group">
            <Heading level={2}>Gegevens</Heading>
            <Paragraph>Stap 2 van 4</Paragraph>
          </hgroup>
          <FormErrorList errors={formattedErrors} />
          <FieldSet
            aria-describedby="contactDescription"
            legend="Mogen we u bellen voor vragen? En op de hoogte houden via e-mail?"
          >
            <Paragraph className="ams-mb--sm" id="contactDescription" size="small">
              Vaak hebben we nog een vraag. Daarmee kunnen we het probleem sneller of beter oplossen. Of we willen iets
              uitleggen. Wij willen u dan graag even bellen. Of anders e-mailen wij u. Wij gebruiken uw telefoonnummer
              en e-mailadres alléén voor deze melding.
            </Paragraph>
            <Column gap="small">
              <Field invalid={Boolean(errors.phone)}>
                <Label htmlFor="phone">Wat is uw telefoonnummer? (niet verplicht)</Label>
                {errors.phone && <ErrorMessage id="phoneError">{`${errors.phone.message}`}</ErrorMessage>}
                <TextInput
                  autoComplete="tel"
                  aria-describedby={errors.phone ? 'phoneError' : undefined}
                  defaultValue={formData.phone}
                  id="phone"
                  invalid={Boolean(errors.phone)}
                  style={{ maxInlineSize: '10em' }}
                  type="tel"
                  {...register('phone', {
                    pattern: {
                      // Validation sourced from current Signals
                      value: /^[ ()0-9+-]*$/,
                      message:
                        'Het ingevulde telefoonnummer is niet toegestaan. Vul een telefoonnummer in, zoals 06123456789 of +316123456789.',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Het ingevulde telefoonnummer is niet toegestaan. Gebruik niet meer dan 15 tekens.',
                    },
                  })}
                />
              </Field>
              <Field invalid={Boolean(errors.mail)}>
                <Label htmlFor="mail">Wat is uw e-mailadres? (niet verplicht)</Label>
                {errors.mail && <ErrorMessage id="mailError">{`${errors.mail.message}`}</ErrorMessage>}
                <TextInput
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off" // Used by Safari
                  aria-describedby={errors.mail ? 'mailError' : undefined}
                  defaultValue={formData.mail}
                  id="mail"
                  invalid={Boolean(errors.mail)}
                  style={{ maxInlineSize: '19em' }}
                  spellCheck="false"
                  type="email"
                  {...register('mail', {
                    pattern: {
                      // Validation sourced from https://github.com/frameless/gemeentevoorbeeld.nl/blob/main/packages/next-templates/src/utils/validation.ts
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message:
                        'Het ingevulde e-mailadres is niet toegestaan. Vul een e-mailadres in, zoals hallo@voorbeeld.com.',
                    },
                    maxLength: {
                      value: 200,
                      message: 'Het ingevulde e-mailadres is niet toegestaan. Gebruik niet meer dan 200 tekens.',
                    },
                  })}
                />
              </Field>
            </Column>
          </FieldSet>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Contact1
