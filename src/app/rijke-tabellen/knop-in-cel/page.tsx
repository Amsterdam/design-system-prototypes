'use client'

import { Breadcrumb, Grid, Heading, IconButton, Row, Table } from '@amsterdam/design-system-react'
import { PencilIcon, TrashBinIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'
import { useState } from 'react'
import { ranking } from '../common'

export default function KnopInCel() {
  const [deleted, setDeleted] = useState<number[]>([])
  const filteredRanking = ranking.filter((team) => !deleted.includes(team.position))

  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span="all">
        <Breadcrumb>
          <NextLink href="/rijke-tabellen" legacyBehavior passHref>
            <Breadcrumb.Link>Rijke tabellen</Breadcrumb.Link>
          </NextLink>
        </Breadcrumb>
        <Heading level={1} className="ams-mb-xl">
          Eredivisie 2024/2025
        </Heading>
        <Table className="ams-mb-m">
          <Table.Caption>
            <Heading className="ams-mb-m" level={2}>
              Eindstand
            </Heading>
          </Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">Positie</Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-start" scope="col">
                Team
              </Table.HeaderCell>
              <Table.HeaderCell scope="col" />
              <Table.HeaderCell scope="col">Gespeeld</Table.HeaderCell>
              <Table.HeaderCell scope="col">Gewonnen</Table.HeaderCell>
              <Table.HeaderCell scope="col">Gelijk</Table.HeaderCell>
              <Table.HeaderCell scope="col">Verloren</Table.HeaderCell>
              <Table.HeaderCell scope="col">Punten</Table.HeaderCell>
              <Table.HeaderCell scope="col">Doelpunten voor</Table.HeaderCell>
              <Table.HeaderCell scope="col">Doelpunten tegen</Table.HeaderCell>
              <Table.HeaderCell scope="col">Doelsaldo</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredRanking.length ? (
              filteredRanking.map(
                ({ drawn, goal_difference, goals_against, goals_for, lost, name, played, points, position, won }) => (
                  <Table.Row key={position}>
                    <Table.HeaderCell scope="row">{position}</Table.HeaderCell>
                    <Table.Cell className="ams-table__cell--align-start ams-table__cell--nowrap">{name}</Table.Cell>
                    <Table.Cell>
                      <Row gap="none">
                        <IconButton label="Bewerken" onClick={() => void 0} svg={PencilIcon} />
                        <IconButton
                          label="Verwijderen"
                          onClick={() => setDeleted([position, ...deleted])}
                          svg={TrashBinIcon}
                        />
                      </Row>
                    </Table.Cell>
                    <Table.Cell>{played}</Table.Cell>
                    <Table.Cell>{won}</Table.Cell>
                    <Table.Cell>{drawn}</Table.Cell>
                    <Table.Cell>{lost}</Table.Cell>
                    <Table.Cell>{points}</Table.Cell>
                    <Table.Cell>{goals_for}</Table.Cell>
                    <Table.Cell>{goals_against}</Table.Cell>
                    <Table.Cell>{goal_difference}</Table.Cell>
                  </Table.Row>
                ),
              )
            ) : (
              <Table.Row>
                <Table.Cell colSpan={11}>Geen gegevens</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Grid.Cell>
    </Grid>
  )
}
