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

  constructor(
    private slotAPI: SlotAPI,
    private route : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.slotAPI.getSlotMachine(id).subscribe({
      next: slotMachine => {
        this.slotMachine = slotMachine;
        console.log(this.slotMachine);
      },
      error: err => this.router.navigateByUrl('/SlotMachine')
    });
  }
}
