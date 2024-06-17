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
            <Radio value={optionLabel(1)} {...register('whenDay')} defaultChecked={formData.whenDay === optionLabel(1)}>
              {optionLabel(1)}
            </Radio>
            <Radio value={optionLabel(2)} {...register('whenDay')} defaultChecked={formData.whenDay === optionLabel(2)}>
              {optionLabel(2)}
            </Radio>
            <Radio value={optionLabel(3)} {...register('whenDay')} defaultChecked={formData.whenDay === optionLabel(3)}>
              {optionLabel(3)}
            </Radio>
            <Radio value={optionLabel(4)} {...register('whenDay')} defaultChecked={formData.whenDay === optionLabel(4)}>
              {optionLabel(4)}
            </Radio>
            <Radio value={optionLabel(5)} {...register('whenDay')} defaultChecked={formData.whenDay === optionLabel(5)}>
              {optionLabel(5)}
            </Radio>
            <Radio value={optionLabel(6)} {...register('whenDay')} defaultChecked={formData.whenDay === optionLabel(6)}>
              {optionLabel(6)}
            </Radio>
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
              <Select.Option>0</Select.Option>
              <Select.Option>1</Select.Option>
              <Select.Option>2</Select.Option>
              <Select.Option>3</Select.Option>
              <Select.Option>4</Select.Option>
              <Select.Option>5</Select.Option>
              <Select.Option>6</Select.Option>
              <Select.Option>7</Select.Option>
              <Select.Option>8</Select.Option>
              <Select.Option>9</Select.Option>
              <Select.Option>10</Select.Option>
              <Select.Option>11</Select.Option>
              <Select.Option>12</Select.Option>
              <Select.Option>13</Select.Option>
              <Select.Option>14</Select.Option>
              <Select.Option>15</Select.Option>
              <Select.Option>16</Select.Option>
              <Select.Option>17</Select.Option>
              <Select.Option>18</Select.Option>
              <Select.Option>19</Select.Option>
              <Select.Option>20</Select.Option>
              <Select.Option>21</Select.Option>
              <Select.Option>22</Select.Option>
              <Select.Option>23</Select.Option>
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
              <Select.Option>0</Select.Option>
              <Select.Option>5</Select.Option>
              <Select.Option>10</Select.Option>
              <Select.Option>15</Select.Option>
              <Select.Option>20</Select.Option>
              <Select.Option>25</Select.Option>
              <Select.Option>30</Select.Option>
              <Select.Option>35</Select.Option>
              <Select.Option>40</Select.Option>
              <Select.Option>45</Select.Option>
              <Select.Option>50</Select.Option>
              <Select.Option>55</Select.Option>
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
