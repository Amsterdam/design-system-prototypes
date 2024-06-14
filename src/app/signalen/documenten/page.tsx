/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Field, FileInput, Heading, Label, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BackLink } from '../_components/BackLink'

function Docs() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/bedankt')

  return (
    <>
      <BackLink href="/signalen/contact-2" className="ams-mb--xs">
        Vorige vraag
      </BackLink>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <hgroup className="ams-card__heading-group">
          <Heading level={2}>Documenten</Heading>
          <Paragraph>Stap 3 van 3</Paragraph>
        </hgroup>
        <Field>
          <Label htmlFor="files">Heeft u een bestand om toe te voegen? (niet verplicht)</Label>
          <div className="ams-mb--sm">
            <Paragraph size="small">
              Voeg een foto of bestand (PDF) toe om de situatie te verduidelijken. Verwijder alle persoonsgegevens van u
              en derden.
            </Paragraph>
            <UnorderedList id="filesDescription" size="small">
              <UnorderedList.Item>U kunt maximaal drie bestanden tegelijk toevoegen. </UnorderedList.Item>
              <UnorderedList.Item>Toegestane bestandtypes: jpg, jpeg, png en pdf.</UnorderedList.Item>
              <UnorderedList.Item>Een bestand mag maximaal 20 MB groot zijn.</UnorderedList.Item>
            </UnorderedList>
          </div>
          <FileInput id="files" aria-describedby="filesDescription" {...register('files')} />
        </Field>
        <div>
          <Button type="submit">Verstuur melding</Button>
        </div>
      </form>
    </>
  )
}

export default Docs
