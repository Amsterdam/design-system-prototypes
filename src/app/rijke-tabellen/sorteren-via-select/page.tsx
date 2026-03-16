'use client'

import { Breadcrumb, Grid, Heading, Label, Row, Select, Table } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useState } from 'react'

import type { SortOrder } from '../common'

import { getSortedRanking, ranking, RankingTableBody } from '../common'
import { RankingTableHeaderRow } from '../common/RankingTableHeaderRow'

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
        <Heading className="ams-mb-xl" level={1}>
          Eredivisie 2024/2025
        </Heading>
        <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
          <Heading id="tabel-eindstand" level={2}>
            Eindstand
          </Heading>
          <div>
            <Label htmlFor="sortOrder">Sorteren op</Label>
            <Select
              id="sortOrder"
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
              value={sortOrder}
            >
              {sortOptions.map(({ label, value }) => (
                <Select.Option key={value} value={value}>
                  {label}
                </Select.Option>
              ))}
            </Select>
          </div>
        </Row>
        <Table aria-labelledby="tabel-eindstand">
          <Table.Header>
            <RankingTableHeaderRow />
          </Table.Header>
          <RankingTableBody ranking={sortedRanking} />
        </Table>
      </Grid.Cell>
    </Grid>
  )
}
