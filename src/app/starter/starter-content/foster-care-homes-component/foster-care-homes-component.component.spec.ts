import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterCareHomesComponentComponent } from './foster-care-homes-component.component';

describe('FosterCareHomesComponentComponent', () => {
  let component: FosterCareHomesComponentComponent;
  let fixture: ComponentFixture<FosterCareHomesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterCareHomesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterCareHomesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
