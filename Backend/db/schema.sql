CREATE TABLE candidates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  experience_years INT NOT NULL,
  skills JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE evaluations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  candidate_id INT NOT NULL,
  crisis_management_score INT CHECK (crisis_management_score BETWEEN 0 AND 100),
  sustainability_score INT CHECK (sustainability_score BETWEEN 0 AND 100),
  team_motivation_score INT CHECK (team_motivation_score BETWEEN 0 AND 100),
  evaluated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);

CREATE TABLE rankings (
  candidate_id INT PRIMARY KEY,
  total_score INT,
  rank_position INT,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);

CREATE TRIGGER update_rankings
AFTER INSERT ON evaluations
FOR EACH ROW
BEGIN
  DECLARE total INT;
  SET total =
    NEW.crisis_management_score +
    NEW.sustainability_score +
    NEW.team_motivation_score;

  REPLACE INTO rankings (candidate_id, total_score)
  VALUES (NEW.candidate_id, total);
END;
