const testScores = [65, 46, 78, 37, 98, 88];
const lowest = testScores.reduce(function(min, nextVal){
    return nextVal < min ? nextVal: min;
})