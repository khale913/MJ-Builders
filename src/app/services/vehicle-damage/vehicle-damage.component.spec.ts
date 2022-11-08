import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDamageComponent } from './vehicle-damage.component';

describe('VehicleDamageComponent', () => {
  let component: VehicleDamageComponent;
  let fixture: ComponentFixture<VehicleDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
