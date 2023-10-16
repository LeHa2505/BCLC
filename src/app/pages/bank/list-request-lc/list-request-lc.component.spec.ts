import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRequestLcComponent } from './list-request-lc.component';

describe('ListRequestLcComponent', () => {
  let component: ListRequestLcComponent;
  let fixture: ComponentFixture<ListRequestLcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRequestLcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRequestLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
