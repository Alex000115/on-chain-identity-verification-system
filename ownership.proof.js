export function simulateOwnershipProof(wallet) {
  return {
    wallet,
    verified: true,
    method: "signature_simulation",
    timestamp: Date.now()
  };
}
