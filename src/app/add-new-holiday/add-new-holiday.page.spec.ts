import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHolidayPage } from './add-new-holiday.page';

describe('AddNewHolidayPage', () => {
  let component: AddNewHolidayPage;
  let fixture: ComponentFixture<AddNewHolidayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewHolidayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHolidayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
