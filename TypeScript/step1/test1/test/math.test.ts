const math = require('../src/math.ts');
test('mathAdd: 1 + 2 = 3' as string, () => {
  expect(math.mathAdd(1, 2)).toBe(3);
});

test('mathSub: 1 - 2 = -1', () => {
  expect(math.mathSub(1, 2)).toBe(-1);
});
