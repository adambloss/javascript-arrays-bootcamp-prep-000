var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
    arr = [element, ...array]
    return arr
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  arr = array.unshift(element);
  return arr
}
function addElementToEndOfArray(array, element) {

}
