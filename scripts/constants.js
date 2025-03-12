const GET = "GET";
const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Returns a URL that will return all posts for the given user ID in the
 * JSON Placeholder API.
 *
 * @param {number} userId - The ID of the user for which to retrieve the
 *   posts.
 *
 * @returns {string} - The URL to make the request to.
 */
function GET_POSTS_URL(userId) {
  return `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
}
