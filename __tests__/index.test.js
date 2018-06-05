import * as Stuff from '../src/index';

describe('', () => {
    it('exports stuff', () => {
        expect(Object.keys(Stuff).length).toBeGreaterThan(0);
    })
});
