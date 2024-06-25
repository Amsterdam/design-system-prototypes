/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Column, FieldSet, Grid, Heading, Paragraph, Radio } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'

function VulAan1() {
  const { register, handleSubmit } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push(data.when === 'eerder' ? '/signalen/vul-aan-1b' : '/signalen/vul-aan-2')
  }

  useEffect(() => {
    document.title = 'Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam'
  }, [])

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink href="/signalen" className="ams-mb--xs">
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
          <FieldSet
            legend="Wanneer heeft u de overlast? (niet verplicht)"
            role="radiogroup"
            style={{ display: 'grid' }}
          >
            <Column gap="extra-small">
              <Radio value="nu" {...register('when')} defaultChecked={formData.when === 'nu'}>
                Nu
              </Radio>
              <Radio value="eerder" {...register('when')} defaultChecked={formData.when === 'eerder'}>
                Eerder
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

export default VulAan1
