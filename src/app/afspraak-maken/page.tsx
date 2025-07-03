'use client'

import { Grid, Heading, OrderedList, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'
import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'

export default function Introductie() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading className="ams-mb-xl" level={1}>
          Afspraak maken
        </Heading>
        <Heading className="ams-mb-s" level={2}>
          Waar u dit formulier voor gebruikt
        </Heading>
        <Paragraph className="ams-mb-xl">
          Met dit formulier maakt u een afspraak bij een Stadsloket in Amsterdam of Weesp.
        </Paragraph>
        <Heading className="ams-mb-s" level={2}>
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
        <NextLink href="afspraak-maken/waarvoor" legacyBehavior passHref>
          <StandaloneLink icon={ChevronForwardIcon}>Start het formulier</StandaloneLink>
        </NextLink>
      </Grid.Cell>
    </Grid>
  )
}
