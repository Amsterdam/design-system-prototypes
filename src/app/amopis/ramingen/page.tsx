'use client'

import {
  Accordion,
  Badge,
  Breadcrumb,
  Button,
  Column,
  Grid,
  Heading,
  IconButton,
  LinkList,
  Paragraph,
  Table,
  Tabs,
} from '@amsterdam/design-system-react'
import { DocumentWithPencilIcon } from '@amsterdam/design-system-react-icons'

const tabLabels = ['Mijlpalen', 'Planfases', 'Capaciteitsraming', 'Maatregelen en acties']

function Estimation() {
  return [
    <Grid paddingTop="x-large">
      <Grid.Cell span="all">
        <Breadcrumb>
          <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Planning</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>,
    <Grid as="main" key={2} paddingBottom="x-large">
      <Grid.Cell span="all">
        <Heading level={2} size="level-1">
          Capaciteitsraming
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
            <Tabs.Panel id={label} key={label} />
          ))}
        </Tabs>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 2, wide: 2 }} start={1}>
        <div className="amopis-white-background">
          <LinkList>
            <LinkList.Link href="#">Projectdetails</LinkList.Link>
            <LinkList.Link href="#">Financiën</LinkList.Link>
            <LinkList.Link href="#">Projectstructuur</LinkList.Link>
            <LinkList.Link href="#">Kwaliteit</LinkList.Link>
            <LinkList.Link href="#">Planning</LinkList.Link>
            <LinkList.Link href="#">Risico’s</LinkList.Link>
            <LinkList.Link href="#">Logboek</LinkList.Link>
          </LinkList>
        </div>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 10 }}>
        <div className="amopis-white-background">
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
                      <Badge color="azure" label="Voorgesteld" />
                    </Table.Cell>
                    <Table.Cell>Marise Ent</Table.Cell>
                    <Table.Cell>
                      {`${new Date('2023-11-12').toLocaleDateString('nl-NL')} ${new Date('2023-11-12T11:42').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                    </Table.Cell>
                    <Table.Cell>
                      <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>2024</Table.Cell>
                    <Table.Cell>24-7</Table.Cell>
                    <Table.Cell>
                      <Badge label="Vastgesteld" />
                    </Table.Cell>
                    <Table.Cell>Klaas Helmers</Table.Cell>
                    <Table.Cell>
                      {`${new Date('2023-11-01').toLocaleDateString('nl-NL')} ${new Date('2023-11-01T15:40').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                    </Table.Cell>
                    <Table.Cell>
                      <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>2026</Table.Cell>
                    <Table.Cell>26-1</Table.Cell>
                    <Table.Cell>
                      <Badge color="yellow" label="Concept" />
                    </Table.Cell>
                    <Table.Cell>Klaas Helmers</Table.Cell>
                    <Table.Cell>
                      {`${new Date('2023-11-12').toLocaleDateString('nl-NL')} ${new Date('2023-11-12T11:42').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                    </Table.Cell>
                    <Table.Cell>
                      <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </section>
            <Accordion headingLevel={2}>
              <Accordion.Section label="Voorgaande versies van ramingen">
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
                      <Table.Cell>2024</Table.Cell>
                      <Table.Cell>24-6</Table.Cell>
                      <Table.Cell>
                        <Badge color="azure" label="Voorgesteld" />
                      </Table.Cell>
                      <Table.Cell>Marjolein Boomer</Table.Cell>
                      <Table.Cell>
                        {`${new Date('2023-10-10').toLocaleDateString('nl-NL')} ${new Date('2023-10-10T07:49').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                      </Table.Cell>
                      <Table.Cell>
                        <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2024</Table.Cell>
                      <Table.Cell>24-5</Table.Cell>
                      <Table.Cell>
                        <Badge color="azure" label="Voorgesteld" />
                      </Table.Cell>
                      <Table.Cell>Klaas Helmers</Table.Cell>
                      <Table.Cell>
                        {`${new Date('2023-09-18').toLocaleDateString('nl-NL')} ${new Date('2023-09-18T15:40').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                      </Table.Cell>
                      <Table.Cell>
                        <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2024</Table.Cell>
                      <Table.Cell>24-4</Table.Cell>
                      <Table.Cell>
                        <Badge color="azure" label="Voorgesteld" />
                      </Table.Cell>
                      <Table.Cell>Marjolein Boomer</Table.Cell>
                      <Table.Cell>
                        {`${new Date('2023-09-18').toLocaleDateString('nl-NL')} ${new Date('2023-09-18T11:42').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                      </Table.Cell>
                      <Table.Cell>
                        <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2024</Table.Cell>
                      <Table.Cell>24-3</Table.Cell>
                      <Table.Cell>
                        <Badge color="azure" label="Voorgesteld" />
                      </Table.Cell>
                      <Table.Cell>Marjolein Boomer</Table.Cell>
                      <Table.Cell>
                        {`${new Date('2023-09-17').toLocaleDateString('nl-NL')} ${new Date('2023-09-17T07:49').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                      </Table.Cell>
                      <Table.Cell>
                        <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2024</Table.Cell>
                      <Table.Cell>24-2</Table.Cell>
                      <Table.Cell>
                        <Badge color="magenta" label="Wijziging aangevraagd" />
                      </Table.Cell>
                      <Table.Cell>Marise Ent</Table.Cell>
                      <Table.Cell>
                        {`${new Date('2023-09-15').toLocaleDateString('nl-NL')} ${new Date('2023-09-15T15:40').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                      </Table.Cell>
                      <Table.Cell>
                        <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>2025</Table.Cell>
                      <Table.Cell>24-1</Table.Cell>
                      <Table.Cell>
                        <Badge color="yellow" label="Concept" />
                      </Table.Cell>
                      <Table.Cell>Klaas Helmers</Table.Cell>
                      <Table.Cell>
                        {`${new Date('2023-09-09').toLocaleDateString('nl-NL')} ${new Date('2023-09-09T11:42').toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}`}
                      </Table.Cell>
                      <Table.Cell>
                        <IconButton label="Aanpassen" svg={DocumentWithPencilIcon} />
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Accordion.Section>
            </Accordion>
            <section>
              <Button variant="primary">Maak raming aan</Button>
            </section>
          </Column>
        </div>
      </Grid.Cell>
    </Grid>,
  ]
}

export default Estimation
