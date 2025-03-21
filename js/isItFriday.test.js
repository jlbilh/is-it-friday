const isItFriday = require('./isItFriday')

const easterDate = (y) => {
    const c = Math.floor(y/100);
    const n = y - 19*Math.floor(y/19);
    const k = Math.floor((c - 17)/25);
    let i = c - Math.floor(c/4) - Math.floor((c - k)/3) + 19*n + 15;
    i = i - 30*Math.floor((i/30));
    i = i - Math.floor(i/28)*(1 - Math.floor(i/28)*Math.floor(29/(i + 1))*Math.floor((21 - n)/11));
    let j = y + Math.floor(y/4) + i + 2 - c + Math.floor(c/4);
    j = j - 7*Math.floor(j/7);
    const l = i - j;
    const m = 3 + Math.floor((l + 40)/44);
    const d = l + 28 - 31*Math.floor(m/4);

    return new Date(y, m-1, d);
}

test('Invokes isItFriday function', () => {
    expect(isItFriday(new Date())).toBeDefined();
})

test('Easter is not Friday', () => {
    var thisYear = new Date().getYear();
    var thisEaster = easterDate(thisYear);
    expect(isItFriday(thisEaster)).toBe(false);
})

test('Easter is never Friday', () => {
	let minYear = 1600;
	let maxYear = 9999;
	for (let i = 0; i < 100; i++) {
		var randomYear = Math.floor(Math.random() * (maxYear - minYear) + minYear);
		var randomEaster = easterDate(randomYear);
		expect(isItFriday(randomEaster)).toBe(false);
	} 
})