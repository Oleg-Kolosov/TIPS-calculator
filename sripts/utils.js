// UTILS
export function getTotalCost(value, tips){
    return value ? parseFloat((value + (value * tips / 100)).toFixed(2)) : 0
}

export function getPersonTotalCost(total, persons){
    return persons ? parseFloat((total / persons).toFixed(2)) : 0
}