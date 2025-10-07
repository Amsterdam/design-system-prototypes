'use client'

import { Breadcrumb, Grid, Heading, Label, Paragraph, Table, TextInput } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useState } from 'react'

import { ranking, RankingTableBody } from '../common'
import { RankingTableHeaderRow } from '../common/RankingTableHeaderRow'

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
            <Table.Row>
              <Table.Cell />
              <Table.Cell>
                <Label className="ams-visually-hidden" htmlFor="filter">
                  Filter op
                </Label>
                <TextInput
                  id="filter"
                  onChange={(e) => setFilter(e.target.value)}
                  style={{ minInlineSize: '6rem' }}
                  value={filter}
                />
              </Table.Cell>
              <Table.Cell colSpan={8} />
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
