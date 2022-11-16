import { checkCapacityDepletion } from "./checkCapacity";
import { checkLowerWall } from "./checkLowerWall";
import { checkPrice } from "./checkPrice";

export const handleSnapshots = async (mentionRoles: string[], webhookUrl: string): Promise<void> => {
  await checkCapacityDepletion(mentionRoles, webhookUrl);
  await checkPrice(mentionRoles, webhookUrl);
  await checkLowerWall(mentionRoles, webhookUrl);
};

// Running via CLI
if (require.main === module) {
  handleSnapshots([], "dummyUrl");
}
