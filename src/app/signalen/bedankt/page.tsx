'use client'

import { Heading, Paragraph, Link as ADSLink, Column, Grid } from '@amsterdam/design-system-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useFormContext } from '../FormContext'

function Thanks() {
  const { updateFormData } = useFormContext()

  useEffect(() => {
    // Reset form data
    updateFormData({
      body: null,
      when: null,
      whenDay: null,
      whenTimeHour: null,
      whenTimeMinute: null,
      type: null,
      who: null,
      phone: null,
      mail: null,
      permission: null,
    })
  }, [])

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Column>
          <Heading>Melding openbare ruimte</Heading>
          <Column gap="small">
            <Heading level={2}>Bedankt</Heading>
            <Paragraph size="small">
              Bedankt voor uw melding. Wij hebben uw melding ontvangen op{' '}
              <time dateTime={new Date(Date.now()).toLocaleDateString('nl')}>
                {new Date(Date.now()).toLocaleDateString('nl', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>{' '}
              om <time>{new Date(Date.now()).toLocaleTimeString('nl', { hour: 'numeric', minute: 'numeric' })}</time>.
              Uw meldnummer is 1977916.
            </Paragraph>

            <Heading level={3} size="level-4">
              Wat doen we met uw melding?
            </Heading>
            <Paragraph size="small">Meldingen pakken we binnen 3 werkdagen op.</Paragraph>

            <Heading level={3} size="level-4">
              Vragen of meer informatie?{' '}
            </Heading>
            <Paragraph size="small">
              Neem dan contact met ons op via{' '}
              <ADSLink href="tel:14020" variant="inline">
                14 020
              </ADSLink>
              . Vermeld hierbij alstublieft uw meldnummer. Meer informatie kunt u eventueel ook vinden op{' '}
              <ADSLink variant="inline" href="https://www.amsterdam.nl/">
                amsterdam.nl
              </ADSLink>
              .
            </Paragraph>

            <Heading level={3} size="level-4">
              Wilt u nog een andere melding doen?
            </Heading>
            <div>
              <Link href="/signalen" legacyBehavior passHref>
                <ADSLink>Doe een melding</ADSLink>
              </Link>
            </div>
          </Column>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}

export default Thanks
