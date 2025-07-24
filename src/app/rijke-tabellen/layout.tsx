'use client'

import { PropsWithChildren, useState } from 'react'
import {
  Grid,
  Heading,
  Logo,
  Page,
  PageFooter,
  PageHeader,
  Paragraph,
  Row,
  SkipLink,
  Switch,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'

export default function RijkeTabellen({ children }: PropsWithChildren) {
  const [compactMode, setCompactMode] = useState(false)

  return (
    <Page className={['ams-theme', compactMode ? 'ams-theme--compact' : undefined].join(' ')}>
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#main">Direct naar inhoud</SkipLink>
        </Grid.Cell>
      </Grid>
      <PageHeader
        logoLink={`${process.env.basePath}rijke-tabellen`}
        logoLinkTitle="Naar de homepage van Rijke tabellen"
        logoLinkComponent={() => (
          <NextLink href={`${process.env.basePath}rijke-tabellen`}>
            <Logo />
          </NextLink>
        )}
      />
      <main id="main">{children}</main>
      <PageFooter>
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <NextLink href="/" legacyBehavior passHref>
            <PageFooter.MenuLink>Prototypes</PageFooter.MenuLink>
          </NextLink>
          <li>
            <Row gap="small">
              <Paragraph size="small">Compact</Paragraph>
              <Switch checked={compactMode} onChange={() => setCompactMode(!compactMode)} />
            </Row>
          </li>
          {/* Append footer link here */}
        </PageFooter.Menu>
      </PageFooter>
    </Page>
  )
}
