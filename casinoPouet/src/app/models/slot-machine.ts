export class SlotMachine {
  constructor(
    public id: number = 0,
    public name: string = "",
    public descr: string = "",
    public reels: number = 0,
    public bets: number[] = [],
    public wilds: number[] = [],
    public symbols: number[] = []
  ){}

  public static roll(reel: number, symbol: number): number[][] {
    let matrice: number[][] = [];
    for (let j = 0; j < 3; j++) {
      matrice[j] = [];
      for (let i = 0; i < reel; i++) {
        matrice[j][i] = Math.floor(Math.random() * symbol + 1);
        while(matrice[j][i] == matrice[j][i-1] || matrice[j][i] == matrice[j][i-2]) {
          matrice[j][i] = Math.floor(Math.random() * symbol + 1);
        }
      }
    }
    return matrice;
  }

  public static gain(matrice: number[][], wilds: number[], symbols: number[]): number {
    let win: number = 0;
    for (let reel = 0; reel < 3; reel++) {
      if(matrice[0][reel] == matrice [1][reel] && matrice[1][reel] == matrice[2][reel]) { // 3 symbols
        win = symbols[matrice[0][reel]-1];
      }else if((matrice[0][reel] == matrice [1][reel] && wilds.includes(matrice[2][reel]))){ // 2 symbols + 1 wild
        win = symbols[matrice[0][reel]-1]/2;
      }else if(matrice[0][reel] == matrice [2][reel] && wilds.includes(matrice[1][reel])){ // symbol + wild + symbol
        win = symbols[matrice[0][reel]-1]/2;
      }else if(matrice[1][reel] == matrice [2][reel] && wilds.includes(matrice[0][reel])) { // wild + 2 symbols
        win = symbols[matrice[1][reel]-1]/2;
      }else if((wilds.includes(matrice[0][reel]) && wilds.includes(matrice[1][reel]))){ // 2 wilds + symbol
        win = symbols[matrice[2][reel]-1]/4;
      }else if(wilds.includes(matrice[0][reel]) && wilds.includes(matrice[2][reel])){ // wild + symbol + wild
        win = symbols[matrice[1][reel]-1]/4;
      } else if (wilds.includes(matrice[1][reel]) && wilds.includes(matrice[2][reel])) { // symbol + 2 wilds
        win = symbols[matrice[0][reel]-1]/4;
      }
    }
    return win;
  }


}
