'use client'

import { Suspense } from 'react'
import {
  Column,
  Grid,
  Heading,
  Link,
  Logo,
  Page,
  PageFooter,
  PageHeader,
  Paragraph,
  SkipLink,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { FormProvider } from './FormContext'
import { ResetFocusOnNavigation } from './_components/ResetFocusOnNavigation/ResetFocusOnNavigation'

function Signalen({ children }) {
  return (
    <Page className="ams-theme">
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#main">Direct naar inhoud</SkipLink>
          <PageHeader
            logoLinkComponent={(props) => <NextLink {...props} href={`${process.env.basePath}signalen`} />}
            logoLinkTitle="Naar de homepage van Signalen Amsterdam"
          />
        </Grid.Cell>
      </Grid>
      <main id="main">
        <FormProvider>{children}</FormProvider>
        <Suspense fallback={null}>
          <ResetFocusOnNavigation />
        </Suspense>
      </main>
      <PageFooter>
        <PageFooter.Spotlight>
          <Grid gapVertical="2x-large" paddingVertical="x-large">
            <Grid.Cell span={{ narrow: 3, medium: 4, wide: 4 }}>
              <Column>
                <Heading color="inverse" level={2} size="level-4">
                  Contact
                </Heading>
                <Paragraph color="inverse" size="small">
                  Lukt het niet om een melding te doen? Bel het telefoonnummer{' '}
                  <Link color="inverse" href="tel:+3114020">
                    14 020
                  </Link>
                  .
                </Paragraph>
                <Paragraph color="inverse" size="small">
                  Wij zijn bereikbaar van maandag tot en met vrijdag van 08.00 tot 18.00 uur.
                </Paragraph>
              </Column>
            </Grid.Cell>
          </Grid>
        </PageFooter.Spotlight>
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Toegankelijkheid</PageFooter.MenuLink>
          <NextLink href="/" legacyBehavior passHref>
            <PageFooter.MenuLink>Prototypes</PageFooter.MenuLink>
          </NextLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
  )
}

export default Signalen
