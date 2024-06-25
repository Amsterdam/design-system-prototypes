/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Column, Field, Grid, Heading, Label, Paragraph, TextArea } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
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

  useEffect(() => {
    document.title = 'Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam'
  }, [])

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink
          href={formData.when === 'eerder' ? '/signalen/vul-aan-1c' : '/signalen/vul-aan-1'}
          className="ams-mb--xs"
        >
          Vorige vraag
        </BackLink>
        <Column className="ams-mb--md">
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap--xs">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
        </Column>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
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
    </Grid>
  )
}

export default VulAan2
