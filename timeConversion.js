function timeConversion(s) {

    //split string by :
    let str = s.split(":")
    console.log(str)
    
    
    //seperate meridiem area for am/pm check save P or A
    let meridiem = str[2].split("")[2]
    
    // seperate meridiem area to pop off AM/PM
    let last = str[2].split("")
    
    console.log("last", last)
    //
    last.pop()
    last.pop()
    let joinedLast = last.join('')
    

    if(meridiem === 'A' && str[0] === '12') {
        str[0] = '00'
    }
    
    if(meridiem === 'P') {
        let possibleChange = parseInt(str[0],10)
        if(possibleChange != 12) {
            possibleChange += 12
        }
        let toStr = possibleChange.toString()
        str[0] = toStr
    }
    str[2] = joinedLast
    let fin = str.join(":")

    console.log(fin)

    return fin
}

console.log(timeConversion("11:45:54AM"))