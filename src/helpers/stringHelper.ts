export function shorten(str: string) {
  if (str.length < 10) return str;
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
}

/**
 * Case-insensitive address/hash comparison.
 *
 * The subgraph codegen typed `Bytes` as `Uint8Array` and this took one, but at
 * runtime GraphQL always handed over a hex STRING — hence the `.toString()`.
 * The REST API returns the same hex strings, so the parameter now says what it
 * always received.
 */
export const isBytesEqual = (a: string, b: string): boolean => {
  return a.toLowerCase() === b.toLowerCase();
};

/**
 * Converts a list of strings to a Markdown-compatible unordered list.
 *
 * ["a", "b", "c"] becomes:
 *
 * - a
 * - b
 * - c
 *
 * @param strings
 * @returns
 */
export const toUnorderedList = (strings: string[]): string => {
  return strings.map(value => `- ${value}`).join("\n");
};
