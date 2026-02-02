import { Table, Title, Badge, Group } from "@mantine/core";
import type { Candidate } from "../types";

type Props = {
  candidates: Candidate[];
};

export default function Leaderboard({ candidates }: Props) {
  const top10 = candidates.slice(0, 10);

  return (
    <>
      <Group justify="space-between" mb="sm">
        <Title order={3}>Top 10 Candidates</Title>
        <Badge color="teal" variant="outline">
          AI Ranked
        </Badge>
      </Group>

      <Table striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Rank</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Total</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {top10.map((c) => (
            <Table.Tr key={c.id}>
              <Table.Td>#{c.rank_position}</Table.Td>
              <Table.Td>{c.name}</Table.Td>
              <Table.Td>{c.total_score}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
