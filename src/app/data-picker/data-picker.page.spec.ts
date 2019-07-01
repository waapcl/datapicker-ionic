import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPickerPage } from './data-picker.page';

describe('DataPickerPage', () => {
  let component: DataPickerPage;
  let fixture: ComponentFixture<DataPickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
