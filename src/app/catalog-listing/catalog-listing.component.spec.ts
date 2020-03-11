import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListingComponent } from './catalog-listing.component';

describe('CatalogListingComponent', () => {
  let component: CatalogListingComponent;
  let fixture: ComponentFixture<CatalogListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
