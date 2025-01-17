import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCreateComponent } from './people-create.component';

describe('PeopleCreateComponent', () => {
  let component: PeopleCreateComponent;
  let fixture: ComponentFixture<PeopleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleCreateComponent]
    });
    fixture = TestBed.createComponent(PeopleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
