import { storeIdentity } from "./identity.model.js";

export function generateIdentityClaim() {
  const claim = {
    id: Date.now(),
    type: "wallet_identity",
    status: "claimed",
    timestamp: Date.now()
  };

  storeIdentity(claim);
}
