const SUNDAY = 0;
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;

function isItFriday(date) {
    let day = date.getDay();
    return (day === FRIDAY);
}

module.exports = isItFriday