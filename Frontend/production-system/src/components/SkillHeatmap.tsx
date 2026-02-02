import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Title } from "@mantine/core";
import type { Candidate } from "../types";

type Props = {
  candidates: Candidate[];
};

export default function SkillHeatmap({ candidates }: Props) {
  const data = candidates.slice(0, 10).map((c) => ({
    name: c.name,
    Crisis: c.evaluation.crisis_management_score,
    Sustainability: c.evaluation.sustainability_score,
    Motivation: c.evaluation.team_motivation_score,
  }));

  return (
    <>
      <Title order={4} mb="sm">
        Skill Distribution (Top 10)
      </Title>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Crisis" fill="#0ca678" />
          <Bar dataKey="Sustainability" fill="#339af0" />
          <Bar dataKey="Motivation" fill="#845ef7" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
