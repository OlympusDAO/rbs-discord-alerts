export const formatCurrency = (input: number | null | undefined, decimals = 2): string => {
  if (input == null || typeof input == "undefined") return "N/A";

  return `$${Number(input).toFixed(decimals)}`;
};

export const formatNumber = (input: number | null | undefined, decimals = 2): string => {
  if (input == null || typeof input == "undefined") return "N/A";

  return `${Number(input).toFixed(decimals)}`;
};

/**
 * GraphQL sometimes returns strings as numbers (even though the typing is `number`),
 * so we do a runtime check of the type and parse it as a float if needed.
 */
export const castFloat = (input: number | string): number => {
  if (typeof input == "string") return parseFloat(input);

  return input;
};

/**
 * GraphQL sometimes returns strings as numbers (even though the typing is `number`),
 * so we do a runtime check of the type and parse it as a float if needed.
 *
 * This function supports a null/undefined input and output.
 */
export const castFloatNullable = (input: number | string | undefined | null): number | null => {
  if (!input) return null;

  return castFloat(input);
};

/**
 * GraphQL sometimes returns strings as numbers (even though the typing is `number`),
 * so we do a runtime check of the type and parse it as an int if needed.
 */
export const castInt = (input: number | string): number => {
  if (typeof input == "string") return parseInt(input);

  return input;
};
