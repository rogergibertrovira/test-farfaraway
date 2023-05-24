import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCardAdminComponent } from './offer-card-admin.component';

describe('OfferCardAdminComponent', () => {
  let component: OfferCardAdminComponent;
  let fixture: ComponentFixture<OfferCardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferCardAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferCardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
