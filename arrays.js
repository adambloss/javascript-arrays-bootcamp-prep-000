var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
    var arr = array.unshift(element);
    return arr
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift();
  return array
}
function addElementToEndOfArray(array, element) {

}
