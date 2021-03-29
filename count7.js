const count7 = (n) => {
    let result = 0
    let nums = n.toString().split("")
    for (num of nums){
        if (num == '7'){
            result ++
        }
    }
    return result
}

exports.count7 = count7