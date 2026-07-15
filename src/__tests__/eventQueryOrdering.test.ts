import { MarketClosedEventsDocument } from "../graphql/bondMarket";
import { EmissionManagerMarketsCreatedSinceDocument } from "../graphql/emissionManager";
import { RepoMarketsCreatedSinceDocument } from "../graphql/yrf";

const getOrderDirection = (document: unknown): string | undefined => {
  const serializedDocument = JSON.stringify(document);
  const match = serializedDocument.match(/"value":"orderDirection".*?"value":"(asc|desc)"/);
  return match?.[1];
};

describe("event query ordering", () => {
  it.each([
    ["bond market closures", MarketClosedEventsDocument],
    ["YRF market creation", RepoMarketsCreatedSinceDocument],
    ["Emission Manager market creation", EmissionManagerMarketsCreatedSinceDocument],
  ])("requests %s in ascending block order", (_name, document) => {
    expect(getOrderDirection(document)).toBe("asc");
  });
});
