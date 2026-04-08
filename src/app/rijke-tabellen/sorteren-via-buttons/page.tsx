'use client'

import { Breadcrumb, Grid, Heading, Link, Table } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import type { SortOrder, Team } from '../common'

import { getSortedRanking, ranking, RankingTableBody } from '../common'

const columns: Array<{ field: keyof Team; header: string; alignStart?: boolean }> = [
  { field: 'positie', header: 'Positie' },
  { field: 'team', header: 'Team', alignStart: true },
  { field: 'gespeeld', header: 'Gespeeld' },
  { field: 'gewonnen', header: 'Gewonnen' },
  { field: 'gelijk', header: 'Gelijk' },
  { field: 'verloren', header: 'Verloren' },
  { field: 'punten', header: 'Punten' },
  { field: 'doelpunten_voor', header: 'Doelpunten voor' },
  { field: 'doelpunten_tegen', header: 'Doelpunten tegen' },
  { field: 'doelsaldo', header: 'Doelsaldo' },
]

function SorterenViaLinksInHeaderContent() {
  const searchParams = useSearchParams()
  const sortOrder = (searchParams.get('sortering') as SortOrder) || 'positie-asc'
  const [sortField, sortDirection] = sortOrder.split('-') as [keyof Team, 'asc' | 'desc']
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
        <Table aria-labelledby="tabel-eindstand">
          <Table.Caption>
            <Heading className="ams-mb-m" id="tabel-eindstand" level={2}>
              Eindstand
            </Heading>
          </Table.Caption>
          <Table.Header>
            <Table.Row>
              {columns.map(({ field, header, alignStart }) => {
                const isActive = sortField === field
                const nextDirection = isActive && sortDirection === 'asc' ? 'desc' : 'asc'
                const ariaSortValue = isActive ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined

                return (
                  <Table.HeaderCell
                    aria-sort={ariaSortValue}
                    className={alignStart ? 'ams-table__cell--align-start' : undefined}
                    key={field}
                    scope="col"
                  >
                    <NextLink href={`?sortering=${field}-${nextDirection}`} legacyBehavior passHref>
                      <Link className={isActive ? 'ams-link--current' : undefined}>{header}</Link>
                    </NextLink>
                  </Table.HeaderCell>
                )
              })}
            </Table.Row>
          </Table.Header>
          <RankingTableBody ranking={sortedRanking} />
        </Table>
      </Grid.Cell>
    </Grid>
  )
}

export default function SorterenViaLinksInHeader() {
  return (
    <Suspense>
      <SorterenViaLinksInHeaderContent />
    </Suspense>
  )
}
