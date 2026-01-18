import { getAddress } from "ethers";
import { WALLET_ADDRESS } from "./network.config.js";

export function isTargetWallet(address) {
  if (!address) return false;
  try {
    return (
      getAddress(address).toLowerCase() ===
      getAddress(WALLET_ADDRESS).toLowerCase()
    );
  } catch {
    return false;
  }
}
