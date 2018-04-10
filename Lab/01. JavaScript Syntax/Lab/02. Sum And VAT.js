'use strict'

function sumAndVat(input){
    let sum = 0

    for(let number of input){
        sum += number
    }

    console.log("sum = " + sum)
    console.log("VAT = " + sum * 0.2)
    console.log("total = " + sum * 1.2)
}

sumAndVat([1.2, 2.6, 3.5])