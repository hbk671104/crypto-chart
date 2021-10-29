export const convertTo2D = (arr) => {
    let tempSymbol
    let tempArray = []
    let bigArray = []

    for (let item of arr) {
        item = item.toJSON()

        if (tempSymbol === item.symbol) {
            tempArray.push(item)
        } else {
            if (!tempSymbol) {
                tempArray.push(item)
            } else {
                bigArray.push(tempArray)
                tempArray = []
            }
            tempSymbol = item.symbol
        }
    }
    bigArray.push(tempArray)

    return bigArray
}
