import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutListGridTreeMapComponent } from './layout-list-grid-tree-map.component';

describe('LayoutListGridTreeMapComponent', () => {
  let component: LayoutListGridTreeMapComponent;
  let fixture: ComponentFixture<LayoutListGridTreeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutListGridTreeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutListGridTreeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
