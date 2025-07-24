'use client'

import { Grid, Heading, LinkList } from '@amsterdam/design-system-react'
import '@amsterdam/design-system-tokens/dist/compact.theme.css'
import './overrides.css'
import NextLink from 'next/link'

export default function HomePage() {
  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span="all">
        <Heading level={1} className="ams-mb-xl">
          Rijke tabellen
        </Heading>
        <LinkList>
          <NextLink href="/rijke-tabellen/sorteren-via-select" legacyBehavior passHref>
            <LinkList.Link>Sorteren via Select</LinkList.Link>
          </NextLink>
          <NextLink href="/rijke-tabellen/sorteren-via-buttons" legacyBehavior passHref>
            <LinkList.Link>Sorteren via Buttons</LinkList.Link>
          </NextLink>
          <NextLink href="/rijke-tabellen/filteren-op-tekst" legacyBehavior passHref>
            <LinkList.Link>Filteren op tekst</LinkList.Link>
          </NextLink>
          <NextLink href="/rijke-tabellen/pagineren" legacyBehavior passHref>
            <LinkList.Link>Pagineren</LinkList.Link>
          </NextLink>
        </LinkList>
      </Grid.Cell>
    </Grid>
  )
}
