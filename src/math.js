const calculateTip = (total, tippercent)=>{
    const tip = total * tippercent
    return tip + total
}
module.exports = {
    calculateTip
}