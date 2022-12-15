export const formatCurrency = (input: number | null | undefined, decimals = 2): string => {
  if (input == null || typeof input == "undefined") return "N/A";

  return `$${Number(input).toFixed(decimals)}`;
};

export const formatNumber = (input: number | null | undefined, decimals = 2): string => {
  if (input == null || typeof input == "undefined") return "N/A";

  return `${Number(input).toFixed(decimals)}`;
};

export const formatPercent = (input: number | null | undefined, decimals = 2): string => {
  if (input == null || typeof input == "undefined") return "N/A";

  return `${Number(input * 100).toFixed(decimals)}%`;
};

/**
 * Determine if two numbers are equal, up to the defined number of decimal places.
 *
 * The numbers are converted to strings using `formatNumber`, as comparing
 * floating point numbers using the `number` type is problematic.
 *
 * @param one
 * @param two
 * @param decimals
 * @returns
 */
export const numbersEqual = (one: number | null | undefined, two: number | null | undefined, decimals = 2): boolean => {
  return formatNumber(one, decimals) == formatNumber(two, decimals);
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

/**
 * GraphQL sometimes returns strings as numbers (even though the typing is `number`),
 * so we do a runtime check of the type and parse it as a int if needed.
 *
 * This function supports a null/undefined input and output.
 */
export const castIntNullable = (input: number | string | undefined | null): number | null => {
  if (!input) return null;

  return castInt(input);
};
