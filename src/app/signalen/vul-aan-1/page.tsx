/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Column, FieldSet, Grid, Heading, Paragraph, Radio } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { BackLink } from '../_components/BackLink'
import { useFormContext } from '../FormContext'
import { docTitle } from '../../../constants'

function VulAan1() {
  const { register, handleSubmit } = useForm()
  const { formData, updateFormData } = useFormContext()

  const router = useRouter()

  const onSubmit = (data) => {
    updateFormData(data)
    router.push(data.when === 'eerder' ? '/signalen/vul-aan-1b' : '/signalen/vul-aan-2')
  }

  useEffect(() => {
    document.title = 'Stap 1 van 4, beschrijf uw melding - Gemeente Amsterdam'

    return () => {
      document.title = docTitle
    }
  }, [])

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <NextLink href="/signalen" legacyBehavior passHref>
          <BackLink className="ams-mb--xs">Vorige vraag</BackLink>
        </NextLink>
        <Column className="ams-mb--md">
          <Heading>Melding openbare ruimte</Heading>
          <hgroup className="ams-gap--xs">
            <Heading level={2}>Beschrijf uw melding</Heading>
            <Paragraph>Stap 1 van 4</Paragraph>
          </hgroup>
        </Column>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <FieldSet legend="Wanneer heeft u de overlast? (niet verplicht)" role="radiogroup">
            <Column gap="extra-small">
              <Radio value="nu" {...register('when')} defaultChecked={formData.when === 'nu'}>
                Nu
              </Radio>
              <Radio value="eerder" {...register('when')} defaultChecked={formData.when === 'eerder'}>
                Eerder
              </Radio>
            </Column>
          </FieldSet>
          <div>
            <Button type="submit">Volgende vraag</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default VulAan1
