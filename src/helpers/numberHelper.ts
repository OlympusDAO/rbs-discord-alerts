export const formatCurrency = (input: number | null | undefined, decimals = 2): string => {
  if (input == null || typeof input == "undefined") return "N/A";

  return `$${Number(input).toFixed(decimals)}`;
};
