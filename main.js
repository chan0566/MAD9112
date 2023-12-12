/* Question 1: Days until Christmas */

function getDaysUntilChristmas() {
    let today = new Date();
    let presentDay = today.getDate();
    let christmas = 25;

    return christmas - presentDay
}

console.log("There are",getDaysUntilChristmas(), "days until Christmas!")