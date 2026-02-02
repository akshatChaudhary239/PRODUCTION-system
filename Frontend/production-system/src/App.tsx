import {
  Container,
  Grid,
  Stack,
  Paper,
} from "@mantine/core";
import TopBar from "./components/TopBar";
import StatCard from "./components/StatCard";
import Leaderboard from "./pages/Leaderboard";
import SkillHeatmap from "./components/SkillHeatmap";
import CandidateCard from "./components/CandidateCard";
import { mockCandidates } from "./data/mockCandidates";

function App() {
  return (
    <Container size="xl" py="lg">
      <TopBar />

      {/* KPI Cards */}
      <Grid mb="lg">
        <Grid.Col span={3}>
          <StatCard label="Total Candidates" value="40" />
        </Grid.Col>
        <Grid.Col span={3}>
          <StatCard label="Average Score" value="≈ 240" />
        </Grid.Col>
        <Grid.Col span={3}>
          <StatCard label="Top Score" value={mockCandidates[0].total_score.toString()} />
        </Grid.Col>
        <Grid.Col span={3}>
          <StatCard label="AI Evaluations" value="120" />
        </Grid.Col>
      </Grid>

      {/* Main Content */}
      <Grid gutter="lg">
        <Grid.Col span={8}>
          <Paper p="md" radius="lg" className="glass" mb="lg">
            <Leaderboard candidates={mockCandidates} />
          </Paper>

          <Paper p="md" radius="lg" className="glass">
            <SkillHeatmap candidates={mockCandidates} />
          </Paper>
        </Grid.Col>

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
