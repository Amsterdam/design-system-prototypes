import '../amopis.css'
import {
  Accordion,
  Badge,
  Breadcrumb,
  Column,
  Grid,
  Heading,
  IconButton,
  LinkList,
  Paragraph,
  Table,
  Tabs,
} from '@amsterdam/design-system-react'
import { ChattingIcon, DocumentEditIcon } from '@amsterdam/design-system-react-icons'

const tabLabels = ['Mijlpalen', 'Planfases', 'Capaciteitsraming', 'Maatregelen en acties']

export const Estimation = () => (
  <Grid paddingVertical="medium">
    <Grid.Cell span="all">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Planning</Breadcrumb.Item>
      </Breadcrumb>
      <Heading className="ams-mb--sm">Capaciteitsraming</Heading>
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
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 10 }}>
      <div className="amopis-white-background" style={{ padding: '1rem' }}>
        <Column>
          <section>
            <Heading level={3}>Ramingen</Heading>
            <Paragraph>Hier staan alle ramingen voor dit project.</Paragraph>
          </section>
          <section>
            <Heading level={4} style={{ gridColumn: '1 / -1' }}>
              Actuele ramingen
            </Heading>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Raming</Table.HeaderCell>
                  <Table.HeaderCell>Versie</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>In behandeling bij</Table.HeaderCell>
                  <Table.HeaderCell>Laatste wijziging</Table.HeaderCell>
                  <Table.HeaderCell>Acties</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>2025</Table.Cell>
                  <Table.Cell>25-2</Table.Cell>
                  <Table.Cell>
                    <Badge label="Voorgesteld" color="blue" />
                  </Table.Cell>
                  <Table.Cell>Marise Ent</Table.Cell>
                  <Table.Cell>
                    {`${new Date('12-11-2023').toLocaleDateString('nl-NL')} ${new Date('2023-11-12T11:42').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                  </Table.Cell>
                  <Table.Cell>
                    <IconButton label="Aanpassen" svg={DocumentEditIcon} />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2024</Table.Cell>
                  <Table.Cell>24-7</Table.Cell>
                  <Table.Cell>
                    <Badge label="Vastgesteld" color="dark-green" />
                  </Table.Cell>
                  <Table.Cell>Klaas Helmers</Table.Cell>
                  <Table.Cell>
                    {`${new Date('01-11-2023').toLocaleDateString('nl-NL')} ${new Date('2023-11-01T15:40').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                  </Table.Cell>
                  <Table.Cell>
                    <IconButton label="Aanpassen" svg={DocumentEditIcon} />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>2026</Table.Cell>
                  <Table.Cell>26-1</Table.Cell>
                  <Table.Cell>
                    <Badge label="Concept" color="yellow" />
                  </Table.Cell>
                  <Table.Cell>Klaas Helmers</Table.Cell>
                  <Table.Cell>
                    {`${new Date('12-11-2023').toLocaleDateString('nl-NL')} ${new Date('2023-11-12T11:42').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                  </Table.Cell>
                  <Table.Cell>
                    <IconButton label="Aanpassen" svg={DocumentEditIcon} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </section>
        </Column>
      </div>
    </Grid.Cell>
  </Grid>
)
