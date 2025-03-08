/**
 * Adds a click event listener to each user element in the users array.
 * When a user element is clicked, it sends a GET request to fetch the posts of the corresponding user.
 *
 * @param {Array} users - An array of user objects. Each user object should have properties: username, email, and id.
 * @returns {void} This function doesn't return a value.
 */
function addUserClickEvent(users) {
  for (let { username, email, id } of users)
    document
      .getElementById(`${username}-${email}`)
      .addEventListener("click", () => {
        handleGetRequest(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
          (request) => onLoading(request, "posts-container", post)
        );
      });
}

/**
 * Sends a GET request to the specified URL and executes a callback function upon successful response.
 *
 * @param {string} url - The URL to which the GET request is sent.
 * @param {function} onLoadImplementation - The callback function to execute when the request is successfully loaded.
 */
function handleGetRequest(url, onLoadImplementation) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.onload = () => onLoadImplementation(request);
  request.send();
}

/**
 * Handles the loading of an XMLHttpRequest response and displays the result or shows an error.
 *
 * @param {XMLHttpRequest} request - The XMLHttpRequest object containing the response.
 * @param {string} containerId - The ID of the HTML container element where the response will be displayed.
 * @param {Function} componentFunction - A function that generates the HTML component for each item in the response.
 * @returns {void} This function doesn't return a value.
 */
function onLoading(request, containerId, componentFunction) {
  if (request.status >= 200 && request.status < 300)
    display(request.response, containerId, componentFunction);
  else alert(`Error: ${request.statusText}`);
}


