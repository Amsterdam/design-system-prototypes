/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Field, Heading, Label, Paragraph, TextArea } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'

function VulAan2() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/vul-aan-3')

  return (
    <>
      <BackLink href="/signalen/vul-aan-1" className="ams-mb--xs">
        Vorige vraag
      </BackLink>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Beschrijf uw melding</Heading>
          <Paragraph>Stap 1 van 3</Paragraph>
        </hgroup>
        <Field>
          <Label htmlFor="type">Welk afval is verkeerd neergezet? (niet verplicht)</Label>
          <Paragraph id="typeDescription" size="small">
            U helpt ons door zoveel mogelijk informatie te geven over het soort afval: huisafval, bedrijfsafval,
            grofvuil of dozen en papier.
          </Paragraph>
          <TextArea aria-describedby="typeDescription" id="type" rows={4} {...register('type')} />
        </Field>
        <div>
          <Button type="submit">Volgende vraag</Button>
        </div>
      </form>
    </>
  )
}

export default VulAan2
