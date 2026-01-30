'use client'

import {
  Button,
  Column,
  ErrorMessage,
  FieldSet,
  Grid,
  Heading,
  InvalidFormAlert,
  Paragraph,
  Radio,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { docTitle } from '../../../constants'
import { BackLink } from '../_components/BackLink'
import { formatErrors } from '../_utils/formatErrors'
import { useFormContext } from '../FormContext'

function VulAan3() {
  const {
    formState: { errors },
    handleSubmit,
    register,
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
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb-xl" href="/signalen/vul-aan-2">
          Vorige vraag
        </BackLink>
        <Column className="ams-mb-l">
          <Heading level={1}>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap-s">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
          <InvalidFormAlert errors={formattedErrors} heading="Verbeter de fouten voor u verder gaat" headingLevel={2} />
        </Column>
        <form className="ams-gap-l" onSubmit={handleSubmit(onSubmit)}>
          <FieldSet
            aria-describedby={`whoDescription${errors.who ? ' whoError' : ''}`}
            aria-required="true"
            invalid={Boolean(errors.who)}
            legend="Weet u wie de eigenaar is van het verkeerd geplaatste afval?"
            role="radiogroup"
          >
            <Paragraph id="whoDescription">
              Bijvoorbeeld omdat u dat ziet aan een adressticker of iets anders?
            </Paragraph>
            {errors.who && <ErrorMessage id="whoError">{`${errors.who.message}`}</ErrorMessage>}
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
