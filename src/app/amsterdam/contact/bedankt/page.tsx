'use client'

import { Breadcrumb, Column, Grid, Heading, Link, Paragraph } from '@amsterdam/design-system-react'

function Bedankt() {
  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Breadcrumb>
          <Breadcrumb.Link href="/amsterdam">Home</Breadcrumb.Link>
        </Breadcrumb>
        <Column className="ams-mb-l">
          <Heading level={1}>Bedankt!</Heading>
          <Paragraph>
            Uw melding is bij ons bekend onder nummer: AMS-14022. Heeft u een e-mailadres ingevuld? Dan ontvangt u een
            e-mail met alle gegevens van uw vraag.
          </Paragraph>
          <Heading level={2}>Wat doen we met uw vraag?</Heading>
          <Paragraph>
            U hoort binnen 3 werkdagen wat we met uw melding hebben gedaan. Dringende meldingen pakken wij zo snel
            mogelijk op.
          </Paragraph>
          <Link href="/amsterdam">Ga terug naar de homepage.</Link>
        </Column>
      </Grid.Cell>
    </Grid>
  )
}

export default Bedankt
