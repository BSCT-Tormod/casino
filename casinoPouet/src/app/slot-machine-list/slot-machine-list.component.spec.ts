import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotMachineListComponent } from './slot-machine-list.component';

describe('SlotMachineListComponent', () => {
  let component: SlotMachineListComponent;
  let fixture: ComponentFixture<SlotMachineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotMachineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotMachineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
