import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlotMachine } from '../models/slot-machine';
import { SlotAPI } from '../service/slot-api';

@Component({
  selector: 'app-slot-machine-game',
  templateUrl: './slot-machine-game.component.html',
  styleUrls: ['./slot-machine-game.component.css']
})
export class SlotMachineGameComponent {
  public slotMachine: SlotMachine | undefined;
  public matrice: number[][] = [[],[],[]];
  public activeBet: number = 0;
  public credits: number = 1000;

  constructor(
    private slotAPI: SlotAPI,
    private route : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.slotAPI.getSlotMachine(id).subscribe({
      next: slotMachine => {
        this.slotMachine = slotMachine;
      },
      error: err => this.router.navigateByUrl('/SlotMachine')
    });
  }

  public spin(): void {
    if(this.credits < this.slotMachine!.bets[this.activeBet]) {
      document.querySelector<HTMLImageElement>('#noCredits')!.style.visibility = 'visible';
      return;
    }
    this.credits -= this.slotMachine!.bets[this.activeBet];
    this.matrice = SlotMachine.roll(this.slotMachine!.reels, this.slotMachine!.symbols.length);
    if(Number(SlotMachine.gain(this.matrice, this.slotMachine!.wilds, this.slotMachine!.symbols)) > 0) {
      setTimeout(() => {
        alert('You win ! \nYou win ' + Math.floor((SlotMachine.gain(this.matrice, this.slotMachine!.wilds, this.slotMachine!.symbols)*this.slotMachine!.bets[this.activeBet])) + ' pouets !');
      }, 100);
      this.credits += Math.floor(SlotMachine.gain(this.matrice, this.slotMachine!.wilds, this.slotMachine!.symbols)*this.slotMachine!.bets[this.activeBet]);
    }
    console.log(this.slotMachine!.bets[this.activeBet])
  }

  public changeBet(): void {
    this.activeBet = (this.activeBet + 1) % this.slotMachine!.bets.length;
  }


  public onClose(): void {
    window.close();
    console.log('close');
  }
}
