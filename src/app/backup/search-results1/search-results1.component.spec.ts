import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResults1Component } from './search-results1.component';

describe('SearchResults1Component', () => {
  let component: SearchResults1Component;
  let fixture: ComponentFixture<SearchResults1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResults1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResults1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
