import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAgreementsComponent } from './manage-agreements.component';

describe('ManageAgreementsComponent', () => {
  let component: ManageAgreementsComponent;
  let fixture: ComponentFixture<ManageAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAgreementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
