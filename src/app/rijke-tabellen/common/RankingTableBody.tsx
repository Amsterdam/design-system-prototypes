import { Table } from '@amsterdam/design-system-react'
import type { Ranking } from './ranking'

type RankingTableBodyProps = {
  ranking: Ranking
}

export const RankingTableBody = ({ ranking }: RankingTableBodyProps) => (
  <Table.Body>
    {ranking.map(({ drawn, goal_difference, goals_against, goals_for, lost, name, played, points, position, won }) => (
      <Table.Row key={position}>
        <Table.HeaderCell className="ams-table__cell--align-center" scope="row">
          {position}
        </Table.HeaderCell>
        <Table.Cell className="ams-table__cell--nowrap">{name}</Table.Cell>
        <Table.Cell className="ams-table__cell--align-center">{played}</Table.Cell>
        <Table.Cell className="ams-table__cell--align-center">{won}</Table.Cell>
        <Table.Cell className="ams-table__cell--align-center">{drawn}</Table.Cell>
        <Table.Cell className="ams-table__cell--align-center">{lost}</Table.Cell>
        <Table.Cell className="ams-table__cell--align-center">{points}</Table.Cell>
        <Table.Cell className="ams-table__cell--align-center">{goals_for}</Table.Cell>
        <Table.Cell className="ams-table__cell--align-center">{goals_against}</Table.Cell>
        <Table.Cell className="ams-table__cell--align-center">{goal_difference}</Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
)
