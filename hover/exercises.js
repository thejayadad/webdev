
const numbers = [5,6,2,2,9,10]
//NESTED LOOPS
function findDups(arr){
    const duplicates = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
                duplicates.push(arr[i])
            }
        }
    }
    return duplicates
    
}

console.log(findDups(numbers))
//FILTER INDEXOF


//OBJECT TRACKING