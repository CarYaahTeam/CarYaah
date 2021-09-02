import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionCustomerComponent } from './opinion-customer.component';

describe('OpinionCustomerComponent', () => {
  let component: OpinionCustomerComponent;
  let fixture: ComponentFixture<OpinionCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpinionCustomerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
