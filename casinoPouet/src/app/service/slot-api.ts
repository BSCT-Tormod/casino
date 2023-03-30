import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SlotMachine } from '../models/slot-machine';

@Injectable({
  providedIn: 'root'
})

export class SlotAPI {
  readonly slotMachineAPI = 'http://localhost:3000/slot-machine';

  constructor(private http: HttpClient) {}


  getAllSlotMachines() :Observable<SlotMachine[]>{
    return this.http.get<SlotMachine[]>(this.slotMachineAPI);
  }

  getSlotMachine(id:number) :Observable<SlotMachine>{
    return this.http.get<SlotMachine>(this.slotMachineAPI+'/'+id);
  }
}
