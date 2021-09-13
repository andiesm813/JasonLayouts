import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGridTreeMapComponent } from './list-grid-tree-map.component';

describe('ListGridTreeMapComponent', () => {
  let component: ListGridTreeMapComponent;
  let fixture: ComponentFixture<ListGridTreeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGridTreeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGridTreeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
