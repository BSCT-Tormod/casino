import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlackJackComponent } from './games/black-jack/black-jack.component';
import { RouletteComponent } from './games/roulette/roulette.component';
import { SlotMachineComponent } from './games/slot-machine/slot-machine.component';
import { MainComponent } from './main/main.component';
import { SlotMachineGameComponent } from './slot-machine-game/slot-machine-game.component';
import { SlotMachineListComponent } from './slot-machine-list/slot-machine-list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'SlotMachine', component: SlotMachineListComponent },
  { path: 'BlackJack', component: BlackJackComponent},
  { path:'Roulette', component: RouletteComponent },
  { path: 'SlotMachine/:id', component: SlotMachineGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
