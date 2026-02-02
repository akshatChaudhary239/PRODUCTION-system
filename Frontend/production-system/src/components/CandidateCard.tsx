import {
  Card,
  Text,
  Badge,
  Group,
  Progress,
  Stack,
} from "@mantine/core";
import { motion } from "framer-motion";
import type { Candidate } from "../types";

type Props = {
  candidate: Candidate;
};

export default function CandidateCard({ candidate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card withBorder radius="lg" p="md">
        <Group justify="space-between">
          <Text fw={600}>{candidate.name}</Text>
          <Badge color="teal" variant="light">
            Rank #{candidate.rank_position}
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {candidate.experience_years} years experience
        </Text>

        <Stack mt="sm" gap={4}>
          <Text size="xs">Overall Score</Text>
          <Progress
            value={(candidate.total_score / 300) * 100}
            color="teal"
            radius="xl"
          />
        </Stack>
      </Card>
    </motion.div>
  );
}
