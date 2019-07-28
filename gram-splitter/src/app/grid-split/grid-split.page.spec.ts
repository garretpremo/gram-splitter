import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSplitPage } from './grid-split.page';

describe('GridSplitPage', () => {
  let component: GridSplitPage;
  let fixture: ComponentFixture<GridSplitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSplitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSplitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
