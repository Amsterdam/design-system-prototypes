/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Checkbox, FieldSet, Heading, Paragraph } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'

function Contact2() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/documenten')

  return (
    <>
      <BackLink href="/signalen/contact-1" className="ams-mb--xs">
        Vorige vraag
      </BackLink>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Gegevens</Heading>
          <Paragraph>Stap 2 van 3</Paragraph>
        </hgroup>
        <FieldSet aria-describedby="permissionDescription" legend="Mogen we uw melding doorsturen?">
          <Paragraph className="ams-mb--sm" id="permissionDescription" size="small">
            Soms kan de gemeente niets doen. Een andere organisatie moet dan aan het werk. Als dat zo is kunnen wij uw
            melding soms doorsturen. Wij sturen uw telefoonnummer of e-mailadres mee. Maar dat doen we alleen als u dat
            goed vindt.
          </Paragraph>
          <Checkbox id="permission" {...register('permission')}>
            Ja, ik geef de gemeente Amsterdam toestemming om mijn melding door te sturen naar andere organisaties als de
            melding niet voor de gemeente is bestemd.
          </Checkbox>
        </FieldSet>
        <div>
          <Button type="submit">Volgende vraag</Button>
        </div>
      </form>
    </>
  )
}

export default Contact2
