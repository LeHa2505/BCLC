import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLcComponent } from './list-lc.component';

describe('ListLcComponent', () => {
  let component: ListLcComponent;
  let fixture: ComponentFixture<ListLcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
