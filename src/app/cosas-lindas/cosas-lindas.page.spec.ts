import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosasLindasPage } from './cosas-lindas.page';

describe('CosasLindasPage', () => {
  let component: CosasLindasPage;
  let fixture: ComponentFixture<CosasLindasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosasLindasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosasLindasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
