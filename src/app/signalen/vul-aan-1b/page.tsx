/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Button,
  Column,
  FieldSet,
  Grid,
  Heading,
  Paragraph,
  Radio,
  Row,
  Select,
  VisuallyHidden,
} from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'
import { capitalizeFirstLetter } from '../_utils/capitalizeFirstLetter'

const optionLabel = (daysBack) => {
  const date = new Date(new Date().setDate(new Date().getDate() - daysBack))
  return capitalizeFirstLetter(date.toLocaleDateString('nl', { weekday: 'long', day: 'numeric', month: 'long' }))
}

const dayOptions = Array.from({ length: 6 }, (_, i) => i + 1)
const hourOptions = Array.from(Array(24).keys())
const minuteOptions = Array.from(Array(12).keys()).map((minute) => minute * 5)

function VulAan1() {
  const { register, handleSubmit } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/vul-aan-2')
  }

  return (
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
      <BackLink href="/signalen/vul-aan-1" className="ams-mb--xs">
        Vorige vraag
      </BackLink>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Beschrijf uw melding</Heading>
          <Paragraph>Stap 1 van 4</Paragraph>
        </hgroup>
        <FieldSet legend="Welke dag was het? (niet verplicht)" role="radiogroup" style={{ display: 'grid' }}>
          <Column gap="extra-small">
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
          </Column>
        </FieldSet>
        <FieldSet legend="Hoe laat was het? (niet verplicht)" style={{ display: 'grid' }}>
          <Row style={{ alignItems: 'end' }}>
            <Select
              aria-labelledby="uur"
              defaultValue={formData.whenTimeHour}
              style={{ maxInlineSize: '7rem' }}
              {...register('whenTimeHour')}
            >
              <Select.Option value="" />
              {hourOptions.map((hour) => (
                <Select.Option key={hour} value={hour}>
                  {hour}
                </Select.Option>
              ))}
            </Select>
            <span className="ams-paragraph" id="uur">
              uur
            </span>
            <Select
              aria-labelledby="minuten"
              defaultValue={formData.whenTimeMinute}
              style={{ maxInlineSize: '7rem' }}
              {...register('whenTimeMinute')}
            >
              <Select.Option value="" />
              {minuteOptions.map((minute) => (
                <Select.Option key={minute} value={minute}>
                  {minute}
                </Select.Option>
              ))}
            </Select>
            <span aria-hidden className="ams-paragraph">
              min
            </span>
            <VisuallyHidden id="minuten">minuten</VisuallyHidden>
          </Row>
        </FieldSet>
        <div>
          <Button type="submit">Volgende vraag</Button>
        </div>
      </form>
    </Grid.Cell>
  )
}

export default VulAan1
