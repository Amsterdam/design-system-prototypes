'use client'

import { Breadcrumb, Grid, Heading, IconButton, Row, Table } from '@amsterdam/design-system-react'
import { ArrowDownIcon, ArrowUpIcon } from '@amsterdam/design-system-react-icons'
import NextLink from 'next/link'
import { useState } from 'react'
import type { SortOrder, Team } from '../common'
import { getSortedRanking, ranking, RankingTableBody } from '../common'

export default function SorterenViaButtons() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('position-asc')
  const sortedRanking = getSortedRanking(ranking, sortOrder)

  const SortableHeader = ({ field, header }: { field: keyof Team; header: string }) => (
    <Row alignVertical="center" gap="x-small">
      {header}
      <IconButton
        label={sortOrder === `${field}-asc` ? 'Sorteer aflopend' : 'Sorteer oplopend'}
        onClick={() => setSortOrder(sortOrder === `${field}-asc` ? `${field}-desc` : `${field}-asc`)}
        size="small"
        svg={sortOrder === `${field}-asc` ? ArrowDownIcon : ArrowUpIcon}
      />
    </Row>
  )

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
        <Table>
          <Table.Caption>
            <Heading className="ams-mb-m" level={2}>
              Eindstand
            </Heading>
          </Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <SortableHeader field="position" header="Positie" />
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-start" scope="col">
                <SortableHeader field="name" header="Team" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <SortableHeader field="played" header="Gespeeld" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <SortableHeader field="won" header="Gewonnen" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <SortableHeader field="drawn" header="Gelijk" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <SortableHeader field="lost" header="Verloren" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <SortableHeader field="points" header="Punten" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <SortableHeader field="goals_for" header="Doelpunten voor" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <SortableHeader field="goals_against" header="Doelpunten tegen" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <SortableHeader field="goal_difference" header="Doelsaldo" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <RankingTableBody ranking={sortedRanking} />
        </Table>
      </Grid.Cell>
    </Grid>
  )
}
