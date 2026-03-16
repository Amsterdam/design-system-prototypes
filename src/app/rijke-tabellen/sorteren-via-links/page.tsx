'use client'

import { Breadcrumb, Grid, Heading, Link, Paragraph, Row, Table } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Fragment, Suspense } from 'react'

import type { SortOrder } from '../common'

import { getSortedRanking, ranking, RankingTableBody } from '../common'
import { RankingTableHeaderRow } from '../common/RankingTableHeaderRow'

const sortLinks: Array<{ label: string; value: SortOrder }> = [
  { label: 'Gewonnen', value: 'gewonnen-desc' },
  { label: 'Gelijk', value: 'gelijk-desc' },
  { label: 'Verloren', value: 'verloren-desc' },
]

function SorterenViaLinksContent() {
  const searchParams = useSearchParams()
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
          <Row alignVertical="baseline" wrap>
            <Paragraph>
              <span>Sorteren op</span>
              {' \u00A0 '}
              {sortLinks.map(({ label, value }) => (
                <Fragment key={value}>
                  <NextLink href={`?sortering=${value}`} key={value} legacyBehavior passHref>
                    <Link aria-current={sortOrder === value ? 'true' : undefined}>{label}</Link>
                  </NextLink>
                  {' \u00A0 '}
                </Fragment>
              ))}
            </Paragraph>
          </Row>
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

export default function SorterenViaLinks() {
  return (
    <Suspense>
      <SorterenViaLinksContent />
    </Suspense>
  )
}
