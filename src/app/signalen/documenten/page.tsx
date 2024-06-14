/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Button,
  Field,
  FileInput,
  Heading,
  Icon,
  Label,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function Docs() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/bedankt')

  return (
    <>
      <Link className="ams-link-list__link ams-mb--sm" href="/signalen/contact-2">
        <Icon svg={ChevronLeftIcon} size="level-5" />
        Vorige vraag
      </Link>
      <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
        <Heading>Melding openbare ruimte</Heading>
        <Heading level={2}>Documenten</Heading>
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
          <Button type="submit">Volgende vraag</Button>
        </div>
      </form>
    </>
  )
}

export default Docs
