import { connectRPC } from "./rpc.client.js";
import { generateIdentityClaim } from "./identity.claims.js";
import { NETWORK, WALLET_ADDRESS } from "./network.config.js";

console.log("On-Chain Identity Verification System");
console.log("Network:", NETWORK);
console.log("Wallet:", WALLET_ADDRESS);

const provider = connectRPC();
generateIdentityClaim(provider);
