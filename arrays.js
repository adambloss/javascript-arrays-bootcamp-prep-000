var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element) {
  var  arr = [element, ...array]
    return arr
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var arr = array.unshift(element);
  return arr
}
function addElementToEndOfArray(array, element) {

}
