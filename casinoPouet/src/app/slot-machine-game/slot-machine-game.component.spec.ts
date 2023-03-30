import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotMachineGameComponent } from './slot-machine-game.component';

describe('SlotMachineGameComponent', () => {
  let component: SlotMachineGameComponent;
  let fixture: ComponentFixture<SlotMachineGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotMachineGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotMachineGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
