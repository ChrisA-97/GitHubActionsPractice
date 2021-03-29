const scoresClump = (scores) => { 
    return scores.slice(0, scores.length - 2).find((el, ind, arr) => {
        return scores[ind + 2] - scores[ind] <= 2
    }) != undefined
    // for (let i = 0; i < scores.length - 2; i++){
    //     let difference = scores[i + 2] - scores[i]
    //     if (difference <= 2){
    //         return true
    //     }
    // }
    // return false
}

exports.scoresClump = scoresClump