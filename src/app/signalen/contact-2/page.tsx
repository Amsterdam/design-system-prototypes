/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Checkbox, FieldSet, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'

function Contact2() {
  const { register, handleSubmit } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/documenten')
  }

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink href="/signalen/contact-1" className="ams-mb--xs">
          Vorige vraag
        </BackLink>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-card__heading-group">
            <Heading level={2}>Gegevens</Heading>
            <Paragraph>Stap 2 van 4</Paragraph>
          </hgroup>
          <FieldSet
            id="permissionGroup"
            aria-labelledby="permissionGroup permissionDescription"
            legend="Mogen we uw melding doorsturen? (niet verplicht)"
          >
            <Paragraph className="ams-mb--sm" id="permissionDescription" size="small">
              Soms kan de gemeente niets doen. Een andere organisatie moet dan aan het werk. Als dat zo is kunnen wij uw
              melding soms doorsturen. Wij sturen uw telefoonnummer of e-mailadres mee. Maar dat doen we alleen als u
              dat goed vindt.
            </Paragraph>
            <Checkbox id="permission" {...register('permission')} defaultChecked={formData.permission}>
              Ja, ik geef de gemeente Amsterdam toestemming om mijn melding door te sturen naar andere organisaties als
              de melding niet voor de gemeente is bestemd.
            </Checkbox>
          </FieldSet>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Contact2
