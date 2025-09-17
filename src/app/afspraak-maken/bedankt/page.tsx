'use client'

import { Grid, Heading, Link, Paragraph, StandaloneLink, UnorderedList } from '@amsterdam/design-system-react'
import { DownloadIcon } from '@amsterdam/design-system-react-icons'

export default function Bedankt() {
  return (
    <Grid paddingBottom="2x-large" paddingTop="large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
        <Heading className="ams-mb-xl" level={1}>
          Bedankt
        </Heading>
        <Paragraph className="ams-mb-m">
          U heeft een afspraak gemaakt. Wij sturen een e-mail met de gegevens van uw afspraak naar{' '}
          <Link href="#">micah@live.nl</Link>. U krijgt van ons een e-mail met de gegevens van uw afspraak.
        </Paragraph>
        <Heading className="ams-mb-xs" level={2}>
          Neem dit mee naar uw afspraak
        </Heading>
        <UnorderedList className="ams-mb-l">
          <UnorderedList.Item>Bewijs van verlies document</UnorderedList.Item>
        </UnorderedList>
        <div>
          <StandaloneLink className="ams-mb-l" download href="#" icon={DownloadIcon}>
            Download overzicht afspraak PDF, 1MB
          </StandaloneLink>
        </div>
        <StandaloneLink href="/afspraak-maken">Sluit het formulier</StandaloneLink>
      </Grid.Cell>
    </Grid>
  )
}
