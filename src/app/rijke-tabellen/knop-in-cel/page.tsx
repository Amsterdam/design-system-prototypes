'use client'

import { Breadcrumb, Grid, Heading, IconButton, Row, Table } from '@amsterdam/design-system-react'
import { PencilIcon, TrashBinIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'
import { useState } from 'react'

import { ranking } from '../common'

export default function KnopInCel() {
  const [deleted, setDeleted] = useState<number[]>([])
  const filteredRanking = ranking.filter((team) => !deleted.includes(team.positie))

  return (
    <Grid paddingBottom="x-large">
      <Grid.Cell span="all">
        <Breadcrumb>
          <NextLink href="/rijke-tabellen" legacyBehavior passHref>
            <Breadcrumb.Link>Rijke tabellen</Breadcrumb.Link>
          </NextLink>
        </Breadcrumb>
        <Heading className="ams-mb-xl" level={1}>
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
                ({
                  doelpunten_tegen,
                  doelpunten_voor,
                  doelsaldo,
                  gelijk,
                  gespeeld,
                  gewonnen,
                  positie,
                  punten,
                  team,
                  verloren,
                }) => (
                  <Table.Row key={positie}>
                    <Table.HeaderCell scope="row">{positie}</Table.HeaderCell>
                    <Table.Cell className="ams-table__cell--align-start ams-table__cell--nowrap">{team}</Table.Cell>
                    <Table.Cell>
                      <Row gap="none">
                        <IconButton label="Bewerken" onClick={() => void 0} svg={PencilIcon} />
                        <IconButton
                          label="Verwijderen"
                          onClick={() => setDeleted([positie, ...deleted])}
                          svg={TrashBinIcon}
                        />
                      </Row>
                    </Table.Cell>
                    <Table.Cell>{gespeeld}</Table.Cell>
                    <Table.Cell>{gewonnen}</Table.Cell>
                    <Table.Cell>{gelijk}</Table.Cell>
                    <Table.Cell>{verloren}</Table.Cell>
                    <Table.Cell>{punten}</Table.Cell>
                    <Table.Cell>{doelpunten_voor}</Table.Cell>
                    <Table.Cell>{doelpunten_tegen}</Table.Cell>
                    <Table.Cell>{doelsaldo}</Table.Cell>
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
