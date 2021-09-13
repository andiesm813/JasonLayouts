import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGridGridChartComponent } from './layout-grid-grid-chart.component';

describe('LayoutGridGridChartComponent', () => {
  let component: LayoutGridGridChartComponent;
  let fixture: ComponentFixture<LayoutGridGridChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutGridGridChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutGridGridChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
