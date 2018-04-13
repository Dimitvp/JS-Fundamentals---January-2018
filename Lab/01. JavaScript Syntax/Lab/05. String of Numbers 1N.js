'use strict'

function stringOfNumbers(n){
    let str = ''
    for (let i=1; i<=n; i++) str += i
    return str
}

let output = stringOfNumbers(11)

console.log(output)