import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutGridGridComponent } from './layout-grid-grid.component';

describe('LayoutGridGridComponent', () => {
  let component: LayoutGridGridComponent;
  let fixture: ComponentFixture<LayoutGridGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutGridGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutGridGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
