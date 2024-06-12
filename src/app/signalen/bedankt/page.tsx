'use client'

import { Link, Column, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import NextLink from 'next/link'

function Bedankt() {
  return (
    <Grid paddingBottom="medium">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 2 }}>
        <Column>
          <Heading>Bedankt!</Heading>
          <Paragraph>
            Uw melding is bij ons bekend onder nummer: SIG-14022. Hebt u een e-mailadres ingevuld? Dan ontvangt u een
            e-mail met alle gegevens van uw melding.
          </Paragraph>

          <Heading level={2}>Wat doen we met uw melding?</Heading>
          <Paragraph>
            U hoort binnen 3 werkdagen wat we met uw melding hebben gedaan. Dringende meldingen pakken wij zo snel
            mogelijk op.
          </Paragraph>

          <Heading level={2}>Wilt u nog een andere melding doen?</Heading>

          <NextLink legacyBehavior passHref href="/signalen">
            <Link href="/signalen">Doe een melding</Link>
          </NextLink>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}

export default Bedankt
