'use client'

import { Grid, Heading, LinkList, Page, Paragraph } from '@amsterdam/design-system-react'
import NextLink from 'next/link'

export default function Signalen() {
  return (
    <Page className="ams-theme">
      <Grid paddingVertical="2x-large">
        <Grid.Cell span="all">
          <Heading level={1}>Prototypes</Heading>
          <Heading level={2} size="level-3">
            Amsterdam Design System
          </Heading>
        </Grid.Cell>
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="/afspraak-maken" linkComponent={NextLink}>
              Afspraak maken
            </LinkList.Link>
            <LinkList.Link href="/amopis" linkComponent={NextLink}>
              Amopis
            </LinkList.Link>
            <LinkList.Link href="/amsterdam" linkComponent={NextLink}>
              Amsterdam
            </LinkList.Link>
            <LinkList.Link href="/signalen" linkComponent={NextLink}>
              Signalen
            </LinkList.Link>
            {/* Append route import here */}
            <LinkList.Link href="/camping-vliegenbos" linkComponent={NextLink}>
              Camping Vliegenbos
            </LinkList.Link>
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
