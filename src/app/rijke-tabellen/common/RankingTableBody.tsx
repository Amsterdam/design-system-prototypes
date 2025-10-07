import { Table } from '@amsterdam/design-system-react'

import type { Ranking } from './ranking'

type RankingTableBodyProps = {
  ranking: Ranking
}

export const RankingTableBody = ({ ranking }: RankingTableBodyProps) => (
  <Table.Body>
    {ranking.length ? (
      ranking.map(({ drawn, goal_difference, goals_against, goals_for, lost, name, played, points, position, won }) => (
        <Table.Row key={position}>
          <Table.HeaderCell scope="row">{position}</Table.HeaderCell>
          <Table.Cell className="ams-table__cell--align-start ams-table__cell--nowrap">{name}</Table.Cell>
          <Table.Cell>{played}</Table.Cell>
          <Table.Cell>{won}</Table.Cell>
          <Table.Cell>{drawn}</Table.Cell>
          <Table.Cell>{lost}</Table.Cell>
          <Table.Cell>{points}</Table.Cell>
          <Table.Cell>{goals_for}</Table.Cell>
          <Table.Cell>{goals_against}</Table.Cell>
          <Table.Cell>{goal_difference}</Table.Cell>
        </Table.Row>
      ))
    ) : (
      <Table.Row>
        <Table.Cell colSpan={10}>Geen gegevens</Table.Cell>
      </Table.Row>
    )}
  </Table.Body>
)
