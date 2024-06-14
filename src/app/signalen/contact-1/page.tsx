/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Button,
  Column,
  Field,
  FieldSet,
  Heading,
  Icon,
  Label,
  Paragraph,
  TextInput,
} from '@amsterdam/design-system-react'
import Link from 'next/link'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function Contact1() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/contact-2')

  return (
    <>
      <Link className="ams-link-list__link ams-mb--sm" href="/signalen/vul-aan-3">
        <Icon svg={ChevronLeftIcon} size="level-5" />
        Vorige vraag
      </Link>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <Heading level={2}>Gegevens</Heading>
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
