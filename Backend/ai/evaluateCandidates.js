export function evaluateCandidate() {
  return {
    crisis_management_score: Math.floor(Math.random() * 40) + 60,
    sustainability_score: Math.floor(Math.random() * 40) + 60,
    team_motivation_score: Math.floor(Math.random() * 40) + 60
  };
}
