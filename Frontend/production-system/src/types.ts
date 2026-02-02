export type Skills = {
  leadership: number;
  safety_management: number;
  recycling_knowledge: number;
};

export type Evaluation = {
  crisis_management_score: number;
  sustainability_score: number;
  team_motivation_score: number;
};

export type Candidate = {
  id: number;
  name: string;
  experience_years: number;
  skills: Skills;
  evaluation: Evaluation;
  total_score: number;
  rank_position: number;
};
