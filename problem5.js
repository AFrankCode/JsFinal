function firstPunctuationIndex(str) {
    const punctuationRegex = /[.!?]/;
    const punctuationIndex = str.search(punctuationRegex);
    return punctuationIndex;
}  

console.log(firstPunctuationIndex('alright alright alright'))