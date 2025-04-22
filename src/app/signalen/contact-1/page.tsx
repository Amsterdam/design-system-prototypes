/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Button,
  Column,
  ErrorMessage,
  Field,
  FieldSet,
  InvalidFormAlert,
  Grid,
  Heading,
  Label,
  Paragraph,
  TextInput,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { BackLink } from '../_components/BackLink'
import { formatErrors } from '../_utils/formatErrors'
import { useFormContext } from '../FormContext'
import { docTitle } from '../../../constants'

function Contact1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldFocusError: false })
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/contact-2')
  }

  useEffect(() => {
    document.title = 'Stap 2 van 4, gegevens - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  const formattedErrors = formatErrors(errors)

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb-s" href="/signalen/vul-aan-3">
          Vorige vraag
        </BackLink>
        <Column className="ams-mb-l">
          <Heading level={1}>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap-s">
            <Heading level={2}>Gegevens</Heading>
            <Paragraph>Stap 2 van 4</Paragraph>
          </hgroup>
          <InvalidFormAlert errors={formattedErrors} heading="Verbeter de fouten voor u verder gaat" headingLevel={2} />
        </Column>
        <form className="ams-gap-l" onSubmit={handleSubmit(onSubmit)} noValidate>
          <FieldSet
            aria-describedby="contactDescription"
            legend="Mogen we u bellen voor vragen? En op de hoogte houden via e-mail?"
          >
            <Paragraph className="ams-mb-m" id="contactDescription" size="small">
              Vaak hebben we nog een vraag. Daarmee kunnen we het probleem sneller of beter oplossen. Of we willen iets
              uitleggen. Wij willen u dan graag even bellen. Of anders e-mailen wij u. Wij gebruiken uw telefoonnummer
              en e-mailadres alléén voor deze melding.
            </Paragraph>
            <Column>
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
                  // TODO: This makes the input invalid the second you start typing, because a valid e-mail needs an @.
                  // Maybe we should remove the :invalid styling. Or should we use type="text" here?
                  type="email"
                  {...register('mail', {
                    pattern: {
                      // Validation sourced from https://github.com/frameless/gemeentevoorbeeld.nl/blob/main/packages/next-templates/src/utils/validation.ts
                      // TODO: Maybe we want to source this from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation ?
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
