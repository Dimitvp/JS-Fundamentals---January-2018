function leapYear(y){
    let leap = (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)
    console.log(leap ? "yes" : "no")
}
leapYear(1999)