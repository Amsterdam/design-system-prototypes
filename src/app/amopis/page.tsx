'use client'

import {
  AspectRatio,
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

const Project = () => (
  <Grid paddingVertical="medium">
    <Grid.Cell span="all">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projecten</Breadcrumb.Item>
      </Breadcrumb>
      <Heading className="ams-mb--sm">Kerngegevens</Heading>
      <Heading level={2}>Brug 423 opwaardering (Berlagebrug) – ams20192715</Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
      <Tabs>
        <Tabs.List>
          {tabLabels.map((label, index) => (
            <Tabs.Button tab={index} key={index}>
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
          <div className="ams-row ams-row--align-between ams-row--valign-baseline">
            <Heading level={3}>Kerngegevens</Heading>
            <LinkList>
              <LinkList.Link href="#" icon={EditDocumentIcon}>
                Wijzig kerngegevens
              </LinkList.Link>
            </LinkList>
          </div>
          <section>
            <Heading level={4} className="ams-mb--sm">
              Opdrachtgevers
            </Heading>
            <DescriptionList>
              <DescriptionList.Term>Ambtelijk opdrachtgever</DescriptionList.Term>
              <DescriptionList.Details>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Marise Ent</span>
                  <EmailIcon width={24} fill="#004469" />
                </Row>
              </DescriptionList.Details>
              <DescriptionList.Term>Bestuurlijk Opdrachtgever Stad</DescriptionList.Term>
              <DescriptionList.Details>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Melanie van der Horst</span>
                  <EmailIcon width={24} fill="#004469" />
                </Row>
              </DescriptionList.Details>
            </DescriptionList>
          </section>
          <section>
            <Heading level={4} className="ams-mb--sm">
              Opdrachtnemers
            </Heading>
            <DescriptionList>
              <DescriptionList.Term>Accounthouder</DescriptionList.Term>
              <DescriptionList.Details>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Paul Brouwer</span>
                  <EmailIcon width={24} fill="#004469" />
                </Row>
              </DescriptionList.Details>
              <DescriptionList.Term>Opdrachtnemer</DescriptionList.Term>
              <DescriptionList.Details>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Erik Bakker</span>
                  <EmailIcon width={24} fill="#004469" />
                </Row>
              </DescriptionList.Details>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Details>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Klaas Helmers</span>
                  <EmailIcon width={24} fill="#004469" />
                </Row>
              </DescriptionList.Details>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Details>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Marjolein Boomer</span>
                  <EmailIcon width={24} fill="#004469" />
                </Row>
              </DescriptionList.Details>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Details>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Carina Cairo</span>
                  <EmailIcon width={24} fill="#004469" />
                </Row>
              </DescriptionList.Details>
            </DescriptionList>
          </section>
          <section>
            <Heading level={4} className="ams-mb--sm">
              Basisgegevens
            </Heading>
            <DescriptionList>
              <DescriptionList.Term>Gebied</DescriptionList.Term>
              <DescriptionList.Details>Gemeente Amsterdam</DescriptionList.Details>
              <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
              <DescriptionList.Details>Amsterdam</DescriptionList.Details>
              <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
              <DescriptionList.Details>Amsterdam</DescriptionList.Details>
              <DescriptionList.Term>Status</DescriptionList.Term>
              <DescriptionList.Details>Actief</DescriptionList.Details>
              <DescriptionList.Term>Projectsoort</DescriptionList.Term>
              <DescriptionList.Details>Programma Bruggen</DescriptionList.Details>
            </DescriptionList>
          </section>
        </Column>
      </div>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 3, wide: 3 }} start={{ narrow: 1, medium: 3, wide: 10 }}>
      <div className="amopis-white-background" style={{ padding: '1rem' }}>
        <Column gap="small">
          <div>
            <AspectRatio ratio="x-wide">
              <Image alt="" src="https://picsum.photos/900/720?random=1" />
            </AspectRatio>
            <Paragraph>
              Impressie Brug 423 &nbsp; <Link variant="inline">Afbeelding wijzigen</Link>
            </Paragraph>
          </div>
          <div>
            <AspectRatio ratio="x-wide">
              <Image alt="" src="https://picsum.photos/900/720?random=2" />
            </AspectRatio>
            <Paragraph>
              Locatie Brug 423 &nbsp; <Link variant="inline">Bekijk op datapunt.nl</Link>
            </Paragraph>
          </div>
        </Column>
      </div>
    </Grid.Cell>
  </Grid>
)

export default Project
