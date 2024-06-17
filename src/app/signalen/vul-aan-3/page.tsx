/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Column, ErrorMessage, FieldSet, Grid, Heading, Paragraph, Radio } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { addErrorCountToPageTitle } from '../_utils/addErrorCountToPageTitle'
import { formatErrors } from '../_utils/formatErrors'
import { BackLink } from '../_components/BackLink'
import { FormErrorList } from '../_components/FormErrorList'
import { useFormContext } from '../FormContext'

function VulAan3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/contact-1')
  }

  // Add error count to doc title
  const formattedErrors = formatErrors(errors)
  const [documentTitle, setDocumentTitle] = useState<string>()

  useEffect(() => {
    setDocumentTitle(document.title)
  }, [])

  useEffect(() => {
    if (documentTitle) {
      addErrorCountToPageTitle(formattedErrors, documentTitle)
    }
  }, [formattedErrors, documentTitle])

  return (
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
      <BackLink href="/signalen/vul-aan-2" className="ams-mb--xs">
        Vorige vraag
      </BackLink>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Beschrijf uw melding</Heading>
          <Paragraph>Stap 1 van 4</Paragraph>
        </hgroup>
        <FormErrorList errors={formattedErrors} />
        <FieldSet
          legend="Weet u wie de eigenaar is van het verkeerd geplaatste afval?"
          aria-describedby={errors.who ? 'whoError' : ''}
          role="radiogroup"
          aria-required="true"
          invalid={Boolean(errors.who)}
          style={{ display: 'grid' }}
        >
          <Paragraph size="small" className="ams-mb--xs">
            Bijvoorbeeld omdat u dat ziet aan een adressticker of iets anders?
          </Paragraph>
          {errors.who && <ErrorMessage className="ams-mb--xs" id="whoError">{`${errors.who.message}`}</ErrorMessage>}
          <Column gap="extra-small">
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
  )
}

export default VulAan3
