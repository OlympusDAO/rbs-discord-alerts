export function shorten(str: string) {
  if (str.length < 10) return str;
  return `${str.slice(0, 6)}...${str.slice(str.length - 4)}`;
}

export const isBytesEqual = (a: Uint8Array, b: string): boolean => {
  return a.toString().toLowerCase() == b.toLowerCase();
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
