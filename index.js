
const distanceFromHqInBlocks = (blockNumber) => {

    const hqStreetNumber = 42

    let distanceInBlocks = Math.abs(hqStreetNumber - blockNumber)

    return(distanceInBlocks)
}

const distanceFromHqInFeet = (blockNumber2) => {

    let distanceInFeet = distanceFromHqInBlocks(blockNumber2) * 264
    
    return(distanceInFeet)
}

const distanceTravelledInFeet = (startBlock, endBlock) => {

    let distanceInFeet = Math.abs(startBlock - endBlock) * 264 

    return(distanceInFeet)
}

const calculatesFarePrice = (start, destination) => {

    let farePrice = 0;
    let distanceInFeet = Math.abs(start - destination) * 264 
    
    
    if (distanceInFeet <= 400) {
        farePrice = 0;
    }
        else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
            farePrice = (distanceInFeet - 400) * 0.02
        }
        else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
            farePrice = 25.00
        }
        else if (distanceInFeet > 2500) {
            farePrice = 'cannot travel that far'
        }

    return(farePrice)

}


