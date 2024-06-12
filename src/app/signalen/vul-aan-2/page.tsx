/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Field, Grid, Heading, Icon, Label, Paragraph, TextArea } from '@amsterdam/design-system-react'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function VulAan2() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/vul-aan-3')

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Link className="ams-link-list__link ams-mb--sm" href="/signalen/vul-aan-1">
          <Icon svg={ChevronLeftIcon} size="level-5" />
          Vorige vraag
        </Link>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Heading>Melding openbare ruimte</Heading>
          <Heading level={2}>Beschrijf uw melding</Heading>
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
      </Grid.Cell>
    </Grid>
  )
}

export default VulAan2
