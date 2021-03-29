const hasOne = (n) => {
    let i = n
    while (i >= 1){
        if (i % 10 == 1){
            return true
        }
        i /= 10
    }
    return false
}

exports.hasOne = hasOne