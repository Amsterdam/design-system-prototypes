'use client'

import {
  Column,
  Footer,
  Grid,
  Header,
  Heading,
  Link,
  LinkList,
  PageMenu,
  Paragraph,
  Screen,
  SkipLink,
} from '@amsterdam/design-system-react'
import { ChatBubbleIcon, ChattingIcon, EmailIcon, InfoIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'

export default function DataAmsterdam({ children }) {
  return (
    <Screen className="ams-theme">
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#main">Direct naar inhoud</SkipLink>
          <Header
            appName="Data Amsterdam"
            logoLink={`${process.env.basePath}data-amsterdam`}
            logoLinkTitle="Naar de homepage van Data Amsterdam"
            links={
              <PageMenu alignEnd>
                <NextLink legacyBehavior href="/" passHref>
                  <PageMenu.Link>Prototypes</PageMenu.Link>
                </NextLink>
                <PageMenu.Link href="#">Inloggen</PageMenu.Link>
              </PageMenu>
            }
            menu={
              <button type="button" className="ams-header__menu-button">
                Menu
              </button>
            }
          />
        </Grid.Cell>
      </Grid>
      <main id="main">{children}</main>
      <Footer>
        <Footer.Top>
          <Heading inverseColor className="ams-visually-hidden">
            Colofon
          </Heading>
          <Grid gapVertical="large" paddingVertical="medium">
            <Grid.Cell span={{ narrow: 3, medium: 4, wide: 4 }}>
              <Column as="section" gap="extra-small">
                <Heading className="ams-mb--xs" inverseColor level={2} size="level-4">
                  Vragen
                </Heading>
                <Paragraph className="ams-mb--xs" inverseColor size="small">
                  Heeft u een vraag en kunt u het antwoord niet vinden op deze website? Of heeft u bevindingen? Neem dan
                  contact met ons op.
                </Paragraph>
                <LinkList>
                  <LinkList.Link href="#" icon={ChattingIcon} inverseColor size="small">
                    Veelgestelde vragen
                  </LinkList.Link>
                  <LinkList.Link href="#" icon={EmailIcon} inverseColor size="small">
                    Contact opnemen
                  </LinkList.Link>
                  <LinkList.Link href="#" icon={InfoIcon} inverseColor size="small">
                    Uitleg gebruik
                  </LinkList.Link>
                  <LinkList.Link href="#" icon={ChatBubbleIcon} inverseColor size="small">
                    Feedback geven
                  </LinkList.Link>
                </LinkList>
              </Column>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 3, medium: 4, wide: 4 }}>
              <Column as="section" gap="extra-small">
                <Heading className="ams-mb--xs" inverseColor level={2} size="level-4">
                  Colofon
                </Heading>
                <LinkList>
                  <LinkList.Link href="#" inverseColor size="small">
                    Databeleid
                  </LinkList.Link>
                  <LinkList.Link href="#" inverseColor size="small">
                    Over de organisatie
                  </LinkList.Link>
                  <LinkList.Link href="#" inverseColor size="small">
                    Over het dataplatform
                  </LinkList.Link>
                  <LinkList.Link href="#" inverseColor size="small">
                    Over deze site
                  </LinkList.Link>
                </LinkList>
              </Column>
            </Grid.Cell>
            <Grid.Cell span={{ narrow: 3, medium: 4, wide: 4 }}>
              <Column as="section" gap="extra-small">
                <Heading className="ams-mb--xs" inverseColor level={2} size="level-4">
                  Volg ons
                </Heading>
                <LinkList>
                  <LinkList.Link href="#" inverseColor size="small">
                    Nieuwsbrief i-domein inschrijven
                  </LinkList.Link>
                </LinkList>
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
                <PageMenu.Link href="#">Privacy en cookies</PageMenu.Link>
                {/* Append footer link here */}
              </PageMenu>
            </Grid.Cell>
          </Grid>
        </Footer.Bottom>
      </Footer>
    </Screen>
  )
}
