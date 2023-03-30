export class SlotMachine {
  constructor(
    public id: number = 0,
    public name: string = "",
    public descr: string = "",
    public reels: number = 0,
    public bets: number[] = [],
    public symbols: {
      id : number,
      name: string,
      value: number
    }[] = []
  ){}

  public static roll(reel: number, symbol: number): number[][] {
    let matrice: number[][] = [];
    for (let j = 0; j < 3; j++) {
      matrice[j] = [];
      for (let i = 0; i < reel; i++) {
        matrice[j][i] = Math.floor(Math.random() * symbol + 1);
      }
    }
    return matrice;
  }
}
