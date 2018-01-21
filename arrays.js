var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
    arr = [element, ...array]
    return arr
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift();
  return array
}
function addElementToEndOfArray(array, element) {

}
