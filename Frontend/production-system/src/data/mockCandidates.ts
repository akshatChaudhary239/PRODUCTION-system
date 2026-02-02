import type { Candidate } from "../types";

export const mockCandidates: Candidate[] = Array.from({ length: 40 }).map(
  (_, i) => {
    const crisis = Math.floor(Math.random() * 40) + 60;
    const sustainability = Math.floor(Math.random() * 40) + 60;
    const motivation = Math.floor(Math.random() * 40) + 60;

    const total = crisis + sustainability + motivation;

    return {
      id: i + 1,
      name: `Candidate ${i + 1}`,
      experience_years: Math.floor(Math.random() * 10) + 2,
      skills: {
        leadership: Math.floor(Math.random() * 10) + 1,
        safety_management: Math.floor(Math.random() * 10) + 1,
        recycling_knowledge: Math.floor(Math.random() * 10) + 1,
      },
      evaluation: {
        crisis_management_score: crisis,
        sustainability_score: sustainability,
        team_motivation_score: motivation,
      },
      total_score: total,
      rank_position: 0,
    };
  }
)
  .sort((a, b) => b.total_score - a.total_score)
  .map((c, index) => ({ ...c, rank_position: index + 1 }));
