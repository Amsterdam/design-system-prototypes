/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Field, Grid, Heading, Label, Paragraph, TimeInput } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'

function VulAan1() {
  const { register, handleSubmit } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/vul-aan-2')
  }

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink href="/signalen/vul-aan-1b" className="ams-mb--xs">
          Vorige vraag
        </BackLink>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-card__heading-group">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
          <Field>
            <Label htmlFor="whenTime">Hoe laat was het? (niet verplicht)</Label>
            <div>
              <TimeInput defaultValue={formData.whenTime} id="whenTime" {...register('whenTime')} />
            </div>
          </Field>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default VulAan1
