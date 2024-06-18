/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Field, Grid, Heading, Label, Paragraph, TextArea } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'

function VulAan2() {
  const { register, handleSubmit } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/vul-aan-3')
  }

  return (
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
      <BackLink
        href={formData.when === 'eerder' ? '/signalen/vul-aan-1c' : '/signalen/vul-aan-1'}
        className="ams-mb--xs"
      >
        Vorige vraag
      </BackLink>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Beschrijf uw melding</Heading>
          <Paragraph>Stap 1 van 4</Paragraph>
        </hgroup>
        <Field>
          <Label htmlFor="type">Welk afval is verkeerd neergezet? (niet verplicht)</Label>
          <Paragraph id="typeDescription" size="small">
            U helpt ons door zoveel mogelijk informatie te geven over het soort afval: huisafval, bedrijfsafval,
            grofvuil of dozen en papier.
          </Paragraph>
          <TextArea
            aria-describedby="typeDescription"
            defaultValue={formData.type}
            id="type"
            rows={4}
            {...register('type')}
          />
        </Field>
        <div>
          <Button type="submit">Volgende vraag</Button>
        </div>
      </form>
    </Grid.Cell>
  )
}

export default VulAan2
