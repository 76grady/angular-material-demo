import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrioirtyComponent } from './add-prioirty.component';

describe('AddPrioirtyComponent', () => {
  let component: AddPrioirtyComponent;
  let fixture: ComponentFixture<AddPrioirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrioirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrioirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
