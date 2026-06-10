export class Reels {
  private readonly reels: Array<Array<string>>;

  constructor(reels: Array<Array<string>>) {
    this.reels = reels;
  }

  isRow1Hit(): boolean {
    const firstElementsSet = new Set<string>();
    for (let i = 0; i < 5; i++) {
      const reel = this.reels[0];
      firstElementsSet.add(reel[0]);
    }

    return firstElementsSet.size === 1;
  }
}
