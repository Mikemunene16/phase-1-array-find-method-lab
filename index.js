// code your solution here
function superbowlWin(arr) {
    // for (const { result, year } of arr) {
    //     if (result === "W") {
    //         return year;
    //     }
    // }

    const win = arr.find((obj) => obj.result === "W");
    return win ? win.year : undefined;
}