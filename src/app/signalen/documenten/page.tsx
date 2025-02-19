/* eslint-disable react/jsx-props-no-spreading */

'use client'

import {
  Button,
  Column,
  Field,
  FileInput,
  Grid,
  Heading,
  Label,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'
import { docTitle } from '../../../constants'

function Docs() {
  const { register, handleSubmit } = useForm()
  const { updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/samenvatting')
  }

  useEffect(() => {
    document.title = 'Stap 3 van 4, documenten - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <NextLink href="/signalen/contact-1" legacyBehavior passHref>
          <BackLink className="ams-mb--xs">Vorige vraag</BackLink>
        </NextLink>
        <Column className="ams-mb--md">
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap--xs">
            <Heading level={2}>Documenten</Heading>
            <Paragraph>Stap 3 van 4</Paragraph>
          </hgroup>
        </Column>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label htmlFor="files">Heeft u een bestand om toe te voegen? (niet verplicht)</Label>
            <div className="ams-mb--sm" id="filesDescription">
              <Paragraph size="small">
                Voeg een foto of bestand (PDF) toe om de situatie te verduidelijken. Verwijder alle persoonsgegevens van
                u en derden.
              </Paragraph>
              <UnorderedList size="small">
                <UnorderedList.Item>U kunt maximaal drie bestanden tegelijk toevoegen. </UnorderedList.Item>
                <UnorderedList.Item>Toegestane bestandtypes: jpg, jpeg, png en pdf.</UnorderedList.Item>
                <UnorderedList.Item>Een bestand mag maximaal 20 MB groot zijn.</UnorderedList.Item>
              </UnorderedList>
            </div>
            <FileInput aria-describedby="filesDescription" id="files" accept="image/*,.pdf" {...register('files')} />
          </Field>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Docs
