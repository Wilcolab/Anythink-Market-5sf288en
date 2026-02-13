/**
 * Convert a string to camelCase while preserving acronyms.
 *
 * Word boundaries are determined by non-letter characters. Acronyms are kept
 * uppercase when they are not the first token (e.g. "user API key" ->
 * "userAPIKey"). Non-letter characters are ignored entirely, and an error is
 * thrown for inputs that contain no letters.
 *
 * @param {string} input - The value to convert.
 * @returns {string} The camelCase result.
 * @throws {TypeError} When input is not a string or contains no letters.
 *
 * @example
 * toCamelCase("SCREEN_NAME"); // "screenNAME"
 *
 * @example
 * toCamelCase("user API key"); // "userAPIKey"
 */
function toCamelCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  const tokens = input.match(/[A-Za-z]+/g);
  if (!tokens || tokens.length === 0) {
    throw new TypeError("Input must contain at least one letter.");
  }

  return tokens
    .map((token, index) => {
      const isAcronym = token === token.toUpperCase() && token.length > 1;

      if (index === 0) {
        return token.toLowerCase();
      }

      if (isAcronym) {
        return token;
      }

      const lower = token.toLowerCase();
      return lower[0].toUpperCase() + lower.slice(1);
    })
    .join("");
}

// Create a function that converts strings to dot.case format.

/**
 * Convert a string to dot.case.
 *
 * Extracts alphanumeric tokens, lowercases each token, and joins them with
 * dots. Non-alphanumeric characters are treated as separators. Inputs without
 * letters or numbers throw a TypeError.
 *
 * @param {string} input - The value to convert.
 * @returns {string} The dot.case result.
 * @throws {TypeError} When input is not a string or has no alphanumeric tokens.
 *
 * @example
 * toDotCase("Mobile Number"); // "mobile.number"
 *
 * @example
 * toDotCase("user-id"); // "user.id"
 */
function toDotCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  const tokens = input.match(/[A-Za-z0-9]+/g);
  if (!tokens || tokens.length === 0) {
    throw new TypeError("Input must contain at least one letter or number.");
  }

  return tokens
    .map((token) => token.toLowerCase())
    .join(".");
}

/*
Step 1: Validate the input is a string and trim surrounding whitespace.
Step 2: Replace word separators (spaces, underscores, and hyphens) with a single hyphen.
Step 3: Remove non-alphanumeric characters, collapse multiple hyphens, and lowercase the result.
*/
function toKebabCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  const normalized = input
    .trim()
    .replace(/[_\s-]+/g, "-")
    .replace(/[^a-zA-Z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!normalized) {
    throw new TypeError("Input must contain at least one letter or number.");
  }

  return normalized.toLowerCase();
}
