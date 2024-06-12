/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, ErrorMessage, FieldSet, Grid, Heading, Icon, Paragraph, Radio } from '@amsterdam/design-system-react'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function VulAan3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/contact-1')

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Link className="ams-link-list__link ams-mb--sm" href="/signalen/vul-aan-2">
          <Icon svg={ChevronLeftIcon} size="level-5" />
          Vorige vraag
        </Link>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Heading>Melding openbare ruimte</Heading>
          <Heading level={2}>Beschrijf uw melding</Heading>
          <FieldSet
            legend="Weet u wie de eigenaar is van het verkeerd geplaatste afval?"
            aria-describedby={errors.who ? 'whoError' : ''}
            role="radiogroup"
            aria-required="true"
            invalid={Boolean(errors.who)}
          >
            <Paragraph size="small">Bijvoorbeeld omdat u dat ziet aan een adressticker of iets anders?</Paragraph>
            {errors.who && <ErrorMessage id="whoError">{`${errors.who.message}`}</ErrorMessage>}
            <Radio
              value="ja"
              invalid={Boolean(errors.who)}
              aria-required="true"
              {...register('who', { required: 'Dit is een verplicht veld' })}
            >
              Ja
            </Radio>
            <Radio
              value="nee"
              invalid={Boolean(errors.who)}
              aria-required="true"
              {...register('who', { required: 'Dit is een verplicht veld' })}
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
