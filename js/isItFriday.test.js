const isItFriday = require('./isItFriday')

test('Invokes isItFriday function', () => {
    expect(isItFriday(new Date())).toBeDefined();
})

test('Today is not Friday', () => {
    expect(isItFriday(new Date())) === false;
})