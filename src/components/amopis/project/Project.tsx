import '../amopis.css'
import {
  AspectRatio,
  Breadcrumb,
  Grid,
  Heading,
  Image,
  Link,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react'
import { ChattingIcon, EditDocumentIcon, EmailIcon } from '@amsterdam/design-system-react-icons'

export const Project = () => (
  <Grid density="high" paddingVertical="small">
    <Grid.Cell fullWidth>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projecten</Breadcrumb.Item>
      </Breadcrumb>
      <Heading>Kerngegevens</Heading>
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
        <UnorderedList markers={false}>
          <UnorderedList.Item>
            <Link icon={ChattingIcon} href="#" variant="inList" style={{ paddingInline: '1rem' }}>
              Project&shy;details
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link icon={ChattingIcon} href="#" variant="inList" style={{ paddingInline: '1rem' }}>
              Financiën
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link icon={ChattingIcon} href="#" variant="inList" style={{ paddingInline: '1rem' }}>
              Project&shy;structuur
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link icon={ChattingIcon} href="#" variant="inList" style={{ paddingInline: '1rem' }}>
              Kwaliteit
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link icon={ChattingIcon} href="#" variant="inList" style={{ paddingInline: '1rem' }}>
              Planning
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link icon={ChattingIcon} href="#" variant="inList" style={{ paddingInline: '1rem' }}>
              Risisco’s
            </Link>
          </UnorderedList.Item>
          <UnorderedList.Item>
            <Link icon={ChattingIcon} href="#" variant="inList" style={{ paddingInline: '1rem' }}>
              Logboek
            </Link>
          </UnorderedList.Item>
        </UnorderedList>
      </div>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
      <div className="amopis-white-background" style={{ padding: '1rem' }}>
        <div className="amsterdam-column amsterdam-gap-md">
          <div className="amsterdam-row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
            <Heading level={3}>Kerngegevens</Heading>
            <Link icon={EditDocumentIcon} variant="inList">
              Wijzig kerngegevens
            </Link>
          </div>
          <Heading level={3}>Opdrachtgevers</Heading>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 24px', gap: '1rem' }}>
            <Paragraph>Ambtelijk opdrachtgever</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Marise Ent</Paragraph>
            <EmailIcon width={24} fill="#004469" />
            <Paragraph>Bestuurlijk Opdrachtgever Stad</Paragraph>
            <Paragraph style={{ fontWeight: 'bold' }}>Melanie van der Horst</Paragraph>
            <EmailIcon width={24} fill="#004469" />
          </div>
          <Heading level={3}>Opdrachtnemers</Heading>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 24px', gap: '1rem' }}>
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
          </div>
          <Heading level={3}>Basisgegevens</Heading>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 24px', gap: '1rem' }}>
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
          </div>
        </div>
      </div>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 3, wide: 3 }} start={{ narrow: 1, medium: 3, wide: 10 }}>
      <div className="amopis-white-background" style={{ padding: '1rem' }}>
        <div className="amsterdam-column amsterdam-gap-md">
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
        </div>
      </div>
    </Grid.Cell>
  </Grid>
)
