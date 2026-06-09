import { describe, expect, test } from 'vitest';

describe('probability system', () => {
  test('lose', () => {
    const sut = new ProbabilitySystem()
    expect(sut.spin()).toBe(0);
  })
});

class ProbabilitySystem {
  spin(): number {
    return 0;
  }
}
