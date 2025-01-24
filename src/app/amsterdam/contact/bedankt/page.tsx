'use client'

import { Breadcrumb, Column, Grid, Heading, Link, Paragraph } from '@amsterdam/design-system-react'
import NextLink from 'next/link'

function Bedankt() {
  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <NextLink href="/amsterdam" legacyBehavior passHref>
            <Breadcrumb.Link>Home</Breadcrumb.Link>
          </NextLink>
        </Breadcrumb>
        <Column className="ams-mb--md" gap="small">
          <Heading>Bedankt!</Heading>
          <Paragraph>
            Uw melding is bij ons bekend onder nummer: AMS-14022. Heeft u een e-mailadres ingevuld? Dan ontvangt u een
            e-mail met alle gegevens van uw vraag.
          </Paragraph>
          <Heading level={2}>Wat doen we met uw vraag?</Heading>
          <Paragraph>
            U hoort binnen 3 werkdagen wat we met uw melding hebben gedaan. Dringende meldingen pakken wij zo snel
            mogelijk op.
          </Paragraph>
          <NextLink href="/amsterdam" legacyBehavior passHref>
            <Link>Ga terug naar de homepage.</Link>
          </NextLink>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}

export default Bedankt
