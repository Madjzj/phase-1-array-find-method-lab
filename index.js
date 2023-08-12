// code your solution here
function superbowlWin(record){
    const win = record.find(findWin);
    if(typeof win === "object"){
        return win.year;
    } else {
        return;
    }
    
}
function findWin(element, index, array){
    if(element.result === "W"){
        const winYear = element
        return winYear;
    }

}