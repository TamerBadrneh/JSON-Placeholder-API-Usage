/**
 * This function generates a user card HTML string.
 *
 * @param {string} username - The username of the user.
 * @param {string} email - The email of the user.
 *
 * @returns {string} - A string representing a user card HTML element.
 */
function user(element) {
  return `<div id="${element.username}-${element.email}"
              class="w-full bg-[#393E46] p-4 border-4 rounded-2xl border-[#00ADB5] text-[#EEE] hover:text-[#00ADB5] transition-all duration-300"
            >
              <h3 class="font-bold text-lg">${element.username}</h3>
              <p class="font-light text-sm">${element.email}</p>
            </div>`;
}

/**
 * This function generates a post card HTML string.
 *
 * @param {string} title - The title of the post.
 * @param {string} contnet - The content of the post.
 *
 * @returns {string} - A string representing a post card HTML element.
 */
function post(element) {
  return `<div
              class="w-full bg-[#393E46] p-4 border-4 rounded-2xl border-[#00ADB5] text-[#EEE] hover:text-[#00ADB5] transition-all duration-300"
            >
              <h3 class="font-bold text-lg">${element.title}</h3>
              <p class="font-light text-sm">${element.body}</p>
            </div>`;
}
