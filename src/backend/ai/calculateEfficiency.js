import operationalData from "../storage/operationalData";

function calculateEfficiency() {

  const metrics = operationalData.metrics;

  let score = 100;

  score -= metrics.pendingTasks * 1.5;
  score -= metrics.operationalDelays * 4;
  score -= metrics.techIssues * 3;

  score += metrics.completedActions * 0.8;
  score += metrics.emailsResponded * 0.3;
  score += metrics.proactiveActions * 2;

  if (score > 100) {
    score = 100;
  }

  if (score < 0) {
    score = 0;
  }

  let rating = "Average";

  if (score >= 85) {
    rating = "Excellent";
  }
  else if (score >= 70) {
    rating = "Good";
  }
  else if (score >= 50) {
    rating = "Moderate";
  }
  else {
    rating = "Needs Attention";
  }

  return {

    score: Math.round(score),
    rating

  };

}

export default calculateEfficiency;
