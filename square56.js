const square56 = (ListOfNums) => {
    let squaredNums = ListOfNums.map((x) => {
        return (x * x) + 10
    })

    let noFives = squaredNums.filter(x => x % 10 != 5)

    let noSixes = noFives.filter(x => x % 10 != 6)
    
    return noSixes
}

exports.square56 = square56;

