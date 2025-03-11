/**
 * This function takes a list of elements and a component function,
 * applies the component function to each element in the list, and
 * then sets the innerHTML of the element with the given id to the
 * joined string of the results.
 *
 * @param {array} list - The list of elements to display.
 * @param {string} id - The id of the element to populate.
 * @param {function} component - The function to use to generate the
 *   HTML string for each element in the list.
 */
function display(list, id, component) {
  document.getElementById(id).innerHTML = list
    .map((element) => component(element))
    .join("");
}