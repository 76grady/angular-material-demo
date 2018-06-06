import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrioritySidebarComponent } from './add-priority-sidebar.component';

describe('AddPrioritySidebarComponent', () => {
  let component: AddPrioritySidebarComponent;
  let fixture: ComponentFixture<AddPrioritySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrioritySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrioritySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
