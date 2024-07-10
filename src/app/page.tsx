'use client'

import {
  Grid,
  Heading,
  LinkList,
  PageHeading,
  Screen,
  Link as ADSLink,
  Paragraph,
} from '@amsterdam/design-system-react'
import Link from 'next/link'

export default function Page() {
  return (
    <Screen className="ams-theme" maxWidth="wide">
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <PageHeading>Prototypes</PageHeading>
          <Heading level={2} size="level-4" className="ams-mb--md">
            Amsterdam Design System
          </Heading>
          <LinkList>
            <Link legacyBehavior href="/amopis" passHref>
              <LinkList.Link>Amopis</LinkList.Link>
            </Link>
            <Link legacyBehavior href="/amsterdam" passHref>
              <LinkList.Link>Amsterdam</LinkList.Link>
            </Link>
            <Link legacyBehavior href="/signalen" passHref>
              <LinkList.Link>Signalen</LinkList.Link>
            </Link>
            <Link legacyBehavior href="/about" passHref>
              <LinkList.Link>Next Link to About</LinkList.Link>
            </Link>
          </LinkList>

          <Paragraph>
            <ADSLink href="/about">ADS Link to About</ADSLink>
          </Paragraph>
        </Grid.Cell>
      </Grid>
    </Screen>
  )
}
