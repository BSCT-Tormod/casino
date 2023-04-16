import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouletteComponent } from './games/roulette/roulette.component';
import { BlackJackComponent } from './games/black-jack/black-jack.component';
import { SlotMachineComponent } from './games/slot-machine/slot-machine.component';
import { MainComponent } from './main/main.component';
import { SlotMachineListComponent } from './slot-machine-list/slot-machine-list.component';
import { SlotMachineGameComponent } from './slot-machine-game/slot-machine-game.component';
import { HttpClientModule } from '@angular/common/http';
import { LogComponent } from './account/log/log.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RouletteComponent,
    BlackJackComponent,
    MainComponent,
    SlotMachineComponent,
    SlotMachineListComponent,
    SlotMachineGameComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
