import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGridChartComponent } from './grid-grid-chart.component';

describe('GridGridChartComponent', () => {
  let component: GridGridChartComponent;
  let fixture: ComponentFixture<GridGridChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridGridChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGridChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
