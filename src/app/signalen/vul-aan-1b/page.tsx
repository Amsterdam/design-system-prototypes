'use client'

import { Button, Column, FieldSet, Grid, Heading, Paragraph, Radio } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { docTitle } from '../../../constants'
import { BackLink } from '../_components/BackLink'
import { capitalizeFirstLetter } from '../_utils/capitalizeFirstLetter'
import { useFormContext } from '../FormContext'

const optionLabel = (daysBack) => {
  const date = new Date(new Date().setDate(new Date().getDate() - daysBack))
  return capitalizeFirstLetter(date.toLocaleDateString('nl', { day: 'numeric', month: 'long', weekday: 'long' }))
}

const dayOptions = Array.from({ length: 6 }, (_, i) => i + 1)

function VulAan1() {
  const { handleSubmit, register } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/vul-aan-1c')
  }

  useEffect(() => {
    document.title = 'Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  return (
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb-s" href="/signalen/vul-aan-1">
          Vorige vraag
        </BackLink>
        <Column className="ams-mb-l">
          <Heading level={1}>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap-s">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
        </Column>
        <form className="ams-gap-l" onSubmit={handleSubmit(onSubmit)}>
          <FieldSet legend="Welke dag was het? (niet verplicht)" role="radiogroup">
            <Radio value="vandaag" {...register('whenDay')} defaultChecked={formData.whenDay === 'vandaag'}>
              Vandaag
            </Radio>
            {dayOptions.map((dayBack) => (
              <Radio
                key={dayBack}
                value={optionLabel(dayBack)}
                {...register('whenDay')}
                defaultChecked={formData.whenDay === optionLabel(dayBack)}
              >
                {optionLabel(dayBack)}
              </Radio>
            ))}
          </FieldSet>{' '}
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default VulAan1
