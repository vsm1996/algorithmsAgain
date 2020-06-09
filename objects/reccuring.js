function firstRecurringCharacter(arr) {
    let map = {};

    for(let i = 0; arr.length; i++) {
        if(map[arr[i]] !== undefined) {
            return arr[i];
        } else {
            map[arr[i]] = i
        }
    }
    
    return undefined;
}

console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))