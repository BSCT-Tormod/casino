import { Component } from '@angular/core';
import { Account } from '../models/account';
import { SlotAPI } from '../service/slot-api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  public account : Account = new Account();

  constructor(
    private slotAPI: SlotAPI,
  ) { }

  ngOnInit() :void {
    let id = 0;
    if (this.slotAPI.getCookie('account') != undefined){
      id = Number(this.slotAPI.getCookie('account'));
    }
    this.slotAPI.getAccount(id).subscribe(account =>
      this.account = account
    );
    console.log(this.slotAPI.getCookie('account'));
    console.log(this.account);
  }
}
