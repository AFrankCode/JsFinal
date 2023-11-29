function oddIndices(arr) {
    let oddArray = [];
    for (let i=1; i<arr.length; i += 2) {
        oddArray.push(arr[i]);
    }
    return oddArray;
}
console.log( oddIndices([0, 2, 4, 6, 8, 10]));