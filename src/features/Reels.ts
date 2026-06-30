export class Reels {
  private index: number;
  private nextIndex: number;
  private readonly reels: Array<Array<string>>;

  constructor(reels: Array<Array<string>>, nextIndex: number) {
    this.reels = reels;
    this.index = 0;
    this.nextIndex = nextIndex;
  }

  static create(nextIndex: number, rawReels: Array<Array<string>>) {
    return new Reels(rawReels, nextIndex);
  }

  isRowHit(row: number): boolean {
    const screen: Array<Array<string>> = [];
    for (let i = 0; i < this.reels.length; i++) {
      screen.push(this.reels[i].slice(this.index, this.index + 3));
    }

    const uniqueElements = new Set<string>();
    for (let i = 0; i < screen.length; i++) {
      const screenReel: string[] = screen[i];
      uniqueElements.add(screenReel[row]);
    }

    return uniqueElements.size === 1;
  }

  spin() {
    this.index = this.nextIndex;
  }
}
