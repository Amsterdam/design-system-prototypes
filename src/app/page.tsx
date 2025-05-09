'use client'

import { Grid, Heading, LinkList, PageHeading, Paragraph, Page } from '@amsterdam/design-system-react'
import NextLink from 'next/link'

export default function () {
  return (
    <Page className="ams-theme">
      <Grid paddingVertical="2x-large">
        <Grid.Cell span="all">
          <PageHeading>Prototypes</PageHeading>
          <Heading level={2} size="level-4">
            Amsterdam Design System
          </Heading>
        </Grid.Cell>
        <Grid.Cell span="all">
          <LinkList>
            <NextLink href="/amopis" legacyBehavior passHref>
              <LinkList.Link>Amopis</LinkList.Link>
            </NextLink>
            <NextLink href="/amsterdam" legacyBehavior passHref>
              <LinkList.Link>Amsterdam</LinkList.Link>
            </NextLink>
            <NextLink href="/signalen" legacyBehavior passHref>
              <LinkList.Link>Signalen</LinkList.Link>
            </NextLink>
            {/* Append route import here */}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span="all">
          <details className="ams-details">
            <summary className="ams-mb-s">Kickstart your own</summary>
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
    </Page>
  )
}
