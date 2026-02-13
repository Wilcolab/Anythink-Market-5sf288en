/**
 * Convert a string to camelCase.
 *
 * Supports spaces, hyphens, and underscores as word separators and collapses
 * repeated separators. Non-alphanumeric characters are treated as separators
 * and removed from the output. The first word is lowercased and subsequent
 * words are capitalized.
 *
 * @param {string} input - The value to convert.
 * @returns {string} The camelCase result, or an empty string for non-strings.
 *
 * @example
 * toCamelCase("first name"); // "firstName"
 *
 * @example
 * toCamelCase("user_id"); // "userId"
 */
function toCamelCase(input) {
  if (typeof input !== "string") {
    return "";
  }

  return input
    .trim()
    .replace(/[_\-\s]+/g, " ")
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .trim()
    .replace(/\s+([a-z0-9])/g, (match, chr) => chr.toUpperCase());
}
