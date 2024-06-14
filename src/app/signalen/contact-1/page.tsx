/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Column, Field, FieldSet, Heading, Label, Paragraph, TextInput } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'

function Contact1() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/contact-2')

  return (
    <>
      <BackLink href="/signalen" className="ams-mb--xs">
        Vorige vraag
      </BackLink>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Gegevens</Heading>
          <Paragraph>Stap 2 van 3</Paragraph>
        </hgroup>
        <FieldSet
          aria-describedby="contactDescription"
          legend="Mogen we u bellen voor vragen? En op de hoogte houden via e-mail?"
        >
          <Paragraph className="ams-mb--sm" id="contactDescription" size="small">
            Vaak hebben we nog een vraag. Daarmee kunnen we het probleem sneller of beter oplossen. Of we willen iets
            uitleggen. Wij willen u dan graag even bellen. Of anders e-mailen wij u. Wij gebruiken uw telefoonnummer en
            e-mailadres alléén voor deze melding.
          </Paragraph>
          <Column gap="extra-small">
            <Field>
              <Label htmlFor="phone">Wat is uw telefoonnummer? (niet verplicht)</Label>
              <TextInput type="tel" id="phone" {...register('phone')} />
            </Field>
            <Field>
              <Label htmlFor="mail">Wat is uw e-mailadres? (niet verplicht)</Label>
              <TextInput type="email" id="mail" {...register('mail')} />
            </Field>
          </Column>
        </FieldSet>
        <div>
          <Button type="submit">Volgende vraag</Button>
        </div>
      </form>
    </>
  )
}

export default Contact1
