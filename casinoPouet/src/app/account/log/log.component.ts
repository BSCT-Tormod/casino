import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { Account } from 'src/app/models/account';
import { SlotAPI } from 'src/app/service/slot-api';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  public isLogin: boolean = true;

  public pseudo: string="";
  public password: string="";

  public account: Account = new Account();

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private slotAPI: SlotAPI
  ) {}

  ngOnInit() : void {
    this.route.url.pipe(
      map(segment => segment[0].toString())
    ).subscribe(segment => {
      this.isLogin = segment === 'Login';
    });
  }

  public async onLogin(form: NgForm): Promise<void> {
    const stringHash = require("string-hash");
    this.password = stringHash(this.password);
    try {
      const accounts: Account[] | undefined = await this.slotAPI.getAllAccounts().toPromise();
      if (accounts) {
        for (let account of accounts) {
          if (account.name === this.pseudo && account.hash === this.password) {
            console.log("OK");
            document.cookie = "account=" + account.id + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            this.router.navigateByUrl('/');
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  public onSingIn(form: NgForm): void {
    const stringHash = require("string-hash");
    this.slotAPI.getAllAccounts().subscribe(accounts => {
      this.account.id = accounts.length + 1;
    });
    this.account.name = this.pseudo;
    this.account.hash = stringHash(this.password);
    this.account.pouets = 0;
    this.slotAPI.addAccount(this.account).subscribe();
    document.cookie = "account=" + this.account.id + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    this.router.navigateByUrl('/');
  }

}
