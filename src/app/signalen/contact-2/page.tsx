'use client'

import { Button, Checkbox, Column, FieldSet, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { docTitle } from '../../../constants'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'

function Contact2() {
  const { handleSubmit, register } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/documenten')
  }

  useEffect(() => {
    document.title = 'Stap 2 van 4, gegevens - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  return (
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink className="ams-mb-xl" href="/signalen/contact-1">
          Vorige vraag
        </BackLink>
        <Column className="ams-mb-l">
          <Heading level={1}>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap-s">
            <Heading level={2}>Gegevens</Heading>
            <Paragraph>Stap 2 van 4</Paragraph>
          </hgroup>
        </Column>
        <form className="ams-gap-l" onSubmit={handleSubmit(onSubmit)}>
          <FieldSet
            aria-labelledby="permissionGroup permissionDescription"
            id="permissionGroup"
            legend="Mogen we uw melding doorsturen? (niet verplicht)"
          >
            <Paragraph id="permissionDescription">
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
