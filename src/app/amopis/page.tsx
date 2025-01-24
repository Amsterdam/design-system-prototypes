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
    <Grid paddingVertical="medium">
      <Grid.Cell span="all">
        <Breadcrumb>
          <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
        </Breadcrumb>
        <Heading className="ams-mb--sm">Kerngegevens</Heading>
        <Heading level={2}>Brug 423 opwaardering (Berlagebrug) – ams20192715</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
        <Tabs>
          <Tabs.List>
            {tabLabels.map((label, index) => (
              <Tabs.Button tab={index} key={label}>
                {label}
              </Tabs.Button>
            ))}
          </Tabs.List>
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
              Risisco’s
            </LinkList.Link>
            <LinkList.Link href="#" icon={ChattingIcon}>
              Logboek
            </LinkList.Link>
          </LinkList>
        </div>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <div className="amopis-white-background" style={{ padding: '1rem' }}>
          <Column>
            <Row align="between" alignVertical="baseline">
              <Heading level={3}>Kerngegevens</Heading>
              <LinkList>
                <LinkList.Link href="#" icon={EditDocumentIcon}>
                  Wijzig kerngegevens
                </LinkList.Link>
              </LinkList>
            </Row>
            <section>
              <Heading level={4} className="ams-mb--sm">
                Opdrachtgevers
              </Heading>
              <DescriptionList termsWidth="md">
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
              <Heading level={4} className="ams-mb--sm">
                Opdrachtnemers
              </Heading>
              <DescriptionList termsWidth="md">
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
              <Heading level={4} className="ams-mb--sm">
                Basisgegevens
              </Heading>
              <DescriptionList termsWidth="md">
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
        <div className="amopis-white-background" style={{ padding: '1rem' }}>
          <Column gap="small">
            <div>
              <Image alt="" src="https://picsum.photos/900/720?random=1" />
              <Paragraph>
                Impressie Brug 423 &nbsp; <Link variant="inline">Afbeelding wijzigen</Link>
              </Paragraph>
            </div>
            <div>
              <Image alt="" src="https://picsum.photos/900/720?random=2" />
              <Paragraph>
                Locatie Brug 423 &nbsp; <Link variant="inline">Bekijk op datapunt.nl</Link>
              </Paragraph>
            </div>
          </Column>
        </div>
      </Grid.Cell>
    </Grid>
  )
}

export default Project
