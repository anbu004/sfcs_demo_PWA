import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterCareHomeComponentComponent } from './foster-care-home-component.component';

describe('FosterCareHomeComponentComponent', () => {
  let component: FosterCareHomeComponentComponent;
  let fixture: ComponentFixture<FosterCareHomeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FosterCareHomeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FosterCareHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
