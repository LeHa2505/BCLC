import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTransactionsComponent } from './manage-transactions.component';

describe('ManageTransactionsComponent', () => {
  let component: ManageTransactionsComponent;
  let fixture: ComponentFixture<ManageTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
