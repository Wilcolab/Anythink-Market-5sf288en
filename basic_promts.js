/**
 * Convert a string to snake_case.
 *
 * Handles mixed casing (e.g. "myURL"), whitespace, hyphens, and other
 * non-alphanumeric separators by normalizing them to single underscores.
 * Leading/trailing underscores are trimmed, and the result is lowercased.
 *
 * @param {string} input - The value to normalize.
 * @returns {string} The snake_case result, or an empty string for non-strings.
 *
 * @example
 * toSnakeCase("First Name"); // "first_name"
 *
 * @example
 * toSnakeCase("userID"); // "user_id"
 */
function toSnakeCase(input) {
	if (typeof input !== "string") {
		return "";
	}

	return input
		.trim()
		.replace(/([a-z0-9])([A-Z])/g, "$1_$2")
		.replace(/[^a-zA-Z0-9]+/g, "_")
		.replace(/_+/g, "_")
		.replace(/^_+|_+$/g, "")
		.toLowerCase();
}

/**
 * Add two numbers together.
 *
 * This is a straightforward helper with no validation. For non-numeric inputs,
 * JavaScript's default addition/coercion rules apply.
 *
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @returns {number} The sum of `a` and `b`.
 *
 * @example
 * addNumbers(5, 3); // 8
 */
function addNumbers(a, b) {
	return a + b;
}
