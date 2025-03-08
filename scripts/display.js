/**
 * Displays a list of elements in a specified HTML element using a provided component function.
 *
 * @param {Array} list - The list of elements to be displayed.
 * @param {string} id - The ID of the HTML element where the list will be displayed.
 * @param {function} component - A function that takes an element from the list and returns a string representing the HTML for that element.
 *
 * @returns {void} This function does not return a value. It modifies the HTML element specified by the `id` parameter.
 */
function display(list, id, component) {
  document.getElementById(id).innerHTML = list
    .map((element) => component(element))
    .join("");
}

