import '../amopis.css'
import {
  AspectRatio,
  Breadcrumb,
  Column,
  Grid,
  Heading,
  Image,
  Link,
  LinkList,
  Paragraph,
} from '@amsterdam/design-system-react'
import { ChattingIcon, EditDocumentIcon, EmailIcon } from '@amsterdam/design-system-react-icons'

export const Project = () => (
  <Grid paddingVertical="medium">
    <Grid.Cell span="all">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projecten</Breadcrumb.Item>
      </Breadcrumb>
      <Heading className="amsterdam-mb--sm">Kerngegevens</Heading>
      <Heading level={2}>Brug 423 opwaardering (Berlagebrug) – ams20192715</Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 3 }}>
      <div
        className="amopis-white-background"
        style={{ padding: '.5rem 1rem', borderBottom: '2px solid var(--amsterdam-color-primary-blue)' }}
      >
        <Link>
          Overzicht &nbsp; | &nbsp; Kerngegevens &nbsp; | &nbsp; Projectinformatie &nbsp; | &nbsp; Projectgrenzen &nbsp;
          | &nbsp; Projectcodes &nbsp; | &nbsp; Autorisaties
        </Link>
      </div>
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
          <div className="amsterdam-row amsterdam-row--align-between amsterdam-row--valign-baseline">
            <Heading level={3}>Kerngegevens</Heading>
            <LinkList>
              <LinkList.Link href="#" icon={EditDocumentIcon}>
                Wijzig kerngegevens
              </LinkList.Link>
            </LinkList>
          </div>
          <section className="amopis-project-details-grid">
            <Heading level={4} style={{ gridColumn: '1 / -1' }}>
              Opdrachtgevers
            </Heading>
            <Paragraph>Ambtelijk opdrachtgever</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Marise Ent</Paragraph>
            <EmailIcon width={24} fill="#004469" />
            <Paragraph>Bestuurlijk Opdrachtgever Stad</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Melanie van der Horst</Paragraph>
            <EmailIcon width={24} fill="#004469" />
          </section>
          <section className="amopis-project-details-grid">
            <Heading level={4} style={{ gridColumn: '1 / -1' }}>
              Opdrachtnemers
            </Heading>
            <Paragraph>Accounthouder</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Paul Brouwer</Paragraph>
            <EmailIcon width={24} fill="#004469" />
            <Paragraph>Opdrachtnemer</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Erik Bakker</Paragraph>
            <EmailIcon width={24} fill="#004469" />
            <Paragraph>Projectbeheerser</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Klaas Helmers</Paragraph>
            <EmailIcon width={24} fill="#004469" />
            <Paragraph>Projectbeheerser</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Marjolein Boomer</Paragraph>
            <EmailIcon width={24} fill="#004469" />
            <Paragraph>Projectbeheerser</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Carina Cairo</Paragraph>
            <EmailIcon width={24} fill="#004469" />
          </section>
          <section className="amopis-project-details-grid">
            <Heading level={4} style={{ gridColumn: '1 / -1' }}>
              Basisgegevens
            </Heading>
            <Paragraph>Gebied</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Gemeente Amsterdam</Paragraph>
            <span />
            <Paragraph>Stadsdeel</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Amsterdam</Paragraph>
            <span />
            <Paragraph>Stadsdeel</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Amsterdam</Paragraph>
            <span />
            <Paragraph>Status</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Actief</Paragraph>
            <span />
            <Paragraph>Projectsoort</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Programma Bruggen</Paragraph>
            <span />
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
