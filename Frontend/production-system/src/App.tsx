import {
  Container,
  Grid,
  Title,
  Text,
  Stack,
  Paper,
} from "@mantine/core";
import Leaderboard from "./pages/Leaderboard";
import CandidateCard from "./components/CandidateCard";
import SkillHeatmap from "./components/SkillHeatmap";
import { mockCandidates } from "./data/mockCandidates";

function App() {
  return (
    <Container size="xl" py="lg">
      {/* Header */}
      <Stack mb="lg">
        <Title order={1}>AI Candidate Ranking Dashboard</Title>
        <Text c="dimmed">
          Recycling Production Line Manager – AI Assisted Evaluation
        </Text>
      </Stack>

      <Grid gutter="lg">
        {/* Left Column */}
        <Grid.Col span={8}>
          <Paper p="md" radius="lg" withBorder mb="lg">
            <Leaderboard candidates={mockCandidates} />
          </Paper>

          <Paper p="md" radius="lg" withBorder>
            <SkillHeatmap candidates={mockCandidates} />
          </Paper>
        </Grid.Col>

        {/* Right Column */}
        <Grid.Col span={4}>
          <Stack>
            {mockCandidates.slice(0, 5).map((c) => (
              <CandidateCard key={c.id} candidate={c} />
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default App;
