function averageStringLength(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let totalLength = 0;
    for (let i = 0; i < arr.length; i++) {
        totalLength += arr[i].length;
    }

    return totalLength / arr.length;
}

console.log(averageStringLength(['oh', 'hello']))