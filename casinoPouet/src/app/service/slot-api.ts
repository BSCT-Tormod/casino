import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SlotMachine } from '../models/slot-machine';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})

export class SlotAPI {
  readonly slotMachineAPI = 'http://localhost:3000/slot-machine';
  readonly accountAPI = 'http://localhost:3000/account';

  constructor(private http: HttpClient) {}


  getAllSlotMachines() :Observable<SlotMachine[]>{
    return this.http.get<SlotMachine[]>(this.slotMachineAPI);
  }

  getSlotMachine(id:number) :Observable<SlotMachine>{
    return this.http.get<SlotMachine>(this.slotMachineAPI+'/'+id);
  }

  addAccount(account: Account) :Observable<Account>{
    return this.http.post<Account>(this.accountAPI, account);
  }

  getAllAccounts() :Observable<Account[]>{
    return this.http.get<Account[]>(this.accountAPI);
  }

  getAccount(id:number) :Observable<Account>{
    return this.http.get<Account>(this.accountAPI+'/'+id);
  }

  updateAccount(account: Account) :Observable<Account>{
    return this.http.put<Account>(this.accountAPI+'/'+account.id, account);
  }

  getCookie(name: string): string | undefined {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2){
      return parts.pop()!.split(";").shift();
    }
    return undefined;
  }
}
