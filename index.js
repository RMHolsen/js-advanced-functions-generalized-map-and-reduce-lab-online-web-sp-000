// Add your functions here
// NO TESTS WTF. It's not my overall system it's something within the lab folder
// Checked with other labs, those tests still run
// Tried reinstalling mocha into the lab folder, that didn't work
// IDEFK

function map(array, transform) {
    let newArray = []
    // establish a new array for the results

    for (let i = 0; i < array.length; i++) {
    // iterate over the array
        let item = array[i]
        // give each position in the array a TRANSFORMABLE variable name
        newArray.push(transform(item))
        // push into the new array the array item at that position, transformed by the other function
    }

    return newArray;
    // and then return the new array
}

function reduce(array, transform, start) {
    let item = (!!start) ? start : array[0]
    // item = either the starting point or the first item in the array via ... thingie. if condition ? true : false
    let i = (!!start) ? 0 : 1
    // let i, i.e. the array index number, if start is true = either 0 or 1

    for (/* no i = 0 here, see lines immediately above */; i < array.length; i++) {
        item = transform(array[i], item)
    }

    return item 
}