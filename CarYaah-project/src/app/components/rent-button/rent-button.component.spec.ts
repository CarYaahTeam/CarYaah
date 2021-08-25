import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentButtonComponent } from './rent-button.component';

describe('RentButtonComponent', () => {
  let component: RentButtonComponent;
  let fixture: ComponentFixture<RentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
