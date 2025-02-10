'use client'

import { Grid, Heading, LinkList, PageHeading, Paragraph, Screen } from '@amsterdam/design-system-react'
import Link from 'next/link'

export default function Page() {
  return (
    <Screen className="ams-theme" maxWidth="wide">
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <PageHeading>Prototypes</PageHeading>
          <Heading level={2} size="level-4">
            Amsterdam Design System
          </Heading>
        </Grid.Cell>
        <Grid.Cell span="all">
          <LinkList>
            <Link href="/amopis" legacyBehavior passHref>
              <LinkList.Link>Amopis</LinkList.Link>
            </Link>
            <Link href="/amsterdam" legacyBehavior passHref>
              <LinkList.Link>Amsterdam</LinkList.Link>
            </Link>
            <Link href="/signalen" legacyBehavior passHref>
              <LinkList.Link>Signalen</LinkList.Link>
            </Link>
            {/* Append route import here */}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span="all">
          <details className="ams-details">
            <summary className="ams-mb--xs">Kickstart your own</summary>
            <Paragraph size="small">
              <code>
                git clone git@github.com:Amsterdam/design-system-prototypes.git
                <br />
                cd design-system-prototypes
                <br />
                npm install
                <br />
                npm run add site &apos;Site name&apos;
                <br />
                npm run add page &apos;Site name&apos; &apos;Page name&apos;
                <br />
                npm run dev
              </code>
            </Paragraph>
          </details>
        </Grid.Cell>
      </Grid>
    </Screen>
  )
}
