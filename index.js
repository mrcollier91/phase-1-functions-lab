function distanceFromHqInBlocks(aStart) {
    if (aStart > 42) 
       return aStart - 42; 
    else (aStart < 42)
        return 42 - aStart
}

function distanceFromHqInFeet(bStart) {
    if (bStart > 42)
        return (bStart - 42) * 264;
    else (bStart < 42) 
        return (42 - bStart) * 264;
}

function distanceTravelledInFeet(start, stop) {
    if (start > stop)
        return (start - stop) * 264
    else (start < stop)
        return (stop - start) * 264 
}

function calculatesFarePrice(start2, stop2) {
    let blockDistance = (start2 - stop2)
    let distanceInFeet = distanceTravelledInFeet(start2, stop2)
    if (distanceInFeet <= 400)
        return 0
    else if (distanceInFeet > 400 && distanceInFeet < 2000)
        return (distanceInFeet-400) * 0.02
    else if(distanceInFeet >= 2000 && distanceInFeet <2500 )
        return 25
    else (distanceInFeet > 2500)
    return 'cannot travel that far'
}