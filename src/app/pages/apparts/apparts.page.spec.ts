import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartsPage } from './apparts.page';

describe('AppartsPage', () => {
  let component: AppartsPage;
  let fixture: ComponentFixture<AppartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
