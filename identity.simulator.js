export function simulateIdentityFlow(wallet) {
  return {
    wallet,
    stage: "simulated",
    timestamp: Date.now()
  };
}
