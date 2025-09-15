'use client'

import { Breadcrumb, Grid, Heading, Link, Table } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { ranking } from '../common'
import { RankingTableHeaderRow } from '../common/RankingTableHeaderRow'

export default function LinkInCel() {
  const searchParams = useSearchParams()
  const selection = Number(searchParams.get('selectie'))

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
            <RankingTableHeaderRow />
          </Table.Header>
          <Table.Body>
            <Suspense fallback={null}>
              {ranking.length ? (
                ranking.map(
                  ({ drawn, goal_difference, goals_against, goals_for, lost, name, played, points, position, won }) => (
                    <Table.Row key={position} className={selection === position ? 'ams-table__row--selected' : ''}>
                      <Table.HeaderCell scope="row">{position}</Table.HeaderCell>
                      <Table.Cell className="ams-table__cell--align-start ams-table__cell--nowrap">
                        <NextLink href={`?selectie=${position}`} legacyBehavior passHref>
                          <Link color={selection === position ? 'contrast' : undefined}>{name}</Link>
                        </NextLink>
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
                  <Table.Cell colSpan={10}>Geen gegevens</Table.Cell>
                </Table.Row>
              )}
            </Suspense>
          </Table.Body>
        </Table>
      </Grid.Cell>
    </Grid>
  )
}
