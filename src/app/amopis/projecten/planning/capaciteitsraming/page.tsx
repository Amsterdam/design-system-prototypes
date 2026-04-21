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
  Paragraph,
  Table,
} from '@amsterdam/design-system-react'
import { DocumentWithPencilIcon } from '@amsterdam/design-system-react-icons'

import { ProjectNavigation } from '../../_components/ProjectNavigation/ProjectNavigation'

function Capaciteitsraming() {
  return [
    <Grid key={1} paddingTop="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Breadcrumb>
          <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Planning</Breadcrumb.Link>
        </Breadcrumb>
      </Grid.Cell>
    </Grid>,
    <Grid as="main" id="inhoud" key={2} paddingBottom="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={2} size="level-1">
          Capaciteitsraming
        </Heading>
        <Heading level={1} size="level-2">
          Brug 423 opwaardering (Berlagebrug) – ams20192715
        </Heading>
      </Grid.Cell>
      <ProjectNavigation />
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 10 }}>
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
      </Grid.Cell>
    </Grid>,
  ]
}

export default Capaciteitsraming
