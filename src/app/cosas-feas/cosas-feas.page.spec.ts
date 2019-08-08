import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosasFeasPage } from './cosas-feas.page';

describe('CosasFeasPage', () => {
  let component: CosasFeasPage;
  let fixture: ComponentFixture<CosasFeasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosasFeasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosasFeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
