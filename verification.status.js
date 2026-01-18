export function getVerificationStatus(score) {
  return score > 50 ? "verified" : "unverified";
}
