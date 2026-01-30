'use client'

import { Button, Column, Field, Grid, Heading, Label, Paragraph, TextArea } from '@amsterdam/design-system-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { docTitle } from '../../../constants'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'

function VulAan2() {
  const { handleSubmit, register } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push('/signalen/vul-aan-3')
  }

  useEffect(() => {
    document.title = 'Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  return (
    <Grid paddingVertical="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <BackLink
          className="ams-mb-xl"
          href={formData.when === 'eerder' ? '/signalen/vul-aan-1c' : '/signalen/vul-aan-1'}
        >
          Vorige vraag
        </BackLink>
        <Column className="ams-mb-l">
          <Heading level={1}>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap-s">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
        </Column>
        <form className="ams-gap-l" onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <Label htmlFor="type">Welk afval is verkeerd neergezet? (niet verplicht)</Label>
            <Paragraph id="typeDescription">
              U helpt ons door zoveel mogelijk informatie te geven over het soort afval: huisafval, bedrijfsafval,
              grofvuil of dozen en papier.
            </Paragraph>
            <TextArea
              aria-describedby="typeDescription"
              defaultValue={formData.type}
              id="type"
              rows={4}
              {...register('type')}
            />
          </Field>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default VulAan2
