// ---------------------Given Array--------------------------------------


let arr = new Array(1, 1, 1, 2, 2, 3, 4, 5, 5, 6,6);

// ---------------------Display--------------------------------------

let elementsN2Complexity = findRepeatingElementsN2(arr);
console.log("Finding Repeating Elements N2 Comlexity :" + elementsN2Complexity);

let elementN2Complexity = findFirstRepeatingElementN2(arr);
console.log("Finding Repeating Element N2 Comlexity :" + elementN2Complexity);

let elementsNComplexity = findRepeatingElementsN(arr);
console.log("Finding Repeating Elements N Comlexity :" + elementsNComplexity);

let elementNComplexity = findFirstRepeatingElementN(arr);
console.log("Finding Repeating Element N Comlexity :" + elementNComplexity);

// -----------------------------------------------------------

// Finding the element that repeats 1 time
// time complexity = O(n^2)
function findRepeatingElementsN2(arr) {
    let elements = [];
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            elements.push(arr[i]);
        }
    }
    return elements;
}

// Finding the first element that repeats 1 time
// time complexity = O(n^2)
function findFirstRepeatingElementN2(arr) {
    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            return arr[i];
        }
    }
    return "there is no repeating element";
}

// ----------------------Optimization-------------------------------------


// Finding the element that repeats 1 time
// time complexity = O(n)
function findRepeatingElementsN(arr) {
    let elementCounts = {};
    for (let i = 0; i < arr.length; i++) {
        if (elementCounts[arr[i]] === undefined) {
            elementCounts[arr[i]] = 1;
        } else {
            elementCounts[arr[i]]++;
        }
    }
    let elements = [];
    for (let element in elementCounts) {
        if (elementCounts[element] === 1) {
            elements.push(element);
        }
    }
    return elements;
}

// Finding the first element that repeats 1 time
// time complexity = O(n)
function findFirstRepeatingElementN(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (counts[element] === undefined) {
            counts[element] = 1;
        } else {
            counts[element]++;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (counts[element] === 1) {
            return element;
        }
    }
    return "there is no repeating element";
}



