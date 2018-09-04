import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrServicesComponent } from './hr-services.component';

describe('HrServicesComponent', () => {
  let component: HrServicesComponent;
  let fixture: ComponentFixture<HrServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
