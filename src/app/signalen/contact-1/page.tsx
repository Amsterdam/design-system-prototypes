'use client'

import {
  Button,
  Column,
  ErrorMessage,
  Field,
  FieldSet,
  Grid,
  Heading,
  InvalidFormAlert,
  Label,
  Paragraph,
  TextInput,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { docTitle } from '../../../constants'
import { BackLink } from '../_components/BackLink'
import { formatErrors } from '../_utils/formatErrors'
import { useFormContext } from '../FormContext'

function Contact1() {
  const {
    formState: { errors },
    handleSubmit,
    register,
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
    <Grid paddingVertical="x-large">
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
        <form className="ams-gap-l" noValidate onSubmit={handleSubmit(onSubmit)}>
          <FieldSet
            aria-describedby="contactDescription"
            legend="Mogen we u bellen voor vragen? En op de hoogte houden via e-mail?"
          >
            <Paragraph id="contactDescription">
              Vaak hebben we nog een vraag. Daarmee kunnen we het probleem sneller of beter oplossen. Of we willen iets
              uitleggen. Wij willen u dan graag even bellen. Of anders e-mailen wij u. Wij gebruiken uw telefoonnummer
              en e-mailadres alléén voor deze melding.
            </Paragraph>
            <Column>
              <Field invalid={Boolean(errors.phone)}>
                <Label htmlFor="phone">Wat is uw telefoonnummer? (niet verplicht)</Label>
                {errors.phone && <ErrorMessage id="phoneError">{`${errors.phone.message}`}</ErrorMessage>}
                <TextInput
                  aria-describedby={errors.phone ? 'phoneError' : undefined}
                  autoComplete="tel"
                  defaultValue={formData.phone}
                  id="phone"
                  invalid={Boolean(errors.phone)}
                  style={{ maxInlineSize: '10em' }}
                  type="tel"
                  {...register('phone', {
                    maxLength: {
                      message: 'Het ingevulde telefoonnummer is niet toegestaan. Gebruik niet meer dan 15 tekens.',
                      value: 15,
                    },
                    pattern: {
                      message:
                        'Het ingevulde telefoonnummer is niet toegestaan. Vul een telefoonnummer in, zoals 06123456789 of +316123456789.',
                      // Validation sourced from current Signals
                      value: /^[ ()0-9+-]*$/,
                    },
                  })}
                />
              </Field>
              <Field invalid={Boolean(errors.mail)}>
                <Label htmlFor="mail">Wat is uw e-mailadres? (niet verplicht)</Label>
                {errors.mail && <ErrorMessage id="mailError">{`${errors.mail.message}`}</ErrorMessage>}
                <TextInput
                  aria-describedby={errors.mail ? 'mailError' : undefined}
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off" // Used by Safari
                  defaultValue={formData.mail}
                  id="mail"
                  invalid={Boolean(errors.mail)}
                  spellCheck="false"
                  style={{ maxInlineSize: '19em' }}
                  // TODO: This makes the input invalid the second you start typing, because a valid e-mail needs an @.
                  // Maybe we should remove the :invalid styling. Or should we use type="text" here?
                  type="email"
                  {...register('mail', {
                    maxLength: {
                      message: 'Het ingevulde e-mailadres is niet toegestaan. Gebruik niet meer dan 200 tekens.',
                      value: 200,
                    },
                    pattern: {
                      message:
                        'Het ingevulde e-mailadres is niet toegestaan. Vul een e-mailadres in, zoals hallo@voorbeeld.com.',
                      // Validation sourced from https://github.com/frameless/gemeentevoorbeeld.nl/blob/main/packages/next-templates/src/utils/validation.ts
                      // TODO: Maybe we want to source this from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation ?
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
