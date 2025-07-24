'use client'

import { Breadcrumb, Grid, Heading, Label, Paragraph, Table, TextInput } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useState } from 'react'
import { ranking, RankingTableBody } from '../common'
import '../overrides.css'

export default function FilterenOpTekst() {
  const [filter, setFilter] = useState<string>('')
  const filteredRanking = ranking.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))

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
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Positie
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">Team</Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Gespeeld
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Gewonnen
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Gelijk
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Verloren
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Punten
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Doelpunten voor
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Doelpunten tegen
              </Table.HeaderCell>
              <Table.HeaderCell className="ams-table__cell--align-center" scope="col">
                Doelsaldo
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.Cell />
              <Table.Cell>
                <Label htmlFor="filter" className="ams-visually-hidden">
                  Filter op
                </Label>
                <TextInput
                  id="filter"
                  onChange={(e) => setFilter(e.target.value)}
                  style={{ minInlineSize: '6rem' }}
                  value={filter}
                />
              </Table.Cell>
              <Table.Cell colSpan={Object.keys(ranking[0] ?? {}).length - 2} />
            </Table.Row>
          </Table.Header>
          <RankingTableBody ranking={filteredRanking} />
        </Table>
        {filter.length ? (
          <Paragraph size="small">
            <strong>{filteredRanking.length}</strong> {filteredRanking.length === 1 ? 'team' : 'teams'} met ‘{filter}’
          </Paragraph>
        ) : undefined}
      </Grid.Cell>
    </Grid>
  )
}
