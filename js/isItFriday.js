function isItFriday(date) {
    let day = date.getDay();
    return (day === 5);
}

module.exports = isItFriday