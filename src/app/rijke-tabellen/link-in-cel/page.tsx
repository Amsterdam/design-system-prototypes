'use client'

import { Breadcrumb, Grid, Heading, Link, Table } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import { ranking } from '../common'
import { RankingTableHeaderRow } from '../common/RankingTableHeaderRow'

function LinkInCelContent() {
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
            <RankingTableHeaderRow />
          </Table.Header>
          <Table.Body>
            {ranking.length ? (
              ranking.map(
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
                  <Table.Row className={selection === positie ? 'ams-table__row--selected' : ''} key={positie}>
                    <Table.HeaderCell scope="row">{positie}</Table.HeaderCell>
                    <Table.Cell className="ams-table__cell--align-start ams-table__cell--nowrap">
                      <NextLink href={`?selectie=${positie}`} legacyBehavior passHref>
                        <Link color={selection === positie ? 'contrast' : undefined}>{team}</Link>
                      </NextLink>
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
                <Table.Cell colSpan={10}>Geen gegevens</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Grid.Cell>
    </Grid>
  )
}

export default function LinkInCel() {
  return (
    <Suspense>
      <LinkInCelContent />
    </Suspense>
  )
}
