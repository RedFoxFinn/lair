
describe('state management tests', () => {
    let dummy = false;
    test('dummy test', () => {
        expect(dummy).toBe(false);
        dummy = true;
        expect(dummy).toBe(true);
    });
});