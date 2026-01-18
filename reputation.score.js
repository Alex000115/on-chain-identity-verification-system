export function calculateReputationScore(activityCount, ageInDays) {
  const activityFactor = activityCount * 2;
  const ageFactor = ageInDays * 0.5;
  return Math.floor(activityFactor + ageFactor);
}
