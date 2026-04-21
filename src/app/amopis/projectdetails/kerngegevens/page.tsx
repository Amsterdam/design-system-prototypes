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
} from '@amsterdam/design-system-react'
import { DocumentWithPencilIcon, MailIcon } from '@amsterdam/design-system-react-icons'

import { ProjectNavigation } from '../../_components/ProjectNavigation/ProjectNavigation'

function Kerngegevens() {
  return [
    <Grid key={1} paddingTop="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Breadcrumb>
          <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
          <Breadcrumb.Link href="/amopis/projecten">Projecten</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>,
    <Grid as="main" id="inhoud" key={2} paddingBottom="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={2} size="level-1">
          Kerngegevens
        </Heading>
        <Heading level={1} size="level-2">
          Brug 423 opwaardering (Berlagebrug) – ams20192715
        </Heading>
      </Grid.Cell>
      <ProjectNavigation />
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <Column gap="x-large">
          <Row align="between" alignVertical="baseline">
            <Heading level={3}>Kerngegevens</Heading>
            <LinkList>
              <LinkList.Link href="#" icon={DocumentWithPencilIcon}>
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
                  <MailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Bestuurlijk Opdrachtgever Stad</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Melanie van der Horst</span>
                  <MailIcon fill="#004469" width={24} />
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
                  <MailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Opdrachtnemer</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Erik Bakker</span>
                  <MailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Klaas Helmers</span>
                  <MailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Marjolein Boomer</span>
                  <MailIcon fill="#004469" width={24} />
                </Row>
              </DescriptionList.Description>
              <DescriptionList.Term>Projectbeheerser</DescriptionList.Term>
              <DescriptionList.Description>
                <Row style={{ justifyContent: 'space-between' }}>
                  <span>Carina Cairo</span>
                  <MailIcon fill="#004469" width={24} />
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
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 3, wide: 3 }} start={{ narrow: 1, medium: 3, wide: 10 }}>
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
      </Grid.Cell>
    </Grid>,
  ]
}

export default Kerngegevens
