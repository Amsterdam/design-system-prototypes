'use client'

import { Breadcrumb, Grid, Heading, Label, Row, Select, Table } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useState } from 'react'
import { getSortedRanking, ranking, RankingTableBody } from '../common'
import type { SortOrder } from '../common'
import '../overrides.css'

const sortOptions: Array<{ label: string; value: SortOrder }> = [
  { label: 'Positie', value: 'position-asc' },
  { label: 'Team oplopend', value: 'name-asc' },
  { label: 'Team aflopend', value: 'name-desc' },
  { label: 'Gewonnen', value: 'won-desc' },
  { label: 'Gelijk', value: 'drawn-desc' },
  { label: 'Verloren', value: 'lost-desc' },
]

export default function SorterenViaSelect() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('position-asc')
  const sortedRanking = getSortedRanking(ranking, sortOrder)

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
        <Row align="end" alignVertical="center" className="ams-mb-m" wrap>
          <Label htmlFor="sortOrder">Sorteren op</Label>
          <Select id="sortOrder" onChange={(e) => setSortOrder(e.target.value as SortOrder)} value={sortOrder}>
            {sortOptions.map(({ label, value }) => (
              <Select.Option value={value}>{label}</Select.Option>
            ))}
          </Select>
        </Row>
        <Table>
          <Table.Caption>
            <Heading className="ams-mb-m" level={2}>
              Eindstand
            </Heading>
          </Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Positie
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">Team</Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-end" scope="col">
                Gespeeld
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-end" scope="col">
                Gewonnen
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-end" scope="col">
                Gelijk
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-end" scope="col">
                Verloren
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-end" scope="col">
                Punten
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-end" scope="col">
                Doelpunten voor
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-end" scope="col">
                Doelpunten tegen
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-end" scope="col">
                Doelsaldo
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <RankingTableBody ranking={sortedRanking} />
        </Table>
      </Grid.Cell>
    </Grid>
  )
}
