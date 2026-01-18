export function storeIdentity(identity) {
  console.log("Identity Record:");
  console.log("ID:", identity.id);
  console.log("Type:", identity.type);
  console.log("Status:", identity.status);
  console.log("Time:", new Date(identity.timestamp).toISOString());
  console.log("----------------------------");
}
