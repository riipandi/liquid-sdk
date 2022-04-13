import { sum } from '../src';

describe('ping', () => {
  it('pong', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
