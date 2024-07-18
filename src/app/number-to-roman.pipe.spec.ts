import { NumberToRomanPipe } from './number-to-roman.pipe';

describe('NumberToRomanPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToRomanPipe();
    expect(pipe).toBeTruthy();
  });
});
