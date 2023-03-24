// code your solution here
function superbowlWin(arr) {
    for (const { result, year } of arr) {
        if (result === "W") {
            return year;
        }
    }
}