/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Column, ErrorMessage, FieldSet, Heading, Paragraph, Radio } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { addErrorCountToPageTitle } from '../_utils/addErrorCountToPageTitle'
import { formatErrors } from '../_utils/formatErrors'
import { BackLink } from '../_components/BackLink'

function VulAan3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/contact-1')

  // Add error count to doc title
  const initialDocTitle = useMemo(() => document.title, [])
  const formattedErrors = formatErrors(errors)
  addErrorCountToPageTitle(formattedErrors, initialDocTitle)

  return (
    <>
      <BackLink href="/signalen" className="ams-mb--xs">
        Vorige vraag
      </BackLink>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Beschrijf uw melding</Heading>
          <Paragraph>Stap 1 van 3</Paragraph>
        </hgroup>
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
              value="ja"
              invalid={Boolean(errors.who)}
              aria-required="true"
              {...register('who', {
                required: 'Geef aan of u weet wie het afval heeft geplaatst. U hoeft geen naam op te geven.',
              })}
            >
              Ja
            </Radio>
            <Radio
              value="nee"
              invalid={Boolean(errors.who)}
              aria-required="true"
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
    </>
  )
}

export default VulAan3
