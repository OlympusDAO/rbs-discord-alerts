import { checkCapacityDepletion } from "./checkCapacity";
import { checkLowerWall } from "./checkLowerWall";
import { checkPrice } from "./checkPrice";

export const handleSnapshots = async (webhookUrl: string): Promise<void> => {
  await checkCapacityDepletion(webhookUrl);
  await checkPrice(webhookUrl);
  await checkLowerWall(webhookUrl);
};

// Running via CLI
if (require.main === module) {
  handleSnapshots("dummyUrl");
}
