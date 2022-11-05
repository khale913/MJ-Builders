import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToSpotWaterDamageComponent } from './how-to-spot-water-damage.component';

describe('HowToSpotWaterDamageComponent', () => {
  let component: HowToSpotWaterDamageComponent;
  let fixture: ComponentFixture<HowToSpotWaterDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToSpotWaterDamageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToSpotWaterDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
