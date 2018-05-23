import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasterCareHomesListComponentComponent } from './faster-care-homes-list-component.component';

describe('FasterCareHomesListComponentComponent', () => {
  let component: FasterCareHomesListComponentComponent;
  let fixture: ComponentFixture<FasterCareHomesListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasterCareHomesListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasterCareHomesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
