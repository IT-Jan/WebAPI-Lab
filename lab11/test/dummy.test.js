// This test fails because 1 !== 2
it('Testing to see if Jest works', () => {
    expect(1).toBe(2)
})

// This passes because 1 === 1
it('Testing to see if Jest works 2', () => {
    expect(1).toBe(1)
})