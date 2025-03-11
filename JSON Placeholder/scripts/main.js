/**
 * Creates a new Request object with the specified URL, using the GET
 * method and headers for JSON content.
 *
 * @param {string} url - The URL to which the request is made.
 * @returns {Request} - A Request object configured with the given URL.
 */
function requestFactory(url) {
  return new Request(url, {
    method: GET,
    headers: { accept: "application/json", "content-type": "application/json" },
  });
}

/**
 * Makes a GET request to the given url and handles the response by
 * calling handleResponse.
 *
 * @param {string} url - The url to make the request to.
 */
function handleGetRequest(url) {
  const request = requestFactory(url);

  fetch(request)
    .then((response) => {
      response.json().then((result) => handleResponse(result, url));
    })
    .catch((error) => alert(`Error: ${error}`));
}

/**
 * Handles the response from the JSON Placeholder API by displaying the
 * response in the appropriate container based on the url.
 *
 * @param {object} result - The JSON response from the JSON Placeholder API.
 * @param {string} url - The url of the JSON Placeholder API endpoint that
 *   was called.
 */
function handleResponse(result, url) {
  if (url.endsWith("/users")) {
    display(result, "users-container", user);
    addClickHandler(result);
  } else if (url.includes("/posts?userId="))
    display(result, "posts-container", post);
  else alert(`Error: ${url} is not a valid endpoint. Please try again.`);
}

/**
 * Adds a click event listener to each user card that will make a GET
 * request to the JSON Placeholder API to get all posts for that user
 * and display them in the posts section.
 *
 * @param {array} users - A list of user objects with the following
 *   properties: username, email, id.
 */
function addClickHandler(users) {
  for (let { username, email, id } of users)
    document
      .getElementById(`${username}-${email}`)
      .addEventListener("click", () => handleGetRequest(GET_POSTS_URL(id)));
}

handleGetRequest(GET_USERS_URL);
