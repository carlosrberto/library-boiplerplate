import { intToBin, binToInt } from './index';

it('should return a binary from a integer', () => {
  expect(intToBin(12)).toEqual('1100');
});

it('should return a integer from a binary', () => {
  expect(binToInt('1100')).toEqual(12);
});
