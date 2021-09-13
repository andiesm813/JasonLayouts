import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGridComponent } from './grid-grid.component';

describe('GridGridComponent', () => {
  let component: GridGridComponent;
  let fixture: ComponentFixture<GridGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
