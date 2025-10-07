'use client'

import { Breadcrumb, Grid, Heading, Label, Pagination, Row, Select, Table } from '@amsterdam/design-system-react'
import NextLink from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { ranking, RankingTableBody } from '../common'
import { RankingTableHeaderRow } from '../common/RankingTableHeaderRow'

export default function Pagineren() {
  const [pageSize, setPageSize] = useState<number>(2)
  const totalPages = Math.ceil(ranking.length / pageSize)

  const searchParams = useSearchParams()
  const page = Number(searchParams.get('pagina')) || 1
  const range = `${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, ranking.length)}`

  const paginatedRanking = ranking.slice((page - 1) * pageSize, page * pageSize)
  const LinkComponent = (props: any) => <NextLink {...props} />

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
              Eindstand {range}
            </Heading>
          </Table.Caption>
          <Table.Header>
            <RankingTableHeaderRow />
          </Table.Header>
          <RankingTableBody ranking={paginatedRanking} />
        </Table>
        <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
          <Pagination
            linkComponent={LinkComponent}
            linkTemplate={(page: number) => `/rijke-tabellen/pagineren?pagina=${page}`}
            page={page}
            totalPages={totalPages}
          />
          <div>
            <Label htmlFor="pageSize">Pagineren per</Label>
            <Select id="pageSize" onChange={(e) => setPageSize(Number(e.target.value) || 2)} value={pageSize}>
              {[2, 3, 6, 9].map((p) => (
                <Select.Option key={p} value={p}>
                  {p}
                </Select.Option>
              ))}
            </Select>
          </div>
        </Row>
      </Grid.Cell>
    </Grid>
  )
}
