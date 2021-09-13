import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFilterListComponent } from './layout-filter-list.component';

describe('LayoutFilterListComponent', () => {
  let component: LayoutFilterListComponent;
  let fixture: ComponentFixture<LayoutFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutFilterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
