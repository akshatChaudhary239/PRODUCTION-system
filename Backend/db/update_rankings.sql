SET @rank := 0;

UPDATE rankings r
JOIN (
  SELECT candidate_id, total_score
  FROM rankings
  ORDER BY total_score DESC
) sorted
ON r.candidate_id = sorted.candidate_id
SET r.rank_position = (@rank := @rank + 1);
