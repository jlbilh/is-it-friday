const isItFriday = require('./isItFriday')

test('Invokes isItFriday function', () => {
    expect(isItFriday(new Date())).toBeDefined();
})