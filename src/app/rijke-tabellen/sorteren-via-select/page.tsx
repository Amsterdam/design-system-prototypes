'use client'

import { Breadcrumb, Grid, Heading, Label, Row, Select, Table } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import type { SortOrder } from '../common'

import { getSortedRanking, ranking, RankingTableBody } from '../common'
import { RankingTableHeaderRow } from '../common/RankingTableHeaderRow'

const sortOptions: Array<{ label: string; value: SortOrder }> = [
  { label: 'Positie', value: 'positie-asc' },
  { label: 'Team oplopend', value: 'team-asc' },
  { label: 'Team aflopend', value: 'team-desc' },
  { label: 'Gewonnen', value: 'gewonnen-desc' },
  { label: 'Gelijk', value: 'gelijk-desc' },
  { label: 'Verloren', value: 'verloren-desc' },
]

function SorterenViaSelectContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sortOrder = (searchParams.get('sortering') as SortOrder) || 'positie-asc'
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
          <form method="get">
            <Row alignVertical="center" wrap>
              <Label htmlFor="sortOrder">Sorteren op</Label>
              <Select
                id="sortOrder"
                name="sortering"
                onChange={(e) => router.push(`?sortering=${e.target.value}`)}
                value={sortOrder}
              >
                {sortOptions.map(({ label, value }) => (
                  <Select.Option key={value} value={value}>
                    {label}
                  </Select.Option>
                ))}
              </Select>
              <button className="ams-visually-hidden" tabIndex={-1} type="submit">
                Sorteren
              </button>
            </Row>
          </form>
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

export default function SorterenViaSelect() {
  return (
    <Suspense>
      <SorterenViaSelectContent />
    </Suspense>
  )
}
