import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOrderListComponent } from './shipping-order-list.component';

describe('ShippingOrderListComponent', () => {
  let component: ShippingOrderListComponent;
  let fixture: ComponentFixture<ShippingOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingOrderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
