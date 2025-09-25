'use client'

import { Grid, Heading, OrderedList, Paragraph } from '@amsterdam/design-system-react'
import NextLink from 'next/link'

import './afspraak-maken.css'

export default function Introductie() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading className="ams-mb-xl" level={1}>
          Afspraak maken
        </Heading>
        <Heading className="ams-mb-xs" level={2}>
          Waar u dit formulier voor gebruikt
        </Heading>
        <Paragraph className="ams-mb-xl">
          Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
        </Paragraph>
        <Heading className="ams-mb-xs" level={2}>
          De stappen in dit formulier
        </Heading>
        <OrderedList className="ams-mb-xl">
          <OrderedList.Item>
            <strong>Afspraak</strong> – Kies waarvoor u een afspraak wilt maken. Kies ook waar u de afspraak wilt
            hebben. En wanneer.
          </OrderedList.Item>
          <OrderedList.Item>
            <strong>Uw gegevens</strong> – Vul uw contactgegevens in.
          </OrderedList.Item>
          <OrderedList.Item>
            <strong>Bevestiging</strong> – Controleer de gegevens die u heeft ingevuld. Verstuur de aanvraag.
          </OrderedList.Item>
        </OrderedList>
        <NextLink className="ams-call-to-action-link" href="afspraak-maken/waarvoor">
          Start het formulier
        </NextLink>
      </Grid.Cell>
    </Grid>
  )
}
