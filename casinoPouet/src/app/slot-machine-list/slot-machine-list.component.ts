import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SlotMachine } from '../models/slot-machine';
import { SlotAPI } from '../service/slot-api';

@Component({
  selector: 'app-slot-machine-list',
  templateUrl: './slot-machine-list.component.html',
  styleUrls: ['./slot-machine-list.component.css']
})
export class SlotMachineListComponent {
  public slotMachines! : Observable<SlotMachine[]>;

  constructor(
    private slotAPI: SlotAPI
  ) { }

  ngOnInit() : void{
    this.slotMachines = this.slotAPI.getAllSlotMachines();
  }
}
