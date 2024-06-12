/* eslint-disable react/jsx-props-no-spreading */

'use client'

import { Button, Checkbox, FieldSet, Grid, Heading, Icon, Paragraph } from '@amsterdam/design-system-react'
import Link from 'next/link'
import { ChevronLeftIcon } from '@amsterdam/design-system-react-icons'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function Contact2() {
  const { register, handleSubmit } = useForm()

  const router = useRouter()

  const onSubmit = () => router.push('/signalen/documenten')

  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Link className="ams-link-list__link ams-mb--sm" href="/signalen/contact-1">
          <Icon svg={ChevronLeftIcon} size="level-5" />
          Vorige vraag
        </Link>
        <form className="ams-gap--md" onSubmit={handleSubmit(onSubmit)}>
          <Heading>Melding openbare ruimte</Heading>
          <Heading level={2}>Gegevens</Heading>
          <FieldSet aria-describedby="permissionDescription" legend="Mogen we uw melding doorsturen?">
            <Paragraph className="ams-mb--sm" id="permissionDescription">
              Soms kan de gemeente niets doen. Een andere organisatie moet dan aan het werk. Als dat zo is kunnen wij uw
              melding soms doorsturen. Wij sturen uw telefoonnummer of e-mailadres mee. Maar dat doen we alleen als u
              dat goed vindt.
            </Paragraph>
            <Checkbox id="permission" {...register('permission')}>
              Ja, ik geef de gemeente Amsterdam toestemming om mijn melding door te sturen naar andere organisaties als
              de melding niet voor de gemeente is bestemd.
            </Checkbox>
          </FieldSet>
          <div>
            <Button type="submit">Volgende</Button>
          </div>
        </form>
      </Grid.Cell>
    </Grid>
  )
}

export default Contact2
