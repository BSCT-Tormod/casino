import { Component, Input } from '@angular/core';
import { SlotMachine } from 'src/app/models/slot-machine';

@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.component.html',
  styleUrls: ['./slot-machine.component.css']
})
export class SlotMachineComponent {

    @Input()
     slotMachine: SlotMachine = new SlotMachine();
}
