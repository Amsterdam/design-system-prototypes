/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Button,
  Column,
  ErrorMessage,
  FieldSet,
  InvalidFormAlert,
  Grid,
  Heading,
  Paragraph,
  Radio,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { formatErrors } from '../_utils/formatErrors'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'
import { docTitle } from '../../../constants'

function VulAan3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldFocusError: false })
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/contact-1')
  }

  useEffect(() => {
    document.title = 'Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  const formattedErrors = formatErrors(errors)

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb-s" href="/signalen/vul-aan-2">
          Vorige vraag
        </BackLink>
        <Column className="ams-mb-l">
          <Heading level={1}>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap-s">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
          <InvalidFormAlert errors={formattedErrors} />
        </Column>
        <form className="ams-gap-l" onSubmit={handleSubmit(onSubmit)}>
          <FieldSet
            legend="Weet u wie de eigenaar is van het verkeerd geplaatste afval?"
            aria-describedby={`whoDescription${errors.who ? ' whoError' : ''}`}
            role="radiogroup"
            aria-required="true"
            invalid={Boolean(errors.who)}
          >
            <Paragraph id="whoDescription" size="small" className="ams-mb-s">
              Bijvoorbeeld omdat u dat ziet aan een adressticker of iets anders?
            </Paragraph>
            {errors.who && <ErrorMessage className="ams-mb-s" id="whoError">{`${errors.who.message}`}</ErrorMessage>}
            <Column>
              <Radio
                aria-required="true"
                defaultChecked={formData.who === 'ja'}
                invalid={Boolean(errors.who)}
                value="ja"
                {...register('who', {
                  required: 'Geef aan of u weet wie het afval heeft geplaatst. U hoeft geen naam op te geven.',
                })}
              >
                Ja
              </Radio>
              <Radio
                aria-required="true"
                defaultChecked={formData.who === 'nee'}
                invalid={Boolean(errors.who)}
                value="nee"
                {...register('who', {
                  required: 'Geef aan of u weet wie het afval heeft geplaatst. U hoeft geen naam op te geven.',
                })}
              >
                Nee
              </Radio>
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

export default VulAan3
