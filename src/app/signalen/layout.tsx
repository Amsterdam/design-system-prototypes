'use client'

import { Suspense } from 'react'
import {
  Column,
  Footer,
  Grid,
  Header,
  Heading,
  Link,
  PageMenu,
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
            logoLink={`${process.env.basePath}signalen`} // TODO: je kunt hier geen Next Link gebruiken
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
        <Footer.Top>
          <Heading inverseColor className="ams-visually-hidden">
            Colofon
          </Heading>
          <Grid gapVertical="large" paddingVertical="medium">
            <Grid.Cell span={{ narrow: 3, medium: 4, wide: 4 }}>
              <Column as="section" gap="extra-small">
                <Heading level={2} size="level-4" inverseColor>
                  Contact
                </Heading>
                <Paragraph size="small" inverseColor>
                  Lukt het niet om een melding te doen? Bel het telefoonnummer{' '}
                  <Link href="tel:+3114020" inverseColor variant="inline">
                    14 020
                  </Link>
                  .
                </Paragraph>
                <Paragraph size="small" inverseColor>
                  Wij zijn bereikbaar van maandag tot en met vrijdag van 08.00 tot 18.00 uur.
                </Paragraph>
              </Column>
            </Grid.Cell>
          </Grid>
        </Footer.Top>
        <Footer.Bottom>
          <Heading level={2} className="ams-visually-hidden">
            Over deze website
          </Heading>
          <Grid paddingVertical="small">
            <Grid.Cell span="all">
              <PageMenu>
                <PageMenu.Link href="#">Over deze site</PageMenu.Link>
                <PageMenu.Link href="#">Privacy</PageMenu.Link>
                <PageMenu.Link href="#">Toegankelijkheid</PageMenu.Link>
                <NextLink href="/" legacyBehavior passHref>
                  <PageMenu.Link>Prototypes</PageMenu.Link>
                </NextLink>
              </PageMenu>
            </Grid.Cell>
          </Grid>
        </Footer.Bottom>
      </Footer>
    </Screen>
  )
}

export default Signalen
