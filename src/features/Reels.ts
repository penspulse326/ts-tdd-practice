export class Reels {
  private readonly reels: Array<Array<string>>;

  constructor(reels: Array<Array<string>>) {
    this.reels = reels;
  }

  isRowHit(row: number): boolean {
    const uniqueElement = new Set<string>();
    for (let i = 0; i < 5; i++) {
      const reel = this.reels[i];
      uniqueElement.add(reel[row]);
    }

    return uniqueElement.size === 1;
  }
}
