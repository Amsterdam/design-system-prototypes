'use client'

import {
  Breadcrumb,
  Column,
  DescriptionList,
  Grid,
  Heading,
  Image,
  Link,
  LinkList,
  Paragraph,
  Row,
  Tabs,
} from '@amsterdam/design-system-react'
import { ChattingIcon, EditDocumentIcon, EmailIcon } from '@amsterdam/design-system-react-icons'

const tabLabels = ['Overzicht', 'Kerngegevens', 'Projectinformatie', 'Projectgrenzen', 'Projectcodes', 'Autorisaties']

function Project() {
  return (
    <Grid paddingVertical="x-large">
      <Grid.Cell span="all">
        <Breadcrumb>
          <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
        </Breadcrumb>
        <Heading level={2} size="level-1">
          Kerngegevens
        </Heading>
        <Heading level={1} size="level-2">
          Brug 423 opwaardering (Berlagebrug) – ams20192715
        </Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
        <Tabs>
          <Tabs.List>
            {tabLabels.map((label) => (
              <Tabs.Button aria-controls={label} key={label}>
                {label}
              </Tabs.Button>
            ))}
          </Tabs.List>
          {tabLabels.map((label) => (
            <Tabs.Panel id={label} />
          ))}
        </Tabs>
      </Grid.Cell>
      <Grid.Cell start={1} span={{ narrow: 4, medium: 2, wide: 2 }}>
        <div className="amopis-white-background">
          <LinkList>
            <LinkList.Link href="#" icon={ChattingIcon}>
              Projectdetails
            </LinkList.Link>
            <LinkList.Link href="#" icon={ChattingIcon}>
              Financiën
            </LinkList.Link>
            <LinkList.Link href="#" icon={ChattingIcon}>
              Projectstructuur
            </LinkList.Link>
            <LinkList.Link href="#" icon={ChattingIcon}>
              Kwaliteit
            </LinkList.Link>
            <LinkList.Link href="#" icon={ChattingIcon}>
              Planning
            </LinkList.Link>
            <LinkList.Link href="#" icon={ChattingIcon}>
              Risico’s
            </LinkList.Link>
            <LinkList.Link href="#" icon={ChattingIcon}>
              Logboek
            </LinkList.Link>
          </LinkList>
        </div>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <div className="amopis-white-background">
          <Column gap="x-large">
            <Row align="between" alignVertical="baseline">
              <Heading level={3}>Kerngegevens</Heading>
              <LinkList>
                <LinkList.Link href="#" icon={EditDocumentIcon}>
                  Wijzig kerngegevens
                </LinkList.Link>
              </LinkList>
            </Row>
            <section>
              <Heading className="ams-mb-m" level={4}>
                Opdrachtgevers
              </Heading>
              <DescriptionList termsWidth="medium">
                <DescriptionList.Term>Ambtelijk opdrachtgever</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <span>Marise Ent</span>
                    <EmailIcon width={24} fill="#004469" />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Bestuurlijk Opdrachtgever Stad</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <span>Melanie van der Horst</span>
                    <EmailIcon width={24} fill="#004469" />
                  </Row>
                </DescriptionList.Description>
              </DescriptionList>
            </section>
            <section>
              <Heading className="ams-mb-m" level={4}>
                Opdrachtnemers
              </Heading>
              <DescriptionList termsWidth="medium">
                <DescriptionList.Term>Accounthouder</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <span>Paul Brouwer</span>
                    <EmailIcon width={24} fill="#004469" />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Opdrachtnemer</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <span>Erik Bakker</span>
                    <EmailIcon width={24} fill="#004469" />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <span>Klaas Helmers</span>
                    <EmailIcon width={24} fill="#004469" />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <span>Marjolein Boomer</span>
                    <EmailIcon width={24} fill="#004469" />
                  </Row>
                </DescriptionList.Description>
                <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
                <DescriptionList.Description>
                  <Row style={{ justifyContent: 'space-between' }}>
                    <span>Carina Cairo</span>
                    <EmailIcon width={24} fill="#004469" />
                  </Row>
                </DescriptionList.Description>
              </DescriptionList>
            </section>
            <section>
              <Heading className="ams-mb-m" level={4}>
                Basisgegevens
              </Heading>
              <DescriptionList termsWidth="medium">
                <DescriptionList.Term>Gebied</DescriptionList.Term>
                <DescriptionList.Description>Gemeente Amsterdam</DescriptionList.Description>
                <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
                <DescriptionList.Description>Amsterdam</DescriptionList.Description>
                <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
                <DescriptionList.Description>Amsterdam</DescriptionList.Description>
                <DescriptionList.Term>Status</DescriptionList.Term>
                <DescriptionList.Description>Actief</DescriptionList.Description>
                <DescriptionList.Term>Projectsoort</DescriptionList.Term>
                <DescriptionList.Description>Programma Bruggen</DescriptionList.Description>
              </DescriptionList>
            </section>
          </Column>
        </div>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 3, wide: 3 }} start={{ narrow: 1, medium: 3, wide: 10 }}>
        <div className="amopis-white-background">
          <Column>
            <Column gap="x-small">
              <Image alt="" src="https://picsum.photos/900/720?random=1" />
              <Paragraph>
                Impressie Brug 423 &nbsp; <Link href="#">Afbeelding wijzigen</Link>
              </Paragraph>
            </Column>
            <Column gap="x-small">
              <Image alt="" src="https://picsum.photos/900/720?random=2" />
              <Paragraph>
                Locatie Brug 423 &nbsp; <Link href="#">Bekijk op datapunt.nl</Link>
              </Paragraph>
            </Column>
          </Column>
        </div>
      </Grid.Cell>
    </Grid>
  )
}

export default Project
