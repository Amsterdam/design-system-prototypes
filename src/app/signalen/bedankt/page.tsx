'use client'

import { Heading, Paragraph, Link as ADSLink, Column, Grid } from '@amsterdam/design-system-react'
import Link from 'next/link'

function Thanks() {
  return (
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
      <Column>
        <Heading>Melding openbare ruimte</Heading>
        <Column gap="small">
          <Heading level={2}>Bedankt</Heading>
          <Paragraph size="small">
            Bedankt voor uw melding. Wij hebben uw melding ontvangen op {new Date(Date.now()).toLocaleDateString('nl')}{' '}
            om {new Date(Date.now()).toLocaleTimeString('nl', { hour: 'numeric', minute: 'numeric' })}. Uw meldnummer is
            1977916.
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
          <Link href="/signalen" legacyBehavior passHref>
            <ADSLink>Doe een melding</ADSLink>
          </Link>
        </Column>
      </Column>
    </Grid.Cell>
  )
}

export default Thanks
