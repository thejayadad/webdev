

const numbers = [6,10,30,5,8,9]
//FOR LOOP
function calculateAverage(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calculateAverage(numbers))

//FOR EACH LOOP

function calculateaver(arr){
    let sum = 0;
    arr.forEach(num => {
        sum += num
    })
    return sum / arr.length
}
console.log(calculateaver(numbers))

//REDUCE

function calcAverage(arr){
    const sum = arr.reduce((total, num) => total + num, 0)
    return sum / arr.length
}
console.log(calcAverage(numbers))