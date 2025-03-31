'use client'

import { Suspense } from 'react'
import {
  Column,
  Footer,
  Grid,
  Header,
  Heading,
  Link,
  Paragraph,
  Screen,
  SkipLink,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { FormProvider } from './FormContext'
import { ResetFocusOnNavigation } from './_components/ResetFocusOnNavigation/ResetFocusOnNavigation'

function Signalen({ children }) {
  return (
    <Screen className="ams-theme" maxWidth="wide">
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#main">Direct naar inhoud</SkipLink>
          <Header
            logoLink={`${process.env.basePath}signalen`} // TODO: je kunt hier geen NextLink gebruiken
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
      <Footer>
        <Footer.Spotlight>
          <Grid gapVertical="large" paddingVertical="medium">
            <Grid.Cell span={{ narrow: 3, medium: 4, wide: 4 }}>
              <Column as="section">
                <Heading color="inverse" level={2} size="level-4">
                  Contact
                </Heading>
                <Paragraph color="inverse" size="small">
                  Lukt het niet om een melding te doen? Bel het telefoonnummer{' '}
                  <Link color="inverse" href="tel:+3114020" variant="inline">
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
        </Footer.Spotlight>
        <Footer.Menu>
          <Footer.MenuLink href="#">Over deze site</Footer.MenuLink>
          <Footer.MenuLink href="#">Privacy</Footer.MenuLink>
          <Footer.MenuLink href="#">Toegankelijkheid</Footer.MenuLink>
          <NextLink href="/" legacyBehavior passHref>
            <Footer.MenuLink>Prototypes</Footer.MenuLink>
          </NextLink>
        </Footer.Menu>
      </Footer>
    </Screen>
  )
}

export default Signalen
